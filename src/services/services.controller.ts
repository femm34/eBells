import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServicesService } from './services.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { cloudinaryFolders } from 'src/config/constants/cloudinaryFolders';
import { extractPublicId } from 'cloudinary-build-url';

@ApiTags('Services')
@ApiBearerAuth()
@Controller('services')
export class ServicesController {
  cloudinaryService: any;
  constructor(private readonly servicesService: ServicesService) { }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@UploadedFile() image: Express.Multer.File, @Body() createServiceDto: CreateServiceDto) {
    const imageUrl = await this.cloudinaryService.uploadImage(image, cloudinaryFolders.services, 300, 300);
    const savedData = {
      service_name: createServiceDto.service_name,
      service_description: createServiceDto.service_description,
      service_image_url: imageUrl.secure_url,
    };
    return this.servicesService.create(savedData);
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(@UploadedFile() image: Express.Multer.File, @Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    const service = await this.servicesService.findOne(+id);
    if (!service) {
      throw new NotFoundException('Portfolio not found');
    }
    let publicId = extractPublicId(service.service_image_url);
    const imageUrl = await this.cloudinaryService.updateImage(publicId.split("/")[1], image, cloudinaryFolders.services, 300, 300);
    const savedData = {
      service_name: updateServiceDto.service_name,
      service_description: updateServiceDto.service_description,
      service_image_url: imageUrl.secure_url,
    };
    return this.servicesService.update(+id, savedData);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const service = await this.servicesService.findOne(+id);
    if (!service) {
      return {
        success: false, message: 'Portfolio doesnt exist'
      };
    }

    if (service.service_image_url) {
      const publicId = extractPublicId(service.service_image_url);
      console.log(publicId)
      await this.cloudinaryService.deleteImage(publicId);
    }
    return this.servicesService.remove(+id);
  }
}

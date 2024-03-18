import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { PortfolioService } from './portfolio.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { extractPublicId } from 'cloudinary-build-url'


@ApiTags('Portfolio')
@ApiBearerAuth()
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService,
    private cloudinaryService: CloudinaryService) { }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@UploadedFile() image: Express.Multer.File, @Body() createPortfolioDto: CreatePortfolioDto): Promise<any> {
    const imageUrl = await this.cloudinaryService.uploadImage(image, 'portfolioImages', 300, 300);
    const savedData = {
      work_name: createPortfolioDto.work_name,
      work_image_url: imageUrl.secure_url,
    };
    return this.portfolioService.create(savedData);
  }

  @Get()
  findAll() {
    return this.portfolioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portfolioService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePortfolioDto: UpdatePortfolioDto) {
    return this.portfolioService.update(+id, updatePortfolioDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const portfolio = await this.portfolioService.findOne(+id);
    if (!portfolio) {
      return {
        success: false, message: 'Portfolio doesnt exist'
      };
    }

    if (portfolio.work_image_url) {
      const publicId = extractPublicId(portfolio.work_image_url);
      console.log(publicId)
      await this.cloudinaryService.deleteImage(publicId);
    }

    return this.portfolioService.remove(+id);
  }
}

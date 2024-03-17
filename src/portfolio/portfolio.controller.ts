import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreatePortfolioDto } from './dto/create-portfolio.dto';
import { UpdatePortfolioDto } from './dto/update-portfolio.dto';
import { PortfolioService } from './portfolio.service';


@ApiTags('Portfolio')
@ApiBearerAuth()
@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) { }


  @UseGuards(AuthGuard, RolesGuard)
  @Roles('adminstrator', 'sudo')
  @Post()
  create(@Body() createPortfolioDto: CreatePortfolioDto) {
    return this.portfolioService.create(createPortfolioDto);
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
  remove(@Param('id') id: string) {
    return this.portfolioService.remove(+id);
  }
}

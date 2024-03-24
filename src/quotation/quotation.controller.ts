import { Body, Controller, Post } from '@nestjs/common';
import { QuotationService } from './quotation.service';
import { CreateQuotationDto } from './dto/create-quotation.dto';

@Controller('quotation')
export class QuotationController {
  constructor(private readonly emailService: QuotationService) { }
  @Post()
  async sendEmail(@Body() CreateQuotationDto: CreateQuotationDto): Promise<void> {
    await this.emailService.sendEmail(CreateQuotationDto);
  }
}

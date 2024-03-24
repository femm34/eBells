import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { CreateQuotationDto } from './dto/create-quotation.dto';
import { Repository } from 'typeorm';
import { Quotation } from './entities/quotation.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuotationService {
  constructor(@InjectRepository(Quotation) private quotationRepository: Repository<Quotation>, private readonly mailerService: MailerService) { }

  async sendEmail(createQuotationDto: CreateQuotationDto): Promise<void> {
    const newQuotation = this.quotationRepository.create(createQuotationDto);
    await this.quotationRepository.save(newQuotation);

    const mailToSend = {
      to: 'femm15.mm@gmail.com',
      subject: 'Tienes una nueva cotización',
      html: `Cliente: <strong>${createQuotationDto.name}</strong><br>Email: ${createQuotationDto.client_email}<br>Teléfono: ${createQuotationDto.cellphone_number}<br>Cotización: ${createQuotationDto.message}`
    };

    await this.mailerService.sendMail(mailToSend);
    return;
  }
}

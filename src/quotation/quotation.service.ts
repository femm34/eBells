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
      subject: 'Arca de la Alianza: Tienes una nueva cotización',
      html: `<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, sans-serif; color: #000000;">
    <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; max-width: 600px; margin: 0 auto;">
        <tr>
            <td style="padding: 20px; border: 2px solid #cccccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <table cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" style="background-color: #331206; padding: 10px;">
                            <h1 style="margin: 0; color: #ffffff;">Cotización</h1>
                        </td>
                    </tr>
                </table>
                <table cellpadding="20" cellspacing="0" width="100%" style="background-color: #f1f1f1; border-radius: 5px; margin-top: 20px;">
                    <tr>
                        <td>
                            <h2 style="margin-top: 0;">Detalles del usuario</h2>
                            <table cellpadding="5" cellspacing="0" width="100%">
                                <tr>
                                    <td><strong>Nombre:</strong></td>
                                    <td>${createQuotationDto.name}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>${createQuotationDto.client_email}</td>
                                </tr>
                                <tr>
                                    <td><strong>Número de teléfono:</strong></td>
                                    <td><a href="https://wa.me/${createQuotationDto.cellphone_number}" style="text-decoration: none; color: #000000;">${createQuotationDto.cellphone_number} <img src="https://cdn-icons-png.flaticon.com/512/1384/1384023.png" alt="" style="height: 20px; margin-left: 5px;"></a></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="20" cellspacing="0" width="100%" style="background-color: #f1f1f1; border-radius: 5px; margin-top: 20px;">
                    <tr>
                        <td>
                            <h2 style="margin-top: 0;">Mensaje</h2>
                            <p style="margin: 5px 0;">${createQuotationDto.message}</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`
    };


    await this.mailerService.sendMail(mailToSend);
    return;
  }
}

import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { EnvConfigService } from '../envConfig/envConfig.service';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import { SentMessageInfo } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter<SentMessageInfo>;

  constructor(private envConfig: EnvConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.envConfig.getString('SMTP_HOST'),
      port: this.envConfig.getNumber('SMTP_PORT'),
      auth: {
        user: this.envConfig.getString('SMTP_USERNAME'),
        pass: this.envConfig.getString('SMTP_PASSWORD'),
      },
    });
  }
  async sendMail(
    subject: string,
    templateName: string,
    context: Record<string, any>,
  ): Promise<void> {
    const template = this.compileTemplate(templateName, context);

    const mailOptions = {
      from: this.envConfig.getString('SMTP_USERNAME'),
      to: this.envConfig.getString('MAIL_RECIPIENT'),
      subject,
      html: template,
    };

    await this.transporter.sendMail(mailOptions);
  }

  private compileTemplate(
    templateName: string,
    context: Record<string, any>,
  ): string {
    const templatePath = `${__dirname}/templates/${templateName}.template.hbs`;
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(templateContent);
    return compiledTemplate(context);
  }
}

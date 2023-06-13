import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Configuration, OpenAIApi } from 'openai';

console.log();

@Injectable()
export class OpenaiService {
  private openai: any;
  private readonly logger = new Logger(OpenaiService.name);

  constructor(private configService: ConfigService) {
    const configuration = new Configuration({
      apiKey: this.configService.get('OPENAI_API_KEY'),
      organization: this.configService.get('ORGANIZATION_API_KEY'),
    });
    this.openai = new OpenAIApi(configuration);
  }

  async getChatResponse(prompt: string): Promise<string> {
    const messages = [{ role: 'user', content: prompt }];
    try {
      const completion = await this.openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
      });

      const completionText = completion.data.choices[0].message.content;
      console.log(completionText);
      return completionText.trim();
    } catch (e) {
      this.logger.log('Failed to execute getResponse', e);
      return "default msg bc I still don't have a subscription for the API...";
    }
  }

  async getImageResponse(prompt: string): Promise<string> {
    try {
      const imgData = await this.openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
      });

      const dataURL = imgData.data.data[0].url;
      console.log(dataURL);
      return dataURL;
    } catch (e) {
      this.logger.log('Failed to execute getResponse', e);
      return 'default msg bc I still dont have a subscription for the API...';
    }
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetricsController } from './metrics.controller';
import { OpenaiService } from './openai/openai.service';
import { OpenaiModule } from './openai/openai.module';
import { OpenaiController } from './openai/openai.controller';

@Module({
  imports: [OpenaiModule],
  controllers: [AppController, MetricsController, OpenaiController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetricsController } from './metrics.controller';
import { OpenaiService } from './openai/openai.service';
import { OpenaiModule } from './openai/openai.module';
import { OpenaiController } from './openai/openai.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      // load .env file
      validate: (config) => {
        // validate config
        return config;
      },
      cache: true,
      isGlobal: true,
    }),
    OpenaiModule,
  ],

  controllers: [AppController, MetricsController, OpenaiController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguagesModule } from './languages/languages.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [LanguagesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

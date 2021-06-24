import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatModule } from './chat/chat.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ChatModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [join(__dirname, '/**/*.entity.{ts,js}')],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

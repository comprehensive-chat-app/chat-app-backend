import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message/entities/message.entity';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MessageModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Message],
      synchronize: true,
    }),
  ],
})
export class AppModule {}

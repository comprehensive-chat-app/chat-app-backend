import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { MessageService } from './services/message.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message, User])],
  controllers: [ChatController],
  providers: [UserService, MessageService],
})
export class ChatModule {}

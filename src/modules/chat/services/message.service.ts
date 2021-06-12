import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';
import { MessageListDTO } from '../dto/message-list.DTO';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  addMessage(user: User, text: string) {
    return this.messageRepository.save({
      user,
      text,
    });
  }

  list(params: MessageListDTO) {
    return this.messageRepository.find({
      ...params,
      take: 20,
      order: {
        id: 'ASC',
      },
      relations: ['user'],
    });
  }
}

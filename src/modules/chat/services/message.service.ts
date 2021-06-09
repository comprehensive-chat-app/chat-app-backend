import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from '../entities/message.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  addMessage(user: User, text: string) {
    return this.messageRepository.save({
      userId: user.id,
      text,
    });
  }

  count() {
    return this.messageRepository.count();
  }
}

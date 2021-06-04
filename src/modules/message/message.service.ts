import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { AddMessageDTO } from './dto/add-message.DTO';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  add(dto: AddMessageDTO) {
    return this.messageRepository.insert(dto);
  }

  count() {
    return this.messageRepository.count();
  }
}

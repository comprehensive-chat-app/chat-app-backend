import { Controller, Post, Body, Inject, Get } from '@nestjs/common';

import { AddMessageDTO } from './dto/add-message.DTO';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  @Inject()
  private readonly messageService!: MessageService;

  @Post('add')
  async add(@Body() payload: AddMessageDTO) {
    return this.messageService.add(payload);
  }

  @Get('count')
  async count() {
    return this.messageService.count();
  }
}

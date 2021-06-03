import { Controller, Post, Body } from '@nestjs/common';

import { AddMessageDTO } from './dto/add-message.DTO';

@Controller('message')
export class MessageController {
  @Post('add')
  async add(@Body() payload: AddMessageDTO) {
    return payload.text;
  }
}

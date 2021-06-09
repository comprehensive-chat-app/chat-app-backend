import { Controller, Post, Body, Inject, Get, Req } from '@nestjs/common';
import { Request } from 'express';

import { AddMessageDTO } from './dto/add-message.DTO';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';

@Controller('message')
export class ChatController {
  @Inject()
  private readonly messageService!: MessageService;

  @Inject()
  private readonly userService!: UserService;

  @Post('add')
  async add(@Req() request: Request, @Body() payload: AddMessageDTO) {
    debugger;
    const user = await this.userService.findOrCreateOne(request);

    return this.messageService.addMessage(user, payload.text);
  }

  @Get('count')
  async count() {
    return this.messageService.count();
  }
}

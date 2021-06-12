import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Req,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

import { MessageAddDTO } from './dto/message-add.DTO';
import { MessageService } from './services/message.service';
import { UserService } from './services/user.service';
import { MessageListDTO } from './dto/message-list.DTO';

@Controller('message')
export class ChatController {
  @Inject()
  private readonly messageService!: MessageService;

  @Inject()
  private readonly userService!: UserService;

  @Post('add')
  async add(@Req() request: Request, @Body() payload: MessageAddDTO) {
    const user = await this.userService.findOrCreateOne(request);

    return this.messageService.addMessage(user, payload.text);
  }

  @Get('list')
  async list(@Param() payload: MessageListDTO) {
    return this.messageService.list(payload);
  }
}

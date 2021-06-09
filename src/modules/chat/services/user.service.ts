import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Request } from 'express';

import { uniqueNamesGenerator, names, countries } from 'unique-names-generator';

import { createHash } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findOrCreateOne(request: Request) {
    const clientStringToHash = [request.ip, request.header('user-agent')].join(
      ', ',
    );
    const clientHash = createHash('md5')
      .update(clientStringToHash)
      .digest('hex');

    const user = await this.userRepository.findOne({ clientHash });
    debugger;
    if (!user) {
      const nickname = uniqueNamesGenerator({
        dictionaries: [names, countries],
        separator: ' from ',
      });

      return this.userRepository.save({
        clientHash,
        nickname,
      });
    }

    return user;
  }
}

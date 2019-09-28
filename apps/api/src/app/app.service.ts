import { Injectable } from '@nestjs/common';
import { Message } from '@full-stack-todos/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}

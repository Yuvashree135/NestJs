import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getWelcomeMessage(name: string): string {
    return 'Hello '+ name;
  }

  getHello(): string {
    return 'Hello World!';
  }
}

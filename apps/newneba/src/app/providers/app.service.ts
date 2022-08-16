import { Injectable } from '@nestjs/common';
import { CreateAppInput } from '../dto/create-app.input';
import { UpdateAppInput } from '../dto/update-app.input';

@Injectable()
export class AppService {
  create(createAppInput: CreateAppInput) {
    return 'This action adds a new app';
  }

  findAll() {
    return `This action returns all app`;
  }

  findOne(id: number) {
    return `This action returns a #${id} app`;
  }

  update(id: number, updateAppInput: UpdateAppInput) {
    return `This action updates a #${id} app`;
  }

  remove(id: number) {
    return `This action removes a #${id} app`;
  }
}


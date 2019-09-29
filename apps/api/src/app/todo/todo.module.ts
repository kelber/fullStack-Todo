import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoSchema } from './../schemas/todo.schema';


@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [MongooseModule.forFeature([{name: 'Todo', schema: TodoSchema}])]

})
export class TodoModule {}

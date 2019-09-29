import { Controller, Get, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { Todo } from './../../../../../libs/api-interfaces/src/lib/todo';
import { Observable, of } from 'rxjs';
import { TodoService } from './todo.service';



@Controller('todo')
export class TodoController {

    constructor(
        private todoService: TodoService
    ) {}

    @Get() 
        findAll() {
            // return of(this.todoService.findAll());
            return this.todoService.findAll();
        }

    // @Get('id')
    // findOne(@Param('id') id): Observable<Todo> {
    //     return of(this.todoService.find(id));
    // }

    // 1 FASE funciona
    // @Post()
    // create() {
    //     return 'Create item';
    // }

    @Post()
    async create(@Body() todo: Todo) {
        console.log('passou back cmp', todo);
        this.todoService.create(todo);
        return todo;
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.todoService.remove(id);
    }

    // Pass @Param and @Body
    @Put(':id')
    update(@Param('id') id: number, @Body() updateTodo: Todo):  Observable<Todo> {
        return of(this.todoService.update(id, updateTodo));
    }
   





}

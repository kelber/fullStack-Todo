import { Injectable, Post } from '@nestjs/common';
import { Todo } from './../../../../../libs/api-interfaces/src/lib/todo';
import { TodoSchema } from './../schemas/todo.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


export const mockTodos: Todo[] = [
    { id: 0, title: 'Discover NgrX Data', description: 'Discover', active: false },
    { id: 1, title: 'Test new IronMan armor', description: 'Iron Man', active: true },
];

@Injectable()
export class TodoService {
    public todos: Todo[] = [];
    
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async create(todo: Todo): Promise<Todo> {
        console.log('todo api', todo);
        const createdTodo = new this.todoModel(todo);
        return await createdTodo.save();
    }

    
    // create() {
    //     return 'Create item';
    // }

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find().exec();
       
    }

    // create(todo: Todo) {
    //     console.log('BACK', todo);
    //     this.todos.push(todo);
    // }

    // OK
    // findAll(): Todo[] {
    //     return mockTodos;
    // }

    // find(id: number): Todo {
    //     return this.todos.find(item => {
    //         return item.id = id;
    //     });
    // }

    remove(id: number): void {
        this.todos.filter(item => {
            return item.id != id;
        })
    }

    update(id: number, todo: Todo): Todo {
        const tmpIndex = this.todos.findIndex(obj => obj.id == id);
        const updatedObject = { ...this.todos[tmpIndex], ...todo };
        this.todos = [
            ...this.todos.slice(0, tmpIndex),
            updatedObject,
            ...this.todos.slice(tmpIndex + 1)
        ];
        return updatedObject;
        }
    
}

import { Injectable, Post } from '@nestjs/common';
import { Todo } from './../../../../../libs/api-interfaces/src/lib/todo';


export const mockTodos: Todo[] = [
    { id: 0, title: 'Discover NgrX Data', description: 'Discover', active: false },
    { id: 1, title: 'Test new IronMan armor', description: 'Iron Man', active: true },
];

@Injectable()
export class TodoService {
    public todos: Todo[] = [];
    
    constructor() {}

    @Post()
    create(todo: Todo) {
        console.log('BACK', todo);
        this.todos.push(todo);
    }

    findAll(): Todo[] {
        return mockTodos;
    }

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

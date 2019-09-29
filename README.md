# FullStackTodos

https://medium.com/@coco.boudard/angular-8-ngrx-data-8-and-nestjs-8463c8af4695

```js

> npx create-nx-workspace NOME
> ng serve - das 2 aplicacoes


// dica
no package.json adicione:
"start": "ng serve --proxy-config proxy.conf.json",


nest g mo Todo app
nest g co todo app
```

```js
export class Todo {
    id: number;
    title: string;
}
export const todos: Todo[] = [
    { id: 0, title: 'Discover NgrX Data' },
    { id: 1, title: 'Test new IronMan armor' }
];

@Controller('todo')
export class TodoController {

@Get()
    findAll(): Observable<Todo[]> {
        return of(todos);
    }
}
```

**Na lib crie todo.ts e coloque tb no index.js export**

service.ts
```js
@Injectable()
export class TodoService {
private todos: Todo[] = [];

constructor() {
    this.todos = mockTodos;
}

    create(todo: Todo) {
    this.todos.push(todo);
    }
    findAll(): Todo[] {
    return this.todos;
    }
    find(id: number): Todo {
    return this.todos.find(item => {
        return item.id == id;
    });
    }
    remove(id: number): void {
    this.todos = this.todos.filter(item => {
        return item.id != id;
    });
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

```


component.ts
```js

@Controller('todo')
export class TodoController {
constructor(private todoService: TodoService) {}

@Get()
findAll(): Observable<Todo[]> {
    return of(this.todoService.findAll());
}
@Get(':id')
findOne(@Param('id') id): Observable<Todo> {
    return of(this.todoService.find(id));
}
@Post()
async create(@Body() todo: Todo) {
    this.todoService.create(todo);
    return todo;
}
@Put(':id')
update(@Param('id') id: number, @Body() updateTodo: Todo):  Observable<Todo> {
    return of(this.todoService.update(id, updateTodo));
}
@Delete(':id')
async remove(@Param('id') id: number): Promise<void> {
    return this.todoService.remove(id);
}
}

```

// todo: aprenda logger

https://www.djamware.com/post/5d2898430707cc5968d9d57f/build-a-web-app-using-nestjs-fastify-mongodb-and-angular-8
// adicionando google material




// brad travesry 
https://www.youtube.com/watch?v=wqhNoDE6pb4

EXEMPLO items
items.controller.ts
```js

@Controller('items')
export class ItemController {

@Get()
findAll(): string {
    return 'Hello';
}

// Metodo simples para fazer 1 POST via postman
@Post()
create(): string {
    return 'create item'
}


}
```

#### Isolando constantes
```js
import config from './config/keys';


imports: [MongooseModule.forRoot(default.mongoURI) ],

config/keys.ts
export default {
    mongoURI: 'url local ou do site',
}
```






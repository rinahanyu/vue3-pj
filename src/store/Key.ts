import { InjectionKey } from 'vue'
import { TodosType } from './SetTodos'

export const SetTodoKey: InjectionKey<TodosType> = Symbol('setTodos')

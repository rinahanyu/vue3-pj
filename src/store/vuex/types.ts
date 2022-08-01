export interface RootState {
  version: string
}

export interface TodoState {
  todos: Todo[]
}

export interface Todo {
  id: number
  title: string
  description: string
  limitDate: Date | null
  emergency: number
  importance: number
}

export interface deleteParam {
  index: number
  title: string
}

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

export interface deleteParamType {
  index: number
  title: string
}

export interface editDialogParamType {
  editIndex: number
  editTodo: Todo
}

export interface chartDataListType {
  label: string
  data:  {
    x: number;
    y: number;
  }[];
  backgroundColor: string
  pointRadius: number
}
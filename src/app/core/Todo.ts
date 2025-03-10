export interface Todo {
  id: number;
  description: string;
  status: StatusType;
}

export const Status = {
  TODO: 'TODO',
  DONE: 'DONE',
  EDIT: 'EDIT',
}

export type StatusType = typeof Status[keyof typeof Status]

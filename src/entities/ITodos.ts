export type ITodos = Todo[]

export interface Todo {
  id: string
  data_criacao: string
  data_edicao?: string
  prazo: string
  titulo: string
  descricao: string
  equipe: string
  autor: string
  prioridade: number
  status: number
}

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export type Todo = {
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

export const columns: ColumnDef<Todo>[] = [
  {
    accessorKey: "data_criacao",
    header: "Data criação",
  },
  {
    accessorKey: "data_edicao",
    header: "Data Edição",
  },
  {
    accessorKey: "prazo",
    header: "Prazo",
  },
  {
    accessorKey: "titulo",
    header: "Título",
  },
  {
    accessorKey: "descricao",
    header: "Descrição",
  },
  {
    accessorKey: "equipe",
    header: "Equipe",
  },
  {
    accessorKey: "autor",
    header: "Autor",
  },
  {
    accessorKey: "prioridade",
    header: "Prioridade",
  },
  {
    accessorKey: "prazo",
    header: "Prazo",
  },
]

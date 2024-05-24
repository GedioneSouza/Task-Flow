import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../ui/DataTableColumnHeader"
import { format, parseISO } from "date-fns"
import { Checkbox } from "../ui/checkbox"
import { AlertCircle, ArrowDownCircle } from "lucide-react"


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
  data_edicao: string
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
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value)
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "data_criacao",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data Criação" />
    ),
    cell: ({ row }) => {
      if (row.original.data_criacao !== '') {
        const dataParseada = parseISO(row.original.data_criacao);
        return format(dataParseada, 'dd/MM/yyyy HH:mm:ss')
      }
      return '-'
    },
  },
  {
    accessorKey: "data_edicao",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data Edição" />
    ),
    cell: ({ row }) => {
      if (row.original.data_edicao != null) {
        const dataParseada = parseISO(row.original.data_edicao);
        return format(dataParseada, 'dd/MM/yyyy HH:mm:ss')
      }
      return '-'
    },
  },
  {
    accessorKey: "prazo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prazo" />
    ),
    cell: ({ row }) => {
      if (row.original.prazo !== '') {
        const dataParseada = parseISO(row.original.prazo);
        return format(dataParseada, 'dd/MM/yyyy HH:mm:ss')
      }
      return '-'
    },
  },
  {
    accessorKey: "titulo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Título" />
    ),
  },
  {
    accessorKey: "descricao",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
  },
  {
    accessorKey: "prioridade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prioridade" />
    ),
    cell: ({ row }) => {
      if (row.original.prioridade === 1) {
        return (
          <div className="flex flex-row items-center gap-1.5">
            <ArrowDownCircle className="text-green-500" />
            BAIXA
          </div>
        )
      }

      else if (row.original.prioridade === 2) {
        return (
          <div className="flex flex-row items-center gap-1.5">
            <AlertCircle className="text-yellow-400" />
            MÉDIA
          </div>
        )
      }

      else if (row.original.prioridade === 3) {
        return (
          <div className="flex flex-row items-center gap-1.5">
            <ArrowDownCircle className="text-green-500" />
            BAIXA
          </div>
        )
      }

      return '-'
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
]

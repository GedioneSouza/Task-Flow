import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/Button"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "../ui/DataTableColumnHeader"
import { format, parse, parseISO } from "date-fns"
import { toZonedTime } from 'date-fns-tz';



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
        onCheckedChange={(value) => row.toggleSelected(!!value)}
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
      const dataParseada = parseISO(row.original.data_criacao);
      return format(dataParseada, 'dd/MM/yyyy HH:mm:ss');
    },
  },  
  {
    accessorKey: "data_edicao",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data Edição" />
    )
  },
  {
    accessorKey: "prazo",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prazo" />
    )
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
    accessorKey: "equipe",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Equipe" />
    ),
  },
  {
    accessorKey: "autor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Autor" />
    ),
  },
  {
    accessorKey: "prioridade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prioridade" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
]

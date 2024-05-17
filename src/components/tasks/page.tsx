import { useUsers } from "@/hooks/useTodos"
import { columns } from "./columns"
import { DataTable } from "./data-table"


export function DemoPage() {
  const { users } = useUsers()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  )
}

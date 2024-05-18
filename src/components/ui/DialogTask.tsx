import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./Button"
import { Label } from "./Label"
import { Input } from "./Input"
import { DatePickerTasks } from "./DatePickerTasks"
import { SelectPriority } from "./SelectPriority"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Criar tarefa</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Criar tarefa</DialogTitle>
          <DialogDescription>
            Especifique sua tarefa preenchendo os campos abaixo.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="titulo" className="text-right">
              Título tarefa
            </Label>
            <Input id="titulo" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="descricao" className="text-right">
              Descrição
            </Label>
            <Input id="descricao" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="prazo" className="text-right">
              Prazo
            </Label>
          <DatePickerTasks />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="prioridade" className="text-right">
              Prioridade
            </Label>
          <SelectPriority />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Criar tarefa</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

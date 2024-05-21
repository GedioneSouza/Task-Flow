import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale";

import { cn } from "../../lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";




export function DatePickerTasks() {
  const [date, setDate] = React.useState<Date>()

  return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[278px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}

          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="flex w-[500px]  p-2"

        >

          <div className="rounded-md border mr-3">
            <Calendar locale={ptBR} mode="single" selected={date} onSelect={setDate} />
          </div>
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecionar" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Hoje</SelectItem>
              <SelectItem value="1">Amanhã</SelectItem>
              <SelectItem value="3">Em 3 dias</SelectItem>
              <SelectItem value="7">Em uma semana</SelectItem>
            </SelectContent>
          </Select>
        </PopoverContent>
      </Popover>
  )
}

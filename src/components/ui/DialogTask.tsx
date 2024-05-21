import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "./Input"
import { SelectPriority } from "./SelectPriority"
import { useControllerTask } from "./validationForm/useControllerTask"
import { FormProvider } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form"


import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale";

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "./Button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { AlertCircle, ArrowDownCircle, ArrowUpCircle } from "lucide-react"

export function DialogDemo() {
  const {
    onSubmit,
    form
  } = useControllerTask()

  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Email</FormLabel>
    //           <Select onValueChange={field.onChange} defaultValue={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Select a verified email to display" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="m@example.com">m@example.com</SelectItem>
    //               <SelectItem value="m@google.com">m@google.com</SelectItem>
    //               <SelectItem value="m@support.com">m@support.com</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormDescription>
    //             You can manage email addresses in your{" "}
    //             <Link href="/examples/forms">email settings</Link>.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Submit</Button>
    //   </form>
    // </Form>
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

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="titulo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título tarefa</FormLabel>
                  <FormControl>
                    <Input placeholder="Título tarefa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="descricao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="Descrição" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prazo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prazo</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[278px] justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? format(field.value, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}

                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        align="start"
                        className="flex w-[500px]  p-2"

                      >

                        <div className="rounded-md border mr-3">
                          <Calendar
                            {...field}
                            locale={ptBR}
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="prioridade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prioridade</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[278px]">
                        <SelectValue placeholder="Selecionar a prioridade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Prioridade</SelectLabel>

                          <SelectItem value="1" >
                            <div className="flex flex-row items-center gap-1.5">
                              <ArrowUpCircle className="text-red-600" />
                              <span>ALTA</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="2">
                            <div className="flex flex-row items-center gap-1.5">
                              <AlertCircle className="text-yellow-400" />
                              MÉDIA
                            </div>
                          </SelectItem>
                          <SelectItem value="3">
                            <div className="flex flex-row items-center gap-1.5">
                              <ArrowDownCircle className="text-green-500" />
                              BAIXA
                            </div>
                          </SelectItem>

                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-[380px]" type="submit">Criar tarefa</Button>
          </form>
        </FormProvider>

      </DialogContent>
    </Dialog>
  )
}

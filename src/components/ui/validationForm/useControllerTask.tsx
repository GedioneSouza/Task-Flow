import { useCreateTask } from "@/hooks/useCreateTask";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
    titulo: z
        .string({
            required_error: "O campo título é obrigatório.",
        }),
    descricao: z
        .string({
            required_error: "O campo descrição é obrigatório.",
        }),
    prazo: z
        .date({
            required_error: "Seleciona um prazo, é obrigatório.",
        }),
    prioridade: z
        .string({
            required_error: "Seleciona a prioridade, é obrigatório.",
        })
})

export function useControllerTask() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })

      const { createUser } = useCreateTask();


    function onSubmit(data: z.infer<typeof FormSchema>) {
        createUser({
            titulo: data.titulo,
            descricao: data.descricao,
            prazo: data.prazo,
            prioridade: data.prioridade
        })
    }

    return {
        onSubmit,
        form
    }
}

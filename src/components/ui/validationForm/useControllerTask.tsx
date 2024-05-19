import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast.success('Opa')
        alert(`
            Título: ${data.titulo}
            Descrição: ${data.descricao}
            Prazo: ${format(data.prazo, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
            Prioridade: ${data.prioridade}
        `)
    }

    return {
        onSubmit,
        form
    }
}

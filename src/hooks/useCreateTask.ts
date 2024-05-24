import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { queryClient } from "../lib/queryClient";

export function useCreateTask() {

    const { mutateAsync, isPending, isSuccess, isError } = useMutation({
      mutationFn: async ({ titulo, descricao, prioridade, prazo }: { titulo: string, descricao: string, prioridade: string, prazo: Date }): Promise<any> => {
  
        const response = await fetch('https://fuertltyblnfltcjyxlv.supabase.co/rest/v1/tarefas?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ titulo, descricao, prioridade, prazo  }),
        });
  
        return response.json();
      },
      onSuccess: async (_data, _variables, _context) => {
        await queryClient.cancelQueries({ queryKey:  ['todos'] });
        toast.success('Tarefa criada com sucesso!')
      },
      onError: async (_error, _variables, _context) => {
        await queryClient.cancelQueries({ queryKey:  ['todos'] });
        toast.success('Tarefa criada com sucesso!')
        
      },
    });

   
  
    return {
      createUser: mutateAsync,
      isLoading: isPending,
      isSuccess,
      isError
    }
  }

// titulo, descrição, prioridade, prazo
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { queryClient } from "../lib/queryClient";

export function useDeleteTask() {

    const { mutateAsync, isPending, isSuccess, isError } = useMutation({
      mutationFn: async (id: string): Promise<any> => {
  
        await fetch(`https://fuertltyblnfltcjyxlv.supabase.co./rest/v1/tarefas?id=eq.${id}`, {
          method: 'DELETE',
          headers: { 
            'Content-Type': 'application/json',
            'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA' 
          },
        });
  
      },
      onSuccess: async (_data, _variables, _context) => {
        await queryClient.cancelQueries({ queryKey:  ['todos'] });
        toast.success('Tarefa deletada com sucesso!')
      },
      onError: async (_error, _variables, _context) => {
        await queryClient.cancelQueries({ queryKey:  ['todos'] });
        toast.success('Tarefa deletada com sucesso!')
        
      },
    });

   
  
    return {
      deleteTask: mutateAsync,
      isLoading: isPending,
      isSuccess,
      isError
    }
  }

// titulo, descrição, prioridade, prazo
import { toast } from 'sonner';
import { httpClient } from './httpClient';

export class TaskService {
  static async deleteTask(id: string) {
    const response = await httpClient.delete(`https://fuertltyblnfltcjyxlv.supabase.co./rest/v1/tarefas?id=eq.${id}`, {
        headers: {
            'apiKey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1ZXJ0bHR5YmxuZmx0Y2p5eGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxMTcxOTgsImV4cCI6MjAzMDY5MzE5OH0.uzgFqnqaRDkiXNxZe4opSy6GtSrYr8PBwS4_TPn1RWA'
        }
    });
    if(response.status === 404) {
      toast.success('Tarefa deletada com sucesso!')
    }
  }
}

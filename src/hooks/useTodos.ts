import { useQuery } from '@tanstack/react-query';
import { ITodos } from '@/entities/ITodos';
import { TodosService } from '@/services/Todos';
import { WithStatus } from '@/types/utils';

export const TODOS_QUERY_KEY = ['todos'];

export type UsersQueryData = WithStatus<ITodos>;

export function useUsers() {
  const { data, isLoading } = useQuery({
    staleTime: Infinity,
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const todos = await TodosService.getTodos();
      return todos as UsersQueryData;
    },
  });

  return {
    users: data ?? [],
    isLoading,
  };
}

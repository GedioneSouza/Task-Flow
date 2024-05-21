import { useQuery } from '@tanstack/react-query';
import { WithStatus } from '../types/utils';
import { ITodos } from '../entities/ITodos';
import { TodosService } from '../services/Todos';


export const TODOS_QUERY_KEY = ['todos'];

export type UsersQueryData = WithStatus<ITodos>;

export function useUsers() {
  const { data, isLoading, refetch } = useQuery({
    staleTime: 5000,
    queryKey: TODOS_QUERY_KEY,
    queryFn: async () => {
      const todos = await TodosService.getTodos();
      return todos as UsersQueryData;
    },
  });

  return {
    users: data ?? [],
    isLoading,
    refetch
  };
}

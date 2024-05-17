import { DemoPage } from '@/components/tasks/page';
import { Skeleton } from '@/components/ui/Skeleton';
import { IOrder } from '@/entities/IOrder';
import { OrdersService } from '@/services/OrdersService';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export function Home() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('getOrders');

    OrdersService.getOrders()
      .then(setOrders)
      .catch(() => {
        toast.error('Erro ao carregar as tarefas!');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-[800px] ml-5 pb-52 justify-center items-start">
      <h1 className="text-3xl font-semibold">Bem-vindo(a)! Tenha um dia produtivo. ☕</h1>
      <h2 className="text-muted-foreground">Suas tarefas:</h2>

      <DemoPage />

      <div className="h-10 w-full mt-10 grid grid-cols-3 gap-4">
        {isLoading && (
          <>
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </>
        )}

        {!isLoading && orders.map(order => (
          <div key={order.id} className="flex flex-col border p-4 rounded-md">
            <strong>Pedido {order.orderNumber}</strong>
            <small className="text-muted-foreground">
              Realizado em: {Intl.DateTimeFormat('pt-br').format(order.date)}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

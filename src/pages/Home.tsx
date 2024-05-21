import { DemoPage } from '@/components/tasks/page';
import { IOrder } from '@/entities/IOrder';
import { OrdersService } from '@/services/OrdersService';
import { useEffect, useState } from 'react';

export function Home() {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('getOrders');

    OrdersService.getOrders()
      .then(setOrders)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col max-w-[800px] ml-5 pb-52 justify-center items-start">
      <h1 className="text-3xl font-semibold ml-8">Bem-vindo(a)! Tenha um dia produtivo. ☕</h1>
      <h2 className="text-muted-foreground ml-8">Suas tarefas:</h2>

      <DemoPage />

      <div className="h-10 w-full mt-10 grid grid-cols-3 gap-4">

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

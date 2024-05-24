
import { DemoPage } from '../components/tasks/page';

export function Home() {

  return (
    <div className="min-h-screen flex flex-col max-w-[800px] ml-5 pb-52 justify-center items-start mt-[70px]">
      <h1 className="text-3xl font-semibold ml-8">Bem-vindo(a)! Tenha um dia produtivo. ☕</h1>
      <h2 className="text-muted-foreground ml-8">Suas tarefas:</h2>

      <DemoPage />
    </div>
  );
}

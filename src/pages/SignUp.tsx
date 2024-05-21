
import { useForm } from 'react-hook-form';
import { AuthService } from '../services/AuthService';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/button';

interface IFormData {
  name: string;
  email: string;
  senha: string;
}

export function SignUp() {
  console.log('SignUp renderizou');

  const form = useForm<IFormData>({
    defaultValues: {
      name: '',
      email: '',
      senha: '',
    },
  });

  const handleSubmit = form.handleSubmit(async ({ name, email, senha }) => {
    const response = await AuthService.signUp({ name, email, senha });

    console.log(response);
  });

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-[480px] p-6">
      <h1 className="font-semibold text-xl">Cadastre-se!</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2">
        <div className="space-y-1">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" {...form.register('name')} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register('email')} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="password" {...form.register('senha')} />
        </div>

        <Button className="mt-3">Criar conta</Button>
      </form>
    </div>
  );
}

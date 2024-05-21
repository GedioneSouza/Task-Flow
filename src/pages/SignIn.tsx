
import { useForm } from 'react-hook-form';
import { Input } from '../components/ui/Input';
import { useAuth } from '../hooks/useAuth';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';


interface IFormData {
  email: string;
  senha: string;
}

export function SignIn() {
  const { signIn } = useAuth();

  const form = useForm<IFormData>({
    defaultValues: {
      email: '',
      senha: '',
    },
  });

  const handleSubmit = form.handleSubmit(async ({ email, senha }) => {
      await signIn(email, senha);

  });

  return (
    <div className="min-h-screen flex flex-col justify-center mx-auto max-w-[480px] p-6">
      <h1 className="font-semibold text-xl">Acesse sua conta</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-2">
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" {...form.register('email')} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" type="senha" {...form.register('senha')} />
        </div>

        <Button className="mt-3" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && 'Entrando...'}
          {!form.formState.isSubmitting && 'Entrar'}
        </Button>
      </form>
    </div>
  );
}

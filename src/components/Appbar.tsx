import { LogOutIcon } from 'lucide-react';

import { useAuth } from '@/hooks/useAuth';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from './ui/Button';
import { Tooltip } from './ui/Tooltip';

export function Appbar() {

  return (
    <div className="fixed right-4 top-4 flex items-center gap-4">
      <ThemeSwitcher />

     
    </div>
  );
}

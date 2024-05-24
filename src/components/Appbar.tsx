import { useTheme } from '../contexts/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Appbar() {
  const { theme } = useTheme();

  // Define a classe de fundo com base no tema
  const backgroundClass = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <div className={`fixed top-0 h-12 flex items-center gap-4 justify-between w-full ${backgroundClass}`}>
      <img className='ml-[55px]' src="assets/logo-7.png" alt="" />
      
      <div className="mr-12">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

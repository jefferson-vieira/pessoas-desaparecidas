import { ThemeModeToggle } from '@/components/ThemeModeToggle';

export default function Header() {
  return (
    <header className="flex flex-wrap gap-y-6 p-6 md:flex-nowrap">
      <ThemeModeToggle />

      <h1 className="w-full text-center text-4xl font-semibold">
        Pessoas <span className="font-extrabold">Desaparecidas</span>
      </h1>
    </header>
  );
}

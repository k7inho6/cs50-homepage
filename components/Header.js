import { useTheme } from 'next-themes';
import { BsGithub } from 'react-icons/bs';
import { IoMoonOutline } from 'react-icons/io5';
import Link from 'next/link';

export const Header = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <header>
            <nav className="shadow-xl bg-stone-200 text-xl py-10 px-20 dark:text-white dark:bg-stone-800">
            <div className="flex max-w-2xl justify-between mx-auto">
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500 font-bold">Feelsgladman</h1>
              <div className="flex items-center content-center gap-5">
                  <Link href="/" className="hover:text-gray-700 dark:hover:text-gray-200">Home</Link>
                  <button onClick={toggleTheme} className="cursor-pointer">
                    <IoMoonOutline size="30"/>
                  </button>              
                  <a href="https://github.com/k7inho6" target="_blank"><BsGithub size='30'/></a>
              </div>
            </div>
          </nav>
        </header>
    )
}

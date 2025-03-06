import icono from '@/assets/images/otorrino/favicon.png'
import { NavLink } from 'react-router-dom'
import { LuPhone } from "react-icons/lu";
import { useAuthStore } from '@/hooks';
import { Spinner } from '@/components/ui/spinner'



export const Menu = () => {
  const { isAuthenticated } = useAuthStore()
  return (
    <header className='py-3 w-screen'>
      <nav className='flex items-center flex-wrap gap-3 justify-between px-10 text-gray-400'>
        <div className='flex gap-2'>
          {isAuthenticated === 'Checking' && <Spinner />}
          {isAuthenticated !== 'Checking' && (
            <NavLink className='flex gap-1 items-center w-fit' to={isAuthenticated === 'Authenticated' ? '/home' : '/login'}>
              <img src={icono} alt='logo' className='w-[2rem]' />
              <p className='text-xl lg:text-2xl text-black font-bold'>Medica<span className='text-otorrino'>otorrino</span> </p>
            </NavLink>
          )}
        </div>

        <ul className='gap-2 font-bold hidden lg:flex'>
          <li>
            <NavLink to='/' className='[&.active]:text-otorrino hover:text-otorrino duration-504'>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to='/servicios' className='[&.active]:text-otorrino hover:text-otorrino duration-500 '>
              Nuestros servicios
            </NavLink>
          </li>
          <li>
            <NavLink to='/conocenos' className='[&.active]:text-otorrino hover:text-otorrino duration-500 '>
              Conócenos
            </NavLink>
          </li>
          <li>
            <NavLink to='/instalaciones' className='[&.active]:text-otorrino hover:text-otorrino duration-500 '>
              Instalaciones
            </NavLink>
          </li>
        </ul>

        <div>
          <a href="tel:3347052681" className='flex items-center gap-3 text-sm hover:text-otorrino duration-500'>
            <LuPhone className='text-xl text-otorrino' />
            <div className='flex flex-col text-center'>
              <p>+52 33 4705 2681</p>
              <p>Lun-Vie 10am 8pm</p>
            </div>
          </a>
        </div>
      </nav>
    </header >
  )
}

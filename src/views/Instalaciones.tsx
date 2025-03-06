import { Menu, Footer, Maps } from '@/components/Landing'
import cr1 from '@/assets/images/consultorio/cr1.avif'
import cr2 from '@/assets/images/consultorio/cr2.avif'
import cr3 from '@/assets/images/consultorio/cr3.avif'
import cm1 from '@/assets/images/consultorio/cm1.avif'
import cm2 from '@/assets/images/consultorio/cm2.avif'
import cm3 from '@/assets/images/consultorio/cm3.avif'


const Consultorio = [
  {
    image: cr1,
    title: 'Consultorio Dr. Raúl Durán',
  },
  {
    image: cr2,
    title: 'Consultorio Dr. Raúl Durán',
  },
  {
    image: cr3,
    title: 'Consultorio Dr. Raúl Durán',
  },
  {
    image: cm1,
    title: 'Consultorio Dra. Magdicarla de Alba',
  },
  {
    image: cm2,
    title: 'Consultorio Dra. Magdicarla de Alba',
  },
  {
    image: cm3,
    title: 'Consultorio Dra. Magdicarla de Alba',
  },
]



export const Instalaciones = () => {

  const print = () => {
    return Consultorio.map((consultorio, index) => {
      return (
        <div className='aspect-square overflow-hidden' key={index}>
          <img src={consultorio.image} alt={consultorio.title} className='w-full aspect-square duration-500	hover:scale-110' />
        </div>
      )
    })
  }

  return (
    <>
      <Menu />
      <header className='bg-medica p-10 w-full'>
        <div className='w-10/12 mx-auto'>
          <h1 className='text-center text-white'>
            <p className='text-2xl md:text-5xl'>NUESTRAS INSTALACIONES</p>
          </h1>
        </div>
      </header>
      <main className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto py-10'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {print()}
        </div>

      </main>
      <Maps />
      <Footer />
    </>
  )
}

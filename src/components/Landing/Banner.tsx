import { Shape1 } from '@/assets/images/SVGComponents/Shapes'
import { Button } from '@/components/ui/button'
import raul from '@/assets/images/otorrino/raul_corte.png'
import magda from '@/assets/images/otorrino/magdicarla_corte.png'
import { useNavigate } from 'react-router-dom'


export const Banner = () => {
  return <section>{<_SingleBanner />}</section>
}

const _SingleBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      className={`min-h-[600px] h-screen w-screen flex items-start justify-center lg:justify-start lg:items-center relative overflow-hidden`}
    >
      <div className='lg:w-4/12 lg:h-3/4 px-5 md:px-10 uppercase whitespace-normal flex flex-col gap-5 relative z-20'>
        <div className='bg-medica p-5 bg-opacity-50 rounded-md'>
          <h1 className='text-md lg:text-3xl break-words'>
            Tu consultorio de otorrinolaringología
            en Guadalajara
          </h1>
          <p className=''>
            Expertos en el cuidado de tu garganta, nariz y oídos
          </p>
          <a href="https://wa.me/523325400235" target='_blank' rel='noreferrer'>
            <Button
              variant='outline'
              className='border-otorrino w-full'
            >
              Agenda tu cita
            </Button>
          </a>
        </div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full z-0 flex items-end justify-center'>
        <div className='bg-otorrino/40 h-3/4 w-[500px] rounded-t-full  border-t-4 border-otorrino '></div>
      </div>

      <div className='absolute top-0 left-0 w-full h-full z-0 flex items-end justify-center'>
        <img onClick={() => {
          navigate('/conocenos#magdicarla')
        }} src={magda} alt="" className='h-2/3 md:h-[80%] absolute pos-custom-1 cursor-pointer duration-500 hover:h-[85%]' />
        <img onClick={() => {
          navigate('/conocenos#raul')
        }} src={raul} alt="" className='h-2/3 md:h-[80%] absolute pos-custom-2 cursor-pointer duration-500 hover:h-[85%]' />
      </div>

      <Shape1 className='absolute bottom-0 left-0 w-full z-10' pathClassName='fill-current text-slate-100' />
    </div>
  )
}

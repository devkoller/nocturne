import { Shape1 } from '@/assets/images/SVGComponents/Shapes'
import { Button } from '@/components/ui/button'
import raul from '@/assets/images/otorrino/raul_corte.png'
import magda from '@/assets/images/otorrino/magdicarla_corte.png'
import { useNavigate } from 'react-router-dom'
import { GiHealing } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";




export const Banner = () => {
  return <section>{<_SingleBanner />}</section>
}

const _SingleBanner = () => {
  const navigate = useNavigate()
  return (
    <div
      className={`min-h-[600px] h-screen w-full flex relative overflow-hidden`}
    >
      <div className='absolute top-0 left-0 w-full h-full flex items-end justify-center'>
        <div className='absolute bg-medica/30 h-3/4 w-2/3 md:w-1/2 lg:w-1/3 rounded-t-full  border-t-4 border-medica'></div>
      </div>

      <div className='xl:w-4/12 h-content px-5 md:px-0 uppercase gap-5 h-fit relative z-10'>
        <div className='p-5 rounded-md'>
          <h1 className='text-md lg:text-3xl break-words mb-3'>
            Tu consultorio de otorrinolaringología
            en Guadalajara
          </h1>
          <p className='mb-3 normal-case text-gray-400'>
            Somos especialistas en el diagnóstico, tratamiento y prevención de enfermedades que afectan la garganta, la nariz y los oídos. Con un enfoque integral y personalizado, ofrecemos soluciones médicas y quirúrgicas para mejorar tu salud auditiva, respiratoria y vocal. Confía en nuestra experiencia para brindarte el mejor cuidado otorrinolaringológico.
          </p>
          <a href="https://wa.me/523325400235" target='_blank' rel='noreferrer'>
            <Button
              variant='outline'
              className='border-medica w-full'
            >
              Agenda tu cita
            </Button>
          </a>
        </div>
      </div>

      <img onClick={() => {
        navigate('/conocenos#magdicarla')
      }} src={magda} alt="" className='h-2/3 md:h-[80%] absolute bottom-0 pos-custom-1 cursor-pointer duration-500 hover:h-[85%] z-10' />
      <img onClick={() => {
        navigate('/conocenos#raul')
      }} src={raul} alt="" className='h-2/3 md:h-[80%] absolute bottom-0 pos-custom-2 cursor-pointer duration-500 hover:h-[85%] z-10' />



      <div className='absolute top-0 left-0 w-full h-full flex items-end justify-center'>
        <div className='w-full z-20 pb-20 flex items-end justify-center'>

          <div className='w-10/12 mx-auto text-white text-center  bg-medica p-5 rounded-md grid md:grid-cols-3 gap-2 absolute z-20'>

            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='bg-white rounded-md p-3 flex justify-center items-center'>
                <IoMdTime className='text-medica text-2xl' />
              </div>
              <div className='flex flex-col gap-3 justify-center'>
                <h2 className='font-bold text-2xl'>
                  Excelente horario
                </h2>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='bg-white rounded-md p-3 flex justify-center items-center'>
                <span className='text-medica text-2xl'>
                  +20
                </span>
              </div>
              <div className='flex flex-col gap-3 justify-center'>
                <h2 className='font-bold text-2xl'>
                  Mas de 20 años de experiencia
                </h2>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-3'>
              <div className='bg-white rounded-md p-3 flex justify-center items-center'>
                <GiHealing className='text-medica text-3xl' />
              </div>
              <div className='flex flex-col gap-3 justify-center'>
                <h2 className='font-bold text-2xl'>
                  El mejor cuidado
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Shape1 className='absolute bottom-0 left-0 w-full z-10' pathClassName='fill-current text-slate-100' />
    </div>
  )
}

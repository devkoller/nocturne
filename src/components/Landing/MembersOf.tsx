import cocccejal from '@/assets/images/otorrino/cocccejal.avif'
import smorloccc from '@/assets/images/otorrino/smorlccc.avif'
import otolaryngology from '@/assets/images/otorrino/otolaryngology.avif'

export const MembersOf = () => {
  return (
    <div className='bg-slate-100 py-10'>
      <div className='flex justify-center mb-5'>
        <h2 className='text-xl lg:text-3xl text-medica'>
          Orgullosos miembros de:
        </h2>
      </div>

      <div className='mx-auto w-8/12 grid grid-cols-1 items-center lg:grid-cols-3 gap-5 mt-5'>
        <div>
          <img src={smorloccc} alt="" />
        </div>
        <div className='flex items-center gap-3'>
          <img src={cocccejal} alt="" />
          <p className='text-xs'>
            Colegio de Otorrinolaringólogos y Cirujanos de Cabeza y Cuello del Estado de Jalisco A.C.
          </p>
        </div>
        <div>
          <img src={otolaryngology} alt="" />
        </div>
      </div>

    </div>
  )
}

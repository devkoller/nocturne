import { Menu, MembersOf, Banner, Clients, Maps, Footer } from '@/components/Landing'
import { Shape1 } from '@/assets/images/SVGComponents/Shapes'

export const Landing = () => {
  return (
    <>
      <Menu />
      <Banner />
      <MembersOf />
      <Shape1 pathClassName='fill-current text-slate-100' className=' w-full h-auto z-0 overflow-hidden rotate-180 ' />
      <Clients />
      <Maps />
      <Footer />
    </>
  )
}

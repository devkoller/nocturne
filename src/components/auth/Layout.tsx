
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Separator } from "@/components/ui/separator"
import Cookies from "js-cookie";
import { Link } from 'react-router-dom'
import icono from '@/assets/images/otorrino/favicon.png'



type LayerProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayerProps) => {
  const defaultOpen = Cookies.get("sidebar:state") === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="overflow-auto">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Link className='flex gap-1 items-center w-fit' to='/'>
              <img src={icono} alt='logo' className='w-[2rem]' />
              <p className='text-xl lg:text-2xl text-black font-bold'>Medica<span className='text-otorrino'>otorrino</span> </p>
            </Link>
          </div>
        </header>
        <main className="p-5">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

// import { Shape1 } from '@/assets/images/SVGComponents/Shapes'
// import { Button } from '@/components/ui/button'
// import raul from '@/assets/images/otorrino/raul_corte.png'
// import magda from '@/assets/images/otorrino/magdicarla_corte.png'
// import { useNavigate } from 'react-router-dom'
// import { GiHealing } from "react-icons/gi";
// import { IoMdTime } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { ChevronRight, } from "lucide-react"
import nocturne from '@/assets/images/nocturne.webp'
import { useTranslation } from 'react-i18next';



export const Banner = () => {
  const { t } = useTranslation();
  return <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-gray-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              {t('landing.banner.title')}
            </h1>
            <p className="max-w-[600px] text-gray-400 md:text-xl">
              {t('landing.banner.subtitle')}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-purple-600 hover:bg-purple-700">
              {t('landing.banner.cta')}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="#solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-purple-500 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-500/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
            >
              {t('landing.banner.cta2')}
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
            <img
              src={nocturne}
              alt="Hero Image"
              className="object-cover rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
}


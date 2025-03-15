
import { MoonStar, } from "lucide-react"
import { useTranslation } from 'react-i18next';
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-gray-800 bg-black py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <MoonStar className="h-6 w-6 text-purple-500" />
          <span className="font-bold">Nocturne Labs</span>
        </div>
        {/* <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div> */}
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Nocturne Labs. {t('rights')}</p>
      </div>
    </footer>
  )
}

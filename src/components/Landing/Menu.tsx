import { MoonStar, } from "lucide-react"
import { useTranslation } from 'react-i18next';
import { Toggle } from "@/components/ui/toggle"
import { useLanguage, } from '@/context/LanguageContext';






export const Menu = () => {
  // const { isAuthenticated } = useAuthStore()
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);
  };

  const { t } = useTranslation();
  return (
    <header className="container mx-auto z-40 bg-black">
      <div className="flex h-20 items-center justify-between py-6">
        <div className="flex gap-2 items-center">
          <MoonStar className="h-8 w-8 text-purple-500" />
          <span className="text-xl font-bold">Nocturne Labs</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white">
            {t('features')}
          </a>
          <a href="#solutions" className="text-sm font-medium text-gray-300 hover:text-white">
            {t('solutions')}
          </a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white">
            {t('about')}
          </a>
          <a href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-white">
            {t('testimonials')}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md border border-purple-500 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-500/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-500"
          >
            {t('contact')}
          </a>
          <Toggle onClick={handleChangeLanguage} pressed={currentLanguage === 'es' ? true : false}>{currentLanguage}</Toggle>

          {/* <Button className="bg-purple-600 hover:bg-purple-700">
            {t('login')}
          </Button> */}
        </div>
      </div>
    </header>
  )
}

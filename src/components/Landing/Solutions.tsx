import { Button } from "@/components/ui/button"
import { ChevronRight, } from "lucide-react"
// import placeholder from "@/assets/images/placeholder.svg"
import { useTranslation } from 'react-i18next';
import work from "@/assets/images/work.webp"

const listSolution = [
  {
    name: 'solutionsSection.list.cloud'
  },
  {
    name: 'solutionsSection.list.ai'
  },
  {
    name: 'solutionsSection.list.enterprise'
  },
  {
    name: 'solutionsSection.list.custom'
  },
]

export const Solutions = () => {
  const { t } = useTranslation();

  const printListSolutions = () => {
    return listSolution.map((item, index) => {
      return (
        <li className="flex items-center gap-2" key={index}>
          <div className="bg-purple-500/20 p-1 rounded-full">
            <ChevronRight className="h-4 w-4 text-purple-500" />
          </div>
          <span>{t(item.name)}</span>
        </li>
      )
    })
  }
  return (
    <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-500 w-fit">
              {t('solutionsSection.tagline')}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('solutionsSection.title')}
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed">
              {t('solutionsSection.description')}
            </p>
            <ul className="grid gap-4">
              {printListSolutions()}
            </ul>
            <div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                {t('solutionsSection.explore')}
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={work}
              alt="Solutions"
              width={600}
              height={400}
              className="rounded-lg object-cover border border-gray-800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

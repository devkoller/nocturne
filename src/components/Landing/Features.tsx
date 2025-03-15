
import { Code, Shield, Zap, } from "lucide-react"
import { useTranslation } from 'react-i18next';

const featuresData = [
  {
    icon: Code,
    title: 'featuresSection.advanced.title',
    description: 'featuresSection.advanced.description'
  },
  {
    icon: Shield,
    title: 'featuresSection.security.title',
    description: 'featuresSection.security.description'
  },
  {
    icon: Zap,
    title: 'featuresSection.performance.title',
    description: 'featuresSection.performance.description'
  }

]

export const Features = () => {
  const { t } = useTranslation();

  const printFeatures = () => {
    return featuresData.map((feature, index) => {
      const Icon = feature.icon
      return (
        <div key={index} className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg transition-all hover:shadow-purple-500/10">
          <div className="bg-purple-500/20 p-3 rounded-full w-fit">
            <Icon className="h-6 w-6 text-purple-500" />
          </div>
          <h3 className="text-xl font-bold">{t(feature.title)}</h3>
          <p className="text-gray-400">
            {t(feature.description)}
          </p>
        </div>
      )
    })
  }
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-500">
              {t('featuresSection.tagline')}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('featuresSection.title')}
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('featuresSection.description')}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {printFeatures()}
        </div>
      </div>
    </section>
  )
}

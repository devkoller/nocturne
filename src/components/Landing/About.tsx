
import { Code, Zap, Users, BarChart3, } from "lucide-react"
import { useTranslation } from 'react-i18next';

const aboutList = [
  {
    icon: Users,
    title: '5+',
    description: 'aboutSection.list.members'
  },
  {
    icon: Code,
    title: '10+',
    description: 'aboutSection.list.projects'
  },
  {
    icon: BarChart3,
    title: '95%',
    description: 'aboutSection.list.satisfaction'
  },
  {
    icon: Zap,
    title: '3+',
    description: 'aboutSection.list.experience'
  },

]

export const About = () => {
  const { t } = useTranslation();

  const printListAbout = () => {
    return aboutList.map((item, index) => {
      const Icon = item.icon;
      return (
        <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
          <Icon className="h-10 w-10 text-purple-500" />
          <h4 className="text-xl font-bold">{item.title}</h4>
          <p className="text-sm text-gray-400">{t(item.description)}</p>
        </div>
      )
    })
  }
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-500">
              {t('aboutSection.tagline')}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('aboutSection.title')}
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('aboutSection.description')}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold">
              {t('aboutSection.mission.title')}
            </h3>
            <p className="text-gray-400">
              {t('aboutSection.mission.description')}
            </p>

            <h3 className="text-2xl font-bold">
              {t('aboutSection.vision.title')}
            </h3>
            <p className="text-gray-400">
              {t('aboutSection.vision.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {printListAbout()}
            {/* <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
              <Users className="h-10 w-10 text-purple-500" />
              <h4 className="text-xl font-bold">50+</h4>
              <p className="text-sm text-gray-400">Team Members</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
              <Code className="h-10 w-10 text-purple-500" />
              <h4 className="text-xl font-bold">100+</h4>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
              <BarChart3 className="h-10 w-10 text-purple-500" />
              <h4 className="text-xl font-bold">95%</h4>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-4">
              <Zap className="h-10 w-10 text-purple-500" />
              <h4 className="text-xl font-bold">10+</h4>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

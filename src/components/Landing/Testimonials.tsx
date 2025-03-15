
import { useTranslation } from 'react-i18next';

export const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-500">
              {t('testimonialsSection.tagline')}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('testimonialsSection.title')}
            </h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t('testimonialsSection.description')}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <div>
            {t('testimonialsSection.noYet')}
          </div>
          {/* <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <p className="text-gray-400 italic">
              "Nocturne Labs transformed our outdated systems into a streamlined digital ecosystem. Their expertise
              and dedication to our success made all the difference."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-500 font-bold">JD</span>
              </div>
              <div>
                <h4 className="font-bold">Jane Doe</h4>
                <p className="text-sm text-gray-400">CTO, Enterprise Solutions Inc.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <p className="text-gray-400 italic">
              "The team at Nocturne Labs delivered our project on time and exceeded our expectations. Their
              attention to detail and technical expertise is unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-500 font-bold">JS</span>
              </div>
              <div>
                <h4 className="font-bold">John Smith</h4>
                <p className="text-sm text-gray-400">Director of IT, Global Tech</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

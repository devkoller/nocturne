
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { FormInput, } from '@/components/Form'

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  message: z.string(),
})

export const Contact = () => {
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 > Contact.tsx:31 > onSubmit > values:", values);
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-purple-500/20 px-3 py-1 text-sm text-purple-500 w-fit">
              {t('contactSection.tagline')}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t('contactSection.title')}
            </h2>
            <p className="text-gray-400 md:text-xl/relaxed">
              {t('contactSection.description')}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-purple-600 hover:bg-purple-700">
                {t('contactSection.cta')}
              </Button>
              <Button variant="outline" className="border-purple-500 bg-black text-white hover:bg-purple-500/20 hover:text-white">
                {t('contactSection.cta2')}
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormInput
                    label="form.name"
                    name="name"
                    placeholder="form.namePlaceholder"
                    control={form.control}
                  />
                  <FormInput
                    label="form.email"
                    name="email"
                    placeholder="form.emailPlaceholder"
                    control={form.control}
                  />
                </div>
                <FormInput
                  label="form.company"
                  name="password"
                  placeholder="form.companyPlaceholder"
                  control={form.control}
                />
                <FormInput
                  label="form.message"
                  type='textarea'
                  name="message"
                  placeholder="form.messagePlaceholder"
                  control={form.control}
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  {t('form.cta')}
                </Button>
              </form>
            </Form>
            {/* <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none">
                    Name
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium leading-none">
                  Company
                </label>
                <input
                  id="company"
                  className="flex h-10 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none">
                  Message
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[100px] w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter your message"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                Send Message
              </Button>
            </form> */}
          </div>
        </div>
      </div>
    </section>
  )
}

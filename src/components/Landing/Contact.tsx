
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { FormInput, } from '@/components/Form'
import { usePost } from "@/hooks";
import { useToast } from "@/hooks/use-toast"




export const Contact = () => {
  const { t } = useTranslation();
  const { execute, loading } = usePost();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(1, {
      message: t('form.nameError'),
    }),
    email: z.string().email({
      message: t('form.emailError'),
    }),
    company: z.string(),
    phone: z.string(),
    message: z.string().min(1, {
      message: t('form.messageError'),
    })
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    execute({
      url: "/messages/create-message",
      body: values,
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: t('form.successTitle'),
          description: t('form.successMessage'),
        })
        form.reset()
      }
    })
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
              <a href="https://wa.me/523321120145" target="_blank" rel="noopener noreferrer">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  {t('contactSection.cta')}
                </Button>
              </a>
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormInput
                    label="form.company"
                    name="company"
                    placeholder="form.companyPlaceholder"
                    control={form.control}
                  />
                  <FormInput
                    label="form.phone"
                    name="phone"
                    placeholder="form.phonePlaceholder"
                    control={form.control}
                  />
                </div>
                <FormInput
                  label="form.message"
                  type='textarea'
                  name="message"
                  placeholder="form.messagePlaceholder"
                  control={form.control}
                />
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
                  {t('form.cta')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

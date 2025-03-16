
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { FormInput, } from '@/components/Form'
import { usePost, useFetch } from "@/hooks";
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Spinner } from '../ui/spinner';

interface TestimonialsDataType {
  message: string;
  name: string;
  position?: string;
}


export const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const { execute, loading } = usePost();
  const { toast } = useToast();
  const [Data, setData] = useState([]);

  const { response: testimonialsData, loading: loadingFetch } = useFetch({
    url: "/messages/get-testimonials",
  });

  const { t } = useTranslation();

  const formSchema = z.object({
    message: z.string().min(1, {
      message: t('form.messageError'),
    }),
    name: z.string().min(1, {
      message: t('form.nameError'),
    }),
    email: z.string().email({
      message: t('form.emailError'),
    }),
    position: z.string(),

  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      position: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    execute({
      url: "/messages/create-testimonials",
      body: values,
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: t('form.successTitle'),
          description: t('form.successMessage'),
        })
        form.reset()
        setOpen(false)
      }
    })
  }

  const pirntTestimonials = () => {
    if (!Data) return null
    return Data.map((item: TestimonialsDataType, index) => {
      return (
        <div key={index} className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
          <p className="text-gray-400 italic">
            {item.message}
          </p>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span className="text-purple-500 font-bold">
                {item.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h4 className="font-bold">
                {item.name}
              </h4>
              <p className="text-sm text-gray-400">
                {item.position}
              </p>
            </div>
          </div>
        </div>
      )
    })
  }

  useEffect(() => {
    if (testimonialsData) {
      setData(testimonialsData.data)
    }
  }, [testimonialsData])


  useEffect(() => {
    form.reset()
  }, [open])



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
        {loadingFetch && (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        )}
        {Data.length === 0 && (
          <div className='text-center py-10 text-gray-400'>
            <p className='mb-3'>{t('testimonialsSection.noYet')}</p>
            <Button className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                setOpen(true)
              }}
            >
              {t('testimonialsSection.cta')}
            </Button>
          </div>
        )}
        {Data.length > 0 && (
          <>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:gap-12">
              {pirntTestimonials()}
            </div>
            <div className='text-center py-10 text-gray-400'>
              <Button className="bg-purple-600 hover:bg-purple-700"
                onClick={() => {
                  setOpen(true)
                }}
              >
                {t('testimonialsSection.cta')}
              </Button>
            </div>
          </>
        )}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {t('testimonialsSection.ModalTitle')}
            </DialogTitle>
            <DialogDescription>
              {t('testimonialsSection.ModalDescription')}
            </DialogDescription>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormInput
                  label="form.message"
                  type='textarea'
                  name="message"
                  placeholder="form.messagePlaceholder"
                  control={form.control}
                />
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
                  label="form.position"
                  name="position"
                  placeholder="form.positionPlaceholder"
                  control={form.control}
                />

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
                  {t('form.cta')}
                </Button>
              </form>
            </Form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}

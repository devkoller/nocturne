import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInput, FormCombobox } from '@/components/Form'
import { ServiceType } from "@/types"
import { usePost } from "@/hooks"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  type: z.number(),
})

const ServicesType = [
  { value: 1, label: 'Padecimientos que se tratan en consulta' },
  { value: 2, label: 'Procedimientos en consultorio' },
  { value: 3, label: 'Atención de Urgencia' },
]


type FormServicesProps = {
  selectedService: ServiceType | null
  update: () => void
  closeSheet: () => void
}

export const FormServices = ({ selectedService, update, closeSheet }: FormServicesProps) => {
  const { execute, loading } = usePost()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedService?.name || undefined,
      description: selectedService?.description || undefined,
      type: selectedService?.type || undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    let url = selectedService ? `/service/update` : "/service/create"
    let method = selectedService ? "put" : "post"

    execute({
      url,
      method,
      body: {
        ...values,
        id: selectedService?.id,
      },
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Servicio guardado",
          description: "El servicio ha sido guardado correctamente",
        })
        update()
        closeSheet()
      }
    })
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInput
            label="Nombre"
            name="name"
            control={form.control}
            required
          />
          <FormInput
            label="Descripción"
            name="description"
            type="textarea"
            control={form.control}
          />
          <FormCombobox
            option={ServicesType}
            label="Tipo"
            setValue={form.setValue}
            name="type"
            control={form.control}
            required
          />


          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              Guardar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInput } from '@/components/Form'
import { MedicalOfficeType } from "@/types"
import { usePost } from "@/hooks"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  street: z.string().optional().nullable(),
  neighborhood: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  zip_code: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  whatsapp: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  attention_days: z.string().optional().nullable(),
  payment_methods: z.string().optional().nullable(),
})

type FormMedicalOfficeProps = {
  selectedMedicalOffice: MedicalOfficeType | null
  update?: () => void
  closeSheet: () => void
}



export const FormMedicalOffice = ({ selectedMedicalOffice, update = () => { }, closeSheet }: FormMedicalOfficeProps) => {

  const { execute, loading } = usePost()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedMedicalOffice?.name || undefined,
      description: selectedMedicalOffice?.description || undefined,
      street: selectedMedicalOffice?.street || undefined,
      neighborhood: selectedMedicalOffice?.neighborhood || undefined,
      city: selectedMedicalOffice?.city || undefined,
      state: selectedMedicalOffice?.state || undefined,
      country: selectedMedicalOffice?.country || undefined,
      zip_code: selectedMedicalOffice?.zip_code || undefined,
      phone: selectedMedicalOffice?.phone || undefined,
      whatsapp: selectedMedicalOffice?.whatsapp || undefined,
      email: selectedMedicalOffice?.email || undefined,
      attention_days: selectedMedicalOffice?.attention_days || undefined,
      payment_methods: selectedMedicalOffice?.payment_methods || undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("🚀 > FormMedicalOffice.tsx:60 > onSubmit > values:", values);

    let url = selectedMedicalOffice ? `/medical-office/update` : "/medical-office/create"
    let method = selectedMedicalOffice ? "put" : "post"

    execute({
      url,
      method,
      body: {
        ...values,
        id: selectedMedicalOffice?.id,
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


  return <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
        <FormInput
          label="Calle"
          name="street"
          control={form.control}
        />
        <FormInput
          label="Colonia"
          name="neighborhood"
          control={form.control}
        />
        <FormInput
          label="Ciudad"
          name="city"
          control={form.control}
        />
        <FormInput
          label="Estado"
          name="state"
          control={form.control}
        />
        <FormInput
          label="País"
          name="country"
          control={form.control}
        />
        <FormInput
          label="Código Postal"
          name="zip_code"
          control={form.control}
        />
        <FormInput
          label="Teléfono"
          name="phone"
          control={form.control}
        />
        <FormInput
          label="Whatsapp"
          name="whatsapp"
          control={form.control}
        />
        <FormInput
          label="Correo"
          name="email"
          control={form.control}
        />
        <FormInput
          label="Días de atención"
          name="attention_days"
          control={form.control}
        />
        <FormInput
          label="Métodos de pago"
          name="payment_methods"
          control={form.control}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>
            Guardar
          </Button>
        </div>
      </form>
    </Form>
  </div>
}

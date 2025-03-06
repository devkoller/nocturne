import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInput, FormCombobox } from '@/components/Form'
import { usePost } from "@/hooks"
import { useToast } from "@/hooks/use-toast"

const PermissionsType = [
  { value: 1, label: 'Autorización' },
  { value: 2, label: 'Negado' },
]

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  route: z.string(),
  type: z.number(),
})

type FormUserProps = {
  closeSheet: () => void
}

export const FormPermissions = ({ closeSheet }: FormUserProps) => {
  const { execute, loading } = usePost()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: undefined,
      description: undefined,
      route: undefined,
      type: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    execute({
      url: '/user/create-permission',
      body: {
        ...values,
      },
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Permiso guardado",
          description: "El permiso ha sido guardado correctamente",
        })
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
            control={form.control}
          />
          <FormInput
            label="Ruta"
            name="route"
            control={form.control}
            required
          />
          <FormCombobox
            option={PermissionsType}
            label="Tipo"
            name="type"
            control={form.control}
            setValue={form.setValue}
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

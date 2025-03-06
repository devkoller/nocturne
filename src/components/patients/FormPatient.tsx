import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInput } from '@/components/Form'
import { PatientType } from "@/types"
import { usePost } from "@/hooks"
import { useToast } from "@/hooks/use-toast"
import { useNavigate } from "react-router-dom"

const formSchema = z.object({
  name: z.string({
    message: "El nombre es requerido",
  }),
  lastname1: z.string({
    message: "El primer apellido es requerido",
  }),
  lastname2: z.string({
    message: "El segundo apellido es requerido",
  }),
  email: z.string().email().optional().nullable(),
  phone: z.string().optional().nullable(),
  birthdate: z.string(),
  mc: z.string().optional().nullable(),
  workIn: z.string().optional().nullable(),
})

type FormPatientProps = {
  selectedPatient: PatientType | null
  update?: () => void
  closeSheet?: () => void
}

export const FormPatient = ({ selectedPatient, }: FormPatientProps) => {
  const { execute, loading } = usePost()
  const { toast } = useToast()
  const navigate = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedPatient?.name || undefined,
      lastname1: selectedPatient?.lastname1 || undefined,
      lastname2: selectedPatient?.lastname2 || undefined,
      email: selectedPatient?.email || undefined,
      phone: selectedPatient?.phone || undefined,
      birthdate: selectedPatient?.birthdate || undefined,
      mc: selectedPatient?.mc || undefined,
      workIn: selectedPatient?.workIn || undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    let url = selectedPatient ? `/medical-office/update` : "/patient/create"
    let method = selectedPatient ? "put" : "post"

    execute({
      url,
      method,
      body: {
        ...values,
        id: selectedPatient?.id,
      },
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Paciente guardado",
          description: "Paciente guardado correctamente",
        })
        navigate(`/admin-pacientes/${res.data.id}`)
      }
    })
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormInput
            label="Nombre"
            name="name"
            control={form.control}
            required
          />
          <FormInput
            label="Primer Apellido"
            name="lastname1"
            control={form.control}
            required
          />
          <FormInput
            label="Segundo Apellido"
            name="lastname2"
            control={form.control}
            required
          />
          <FormInput
            label="Correo"
            name="email"
            control={form.control}
          />
          <FormInput
            label="Teléfono"
            name="phone"
            control={form.control}
          />
          <FormInput
            label="Fecha de nacimiento"
            type="date"
            name="birthdate"
            control={form.control}
            required
          />
          <FormInput
            label="MC"
            name="mc"
            control={form.control}
          />
          <FormInput
            label="Ocupación"
            name="workIn"
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
  )
}

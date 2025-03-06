import { PatientClinicType } from '@/types'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormInput, } from '@/components/Form'
import { usePost } from "@/hooks"
import { useToast } from "@/hooks/use-toast"

interface ClinicHistoryProps {
  clinic?: PatientClinicType | null
  idPatient: number
  updatePatient: () => void
}

const formSchema = z.object({
  oral_description: z.string().optional().nullable(),
  nose_description: z.string().optional().nullable(),
  earing_left_description: z.string().optional().nullable(),
  earing_right_description: z.string().optional().nullable(),
  face_description: z.string().optional().nullable(),
  idx: z.string().optional().nullable(),
  plan: z.string().optional().nullable(),
  evolution: z.string().optional().nullable(),
})

export const FormClinicHistory = ({ clinic, idPatient, updatePatient }: ClinicHistoryProps) => {
  const { execute, loading } = usePost()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oral_description: clinic?.oral_description || "",
      nose_description: clinic?.nose_description || "",
      earing_left_description: clinic?.earing_left_description || "",
      earing_right_description: clinic?.earing_right_description || "",
      face_description: clinic?.face_description || "",
      idx: clinic?.idx || "",
      plan: clinic?.plan || "",
      evolution: clinic?.evolution || "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    let body = {
      ...values,
      idPatient,
      id: clinic?.id,
    }

    let url = clinic ? `/patient/update-clinic-history` : "/patient/create-clinic-history"
    let method = clinic ? "put" : "post"

    execute({
      url,
      method,
      body: body,
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "",
          description: "Los antecedentes patológicos han sido guardados correctamente",
        })
        form.reset()
        updatePatient()
      }
    })
  }
  return (
    <div className=''>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

          <FormInput
            label="Evolución del padecimiento"
            type='textarea'
            name="evolution"
            control={form.control}
          />

          <FormInput
            label="Cavidad oral y Laringe"
            type='textarea'
            name="oral_description"
            control={form.control}
          />

          <FormInput
            label="Nariz y SPN"
            type='textarea'
            name="nose_description"
            control={form.control}
          />

          <div>
            <h3 className='text-center font-bold'>Oídos</h3>
            <div className='grid grid-cols-2 gap-4'>
              <FormInput
                label="Oído izquierdo"
                type='textarea'
                name="earing_left_description"
                control={form.control}
              />
              <FormInput
                label="Oído derecho"
                type='textarea'
                name="earing_right_description"
                control={form.control}
              />
            </div>
          </div>
          <FormInput
            label="Cara y cuello"
            type='textarea'
            name="face_description"
            control={form.control}
          />
          <FormInput
            label="IDX"
            type='textarea'
            name="idx"
            control={form.control}
          />
          <FormInput
            label="Plan"
            type='textarea'
            name="plan"
            control={form.control}
          />


          <div className="flex">
            <Button type="submit" disabled={loading}>
              Guardar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

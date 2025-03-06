import { useEffect, useState } from 'react'
import { Layout } from '@/components/auth'
import { useFetch, usePost } from '@/hooks'
import { FormServices } from '@/components/Services'
import { ServiceType } from '@/types'
import { Button } from "@/components/ui/button"
import { DataTable } from '@/components/utils'
import { getColumns } from '@/components/Services'
import { Spinner } from "@/components/ui/spinner"
import { useToast } from "@/hooks/use-toast"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"

interface StateTypeof {
  services: ServiceType[]
  selectedService: ServiceType | null
  SheetTitle: string
}

const typeLabel = {
  1: 'Padecimientos que se tratan en consulta',
  2: 'Procedimientos en consultorio',
  3: 'Atención de Urgencia',
}


export const AdminServices = () => {
  const { execute } = usePost()
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [Data, setData] = useState<StateTypeof>({
    services: [],
    selectedService: null,
    SheetTitle: '',
  })

  const { response: serviceData, loading } = useFetch({
    url: "/service/get-all",
  })

  const update = () => {
    execute({
      url: "/service/get-all",
      method: "get",
    }).then((res) => {
      if (res.status === 200) {
        let data = res.data.map((service: ServiceType) => {
          let type = service.type as keyof typeof typeLabel
          return {
            ...service,
            typeLabel: typeLabel[type],
          }
        })
        setData(prev => ({
          ...prev,
          services: data,
        }))
      }

    })
  }

  const handleSheet = () => {
    setOpen(prev => !prev)
  }

  const handleNewService = () => {
    setOpen(prev => !prev)
    setData(prev => ({
      ...prev,
      selectedService: null,
      SheetTitle: 'Nuevo Servicio',
    }))
  }

  const handleEdit = (service: ServiceType) => {
    setOpen(prev => !prev)
    setData(prev => ({
      ...prev,
      selectedService: service,
      SheetTitle: 'Editar Servicio',
    }))
  }

  const handlePublished = (service: ServiceType) => {
    let body = {
      public: service.public ? 0 : 1,
      id: service.id,
    }
    execute({
      url: "/service/update",
      method: "put",
      body,
    }).then((res) => {
      if (res.status === 200) {
        toast({
          title: "Servicio guardado",
          description: "El servicio ha sido guardado correctamente",
        })
        update()
      }
    })
  }

  const columns = getColumns(handlePublished, handleEdit)
  useEffect(() => {
    if (serviceData) {
      let data = serviceData.data.map((service: ServiceType) => {
        let type = service.type as keyof typeof typeLabel
        return {
          ...service,
          typeLabel: typeLabel[type],
        }
      })
      setData(prev => ({
        ...prev,
        services: data,
      }))
    }
  }, [serviceData])

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  return (
    <Layout>
      <PageHeader>
        <PageHeaderHeading>Servicios</PageHeaderHeading>
        <PageHeaderDescription>
          Administración de servicios
        </PageHeaderDescription>
        <PageActions>
          <Button size="sm" onClick={handleNewService}>
            Nuevo servicio
          </Button>
        </PageActions>
      </PageHeader>

      <DataTable
        data={Data.services}
        columns={columns}
      />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {Data.SheetTitle}
            </SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <FormServices
            selectedService={Data.selectedService}
            update={update}
            closeSheet={handleSheet}
          />
        </SheetContent>
      </Sheet>
    </Layout>
  )
}

import { useEffect, useState } from 'react'
import { Layout } from '@/components/auth'
import { useFetch, usePost } from '@/hooks'
import { MedicalOfficeType } from '@/types'
import { Button } from "@/components/ui/button"
import { DataTable } from '@/components/utils'
import { getColumns } from '@/components/MedicalOffice'
import { Spinner } from "@/components/ui/spinner"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FormMedicalOffice } from "@/components/MedicalOffice"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"

interface StateTypeof {
  medicalOffice: MedicalOfficeType[]
  selectedMedicalOffice: MedicalOfficeType | null
  SheetTitle: string
}

export const AdminMedicalOffice = () => {
  const { execute } = usePost()
  const [open, setOpen] = useState(false)
  const [Data, setData] = useState<StateTypeof>({
    medicalOffice: [],
    selectedMedicalOffice: null,
    SheetTitle: '',
  })

  const { response: medicalOffce, loading } = useFetch({
    url: "/medical-office/get-all",
  })

  const update = () => {
    execute({
      url: "/medical-office/get-all",
      method: "get",
    }).then((res) => {
      if (res.status === 200) {
        setData(prev => ({
          ...prev,
          medicalOffice: res.data,
        }))
      }
    })
  }

  const handleNewMedicalOffice = () => {
    setOpen(prev => !prev)
    setData(prev => ({
      ...prev,
      selectedMedicalOffice: null,
      SheetTitle: 'Nuevo Consultorio',
    }))
  }

  const handleEdit = (medicalOffice: MedicalOfficeType) => {
    setOpen(prev => !prev)
    setData(prev => ({
      ...prev,
      selectedMedicalOffice: medicalOffice,
      SheetTitle: 'Editar Consultorio'
    }))
  }

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  const columns = getColumns(handleEdit)

  useEffect(() => {
    if (medicalOffce) {
      setData(e => ({ ...e, medicalOffice: medicalOffce.data, }))
    }
  }, [medicalOffce])

  if (loading) {
    return <Layout>
      <Spinner />
    </Layout>
  }


  return (
    <Layout>
      <PageHeader>
        <PageHeaderHeading>Consultorios</PageHeaderHeading>
        <PageHeaderDescription>
          Aquí puedes gestionar los consultorios
        </PageHeaderDescription>
        <PageActions>
          <Button size="sm" onClick={handleNewMedicalOffice}>
            Nuevo Consultorio
          </Button>
        </PageActions>
      </PageHeader>

      <DataTable
        data={Data.medicalOffice}
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
          <FormMedicalOffice selectedMedicalOffice={Data.selectedMedicalOffice} update={update} closeSheet={handleOpen} />
        </SheetContent>
      </Sheet>
    </Layout>
  )
}

import { useFetch, } from '@/hooks'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/auth'
import { Button } from "@/components/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { FormPatient } from "@/components/patients"
import { PatientType } from '@/types'
import { DataTable } from '@/components/utils'
import { Spinner } from "@/components/ui/spinner"
import { Columns } from '@/components/patients'
import { useNavigate } from 'react-router-dom'


interface StateTypeof {
  patients: PatientType[]
  selectedPatient: PatientType | null
}


export const AdminPatients = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [Data, setData] = useState<StateTypeof>({
    patients: [],
    selectedPatient: null,
  })

  const { response: patientsData, loading } = useFetch({
    url: "/patient/get-all",
  })

  const handleOpen = () => {
    setOpen(prev => !prev)
  }

  useEffect(() => {
    if (patientsData) {
      setData(e => ({ ...e, patients: patientsData.data }))
    }
  }, [patientsData])

  const onRowDoubleClick = (row: PatientType) => {
    navigate(`/admin-pacientes/${row.id}`)
  }

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
        <PageHeaderHeading>Pacientes</PageHeaderHeading>
        <PageHeaderDescription>
          En esta sección podrás ver los pacientes registrados en el sistema
        </PageHeaderDescription>
        <PageActions>
          <Button size="sm" onClick={handleOpen}>
            Nuevo paciente
          </Button>
        </PageActions>
      </PageHeader>

      <DataTable
        data={Data.patients}
        columns={Columns}
        onRowDoubleClick={onRowDoubleClick}
      />


      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              Nuevo Paciente
            </SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <FormPatient
            selectedPatient={Data.selectedPatient}
          />
        </SheetContent>
      </Sheet>

    </Layout>
  )
}

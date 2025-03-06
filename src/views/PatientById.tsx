
import { useState, useEffect } from "react"
import { Layout } from "@/components/auth"
import { useParams } from "react-router-dom"
import { useFetch, usePost } from "@/hooks"
import { useNavigate } from "react-router-dom"
import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PatientType } from "@/types"

//tabs
import { Patient } from '@/components/patients/ById/Patient'
import { PathologicalHistory } from '@/components/patients/ById/PathologicalHistory'
import { History } from '@/components/patients/ById/History'
import { FamilyHistory } from '@/components/patients/ById/FamilyHistory'
import { Address } from '@/components/patients/ById/Address'
import { ClinicHistory } from '@/components/patients/ById/ClinicHistory'

interface StateTypeof {
  patient: PatientType | null
}


export const PatientById = () => {
  const { id } = useParams()
  const { execute } = usePost()
  const navigate = useNavigate()
  const [Data, setData] = useState<StateTypeof>({
    patient: null,
  })

  const { response: patientData, loading } = useFetch({
    url: `/patient/get/${id}`,
  })

  const updatePatient = () => {
    execute({
      url: `/patient/get/${id}`,
      method: 'get',
    }).then((res: any) => {
      if (res.status === 200) {
        setData(e => ({ ...e, patient: res.data }))
      }
    })
  }

  useEffect(() => {
    if (patientData) {
      setData(e => ({ ...e, patient: patientData.data }))
    }
  }, [patientData])

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    )
  }

  const tabs = [
    {
      title: 'Paciente',
      value: 'patient',
      content: <Patient patient={Data.patient} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    },
    {
      title: 'Clínica',
      value: 'clinic',
      content: <ClinicHistory clinic={Data.patient?.clinic_histories} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    },
    {
      title: 'Antecedentes patológicos',
      value: 'pathological',
      content: <PathologicalHistory pathological={Data.patient?.pathological_history} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    },
    {
      title: 'Antecedentes no patológicos',
      value: 'nonPathological',
      content: <History nonPathological={Data.patient?.history} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    },
    {
      title: 'Antecedentes familiares',
      value: 'family',
      content: <FamilyHistory family={Data.patient?.family_history} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    },
    {
      title: 'Dirección',
      value: 'address',
      content: <Address add={Data.patient?.patient_address} idPatient={Data.patient?.id || 0} updatePatient={updatePatient} />
    }
  ]

  const printTabs = () => {
    return tabs.map((tab, index) => {
      return (
        <TabsTrigger key={index} value={tab.value}>{tab.title}</TabsTrigger>
      )
    })
  }

  const printContent = () => {
    return tabs.map((tab, index) => {
      return (
        <TabsContent key={index} value={tab.value}>{tab.content}</TabsContent>
      )
    })
  }

  if (!Data.patient) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-full">
          <div>Paciente no encontrado</div>
          <Button onClick={() => navigate("/admin-pacientes")}>Regresar</Button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="flex-1">
        <Tabs defaultValue="patient" className="space-y-4">
          <TabsList>
            {printTabs()}
          </TabsList>
          {printContent()}
        </Tabs>
      </div>
    </Layout>
  )
}

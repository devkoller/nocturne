import { PatientType } from "@/types"
import { FaTimes } from "react-icons/fa"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { PathologicalHistory } from './PathologicalHistory'
import { History } from './History'
import { FamilyHistory } from './FamilyHistory'
import { Address } from './Address'



interface PatientProps {
  patient: PatientType | null
  idPatient: number
  updatePatient: () => void
}

export const Patient = ({ patient, idPatient, updatePatient }: PatientProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-12 md:col-span-8">
          <section className="flex flex-col border border-gray-400 p-3 rounded-md gap-1">
            <div className="flex gap-1">
              <span>
                Nombre:
              </span>
              <span className="flex-1 border-b border-black">{patient?.name} {patient?.lastname1} {patient?.lastname2}</span>
              <span>
                Fecha Nac.:
              </span>
              <span className="border-b border-black">{patient?.birthdate}</span>
            </div>
            <div className="flex gap-1">
              <span>
                Teléfono:
              </span>
              <span className="flex-1 border-b border-black">{patient?.phone}</span>
              <span>
                Ocupación:
              </span>
              <span className="flex-1 border-b border-black">{patient?.workIn}</span>
            </div>

            {patient?.patient_address && (
              <>
                <div className="flex gap-1">
                  <span>
                    Calle:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.patient_address?.street}</span>
                  <span>
                    Col.:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.patient_address?.neighborhood}</span>
                </div>
                <div className="flex gap-1">
                  <span>
                    Estado:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.patient_address?.state}</span>
                  <span>
                    País:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.patient_address?.country}</span>
                </div>
              </>
            )}

          </section>

          <Accordion type="single" collapsible>
            {!patient?.pathological_history && (
              <AccordionItem value="pathological">
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <FaTimes /> Aun no se ha registrado antecedentes patológicos
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <PathologicalHistory pathological={patient?.pathological_history} idPatient={idPatient} updatePatient={updatePatient} />
                </AccordionContent>
              </AccordionItem>
            )}

            {!patient?.history && (
              <AccordionItem value="history">
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <FaTimes /> Aun no se ha registrado antecedentes no patológicos
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <History nonPathological={patient?.history} idPatient={idPatient} updatePatient={updatePatient} />
                </AccordionContent>
              </AccordionItem>
            )}

            {!patient?.family_history && (
              <AccordionItem value="family">
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <FaTimes /> Aun no se ha registrado antecedentes familiares
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <FamilyHistory family={patient?.family_history} idPatient={idPatient} updatePatient={updatePatient} />
                </AccordionContent>
              </AccordionItem>
            )}

            {!patient?.patient_address && (
              <AccordionItem value="address">
                <AccordionTrigger>
                  <div className="flex gap-1 items-center">
                    <FaTimes /> Aun no se ha registrado dirección del paciente
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Address add={patient?.patient_address} idPatient={idPatient} updatePatient={updatePatient} />
                </AccordionContent>
              </AccordionItem>
            )}

          </Accordion>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
          {patient?.pathological_history && (
            <section className="flex flex-col border border-gray-400 p-3 rounded-md gap-1">
              <h2 className="text-lg font-bold">Antecedentes patológicos</h2>
              <div className="flex gap-1">
                <span>
                  Cirugías:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.surgery ? 'Si' : 'No'}</span>
              </div>

              {patient?.pathological_history?.surgery && (
                <div className="flex gap-1 px-3">
                  <span>
                    Cuales?:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.pathological_history?.surgery_description}</span>
                </div>
              )}


              <div className="flex gap-1">
                <span>
                  Alergias:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.allergies ? 'Si' : 'No'}</span>
              </div>
              {patient?.pathological_history?.allergies && (
                <div className="flex gap-1 px-3">
                  <span>
                    A que?:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.pathological_history?.allergies_description}</span>
                </div>
              )}


              <div className="flex gap-1">
                <span>
                  Otras enfermedades:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.other_diseases ? 'Si' : 'No'}</span>
              </div>
              {patient?.pathological_history?.other_diseases && (
                <div className="flex gap-1 px-3">
                  <span>
                    Otras:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.pathological_history?.other_diseases_description}</span>
                </div>
              )}

              <div className="flex gap-1">
                <span>
                  Asma:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.asthma ? 'Si' : 'No'}</span>
              </div>

              <div className="flex gap-1">
                <span>
                  Diabetes Mellitus:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.dm ? 'Si' : 'No'}</span>
              </div>

              <div className="flex gap-1">
                <span>
                  Hipertensión Arterial:
                </span>
                <span className="flex-1 border-b border-black">{patient?.pathological_history?.has ? 'Si' : 'No'}</span>
              </div>



            </section>
          )}

          {patient?.history && (
            <section className="flex flex-col border border-gray-400 p-3 rounded-md gap-1">
              <h2 className="text-lg font-bold">Antecedentes no patológicos</h2>

              <div className="flex gap-1">
                <span>
                  Tabaquismo:
                </span>
                <span className="flex-1 border-b border-black">{patient?.history?.tabaquism ? 'Si' : 'No'}</span>
              </div>
              <div className="flex gap-1">
                <span>
                  Alcoholismo:
                </span>
                <span className="flex-1 border-b border-black">{patient?.history?.alcoholism ? 'Si' : 'No'}</span>
              </div>
              <div className="flex gap-1">
                <span>
                  Usa lentes:
                </span>
                <span className="flex-1 border-b border-black">{patient?.history?.use_glasses ? 'Si' : 'No'}</span>
              </div>

              <div className="flex gap-1">
                <span>
                  Convive con animales:
                </span>
                <span className="flex-1 border-b border-black">{patient?.history?.animals ? 'Si' : 'No'}</span>
              </div>

              <div className="flex gap-1">
                <span>
                  Hábitos de sueño:
                </span>
                <span className="flex-1 border-b border-black">{patient?.history?.sleep_habits ? 'Si' : 'No'}</span>
              </div>

              {patient?.history?.sleep_habits && (
                <div className="flex gap-1 px-3">
                  <span>
                    Cuales?:
                  </span>
                  <span className="flex-1 border-b border-black">{patient?.history?.sleep_habits_description}</span>
                </div>
              )}
            </section>
          )}

          {patient?.family_history && (
            <section className="flex flex-col border border-gray-400 p-3 rounded-md gap-1">
              <h2 className="text-lg font-bold">Antecedentes familiares</h2>
              <div className="">
                <span>
                  Antecedentes familiares:
                </span>
                <p className="flex-1 border-b border-black">{patient?.family_history?.family_history}</p>
              </div>
              <div className="">
                <span>
                  Otros medicamentos:
                </span>
                <p className="flex-1 border-b border-black">{patient?.family_history?.other_medications}</p>
              </div>
            </section>
          )}
        </div>

      </div>
    </>
  )
}

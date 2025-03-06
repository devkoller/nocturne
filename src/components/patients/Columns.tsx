import { ColumnDef } from "@tanstack/react-table"
import { PatientType } from "@/types"


export const Columns: ColumnDef<PatientType>[] = [
  {
    accessorKey: "name",
    header: 'Nombre',
  },
  {
    accessorKey: "lastname1",
    header: 'Primer apellido',
  },
  {
    accessorKey: "lastname2",
    header: 'Segundo apellido',
  },
  {
    accessorKey: "email",
    header: 'Correo',
  },
  {
    accessorKey: "phone",
    header: 'Teléfono',
  }
]
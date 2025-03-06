import { ColumnDef } from "@tanstack/react-table"
import { ServiceType } from "@/types"
import { Button } from "@/components/ui/button"
import { FaCheck, FaTimes } from "react-icons/fa";
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const Columns: ColumnDef<ServiceType>[] = [
  {
    accessorKey: "name",
    header: 'Nombre',
  },
  {
    accessorKey: "typeLabel",
    header: 'Tipo',
  },
]


export const getColumns = (handlePublished: (user: ServiceType) => void, handleEdit: (user: ServiceType) => void) => {
  return [
    ...Columns,
    {
      accessorKey: "public",
      header: "Publicado",
      cell: ({ row }: { row: any }) => {
        return <div className="flex px-5">
          {row.original.public ? <FaCheck /> : <FaTimes />}
        </div>
      }
    },
    {
      accessorKey: "actions",
      header: "Publicado",
      cell: ({ row }: { row: any }) => {

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  handlePublished(row.original)
                }}
              >
                Publicar servicio
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  handleEdit(row.original)
                }}
              >
                Editar servicio
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
}
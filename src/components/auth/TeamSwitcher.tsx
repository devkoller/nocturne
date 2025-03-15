"use client"

import * as React from "react"
// import icono from '@/assets/images/otorrino/favicon.png'
import { ChevronsUpDown, Plus } from "lucide-react"
import { useFetch, } from '@/hooks'
import { useEffect, } from 'react'
import { MedicalOfficeType } from '@/types'
import { useMo } from "@/context/consultorio-provider"
import { Spinner } from "@/components/ui/spinner"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { FormMedicalOffice } from "@/components/MedicalOffice"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

export function TeamSwitcher() {
  const { setMedicalOffice, medicalOffice } = useMo()
  const { isMobile } = useSidebar()
  const [open, setOpen] = React.useState(false)
  const [Data, setData] = React.useState({
    medicalOffice: [],
  })

  const { response: medicalOffce, loading } = useFetch({
    url: "/medical-office/get-all",
  })

  const handleSheet = () => {
    setOpen(prev => !prev)
  }

  const setActive = (mo: MedicalOfficeType) => {
    setMedicalOffice(mo)

  }

  useEffect(() => {
    if (medicalOffce) {
      setData(e => ({ ...e, medicalOffice: medicalOffce.data, }))

      if (medicalOffce.data.length > 0) {
        setMedicalOffice(medicalOffce.data[0])
      }
    }
  }, [medicalOffce])

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square bg-transparent size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  {/* <img src={icono} alt="" /> */}
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {Object.keys(medicalOffice).length > 0 ? medicalOffice?.name : "Consultorio"}
                  </span>
                  <span className="truncate text-xs">Consultorio</span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Consultorios
              </DropdownMenuLabel>
              {Data.medicalOffice.map((mo: MedicalOfficeType, index) => (
                <DropdownMenuItem
                  key={mo.name}
                  onClick={() => setActive(mo)}
                  className="gap-2 p-2"
                >
                  {mo.name}
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2" onClick={handleSheet}>
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Crear consultorio
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              Nuevo Consultorio
            </SheetTitle>
            <SheetDescription>
            </SheetDescription>
          </SheetHeader>
          <FormMedicalOffice closeSheet={handleSheet} selectedMedicalOffice={{} as MedicalOfficeType} />
        </SheetContent>
      </Sheet>
    </>
  )
}

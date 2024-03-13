import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function Filtro({ setOrdem }) {
  return (
    <div>
        <DropdownMenu>
          <DropdownMenuTrigger> <Button>Ordenar</Button> </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setOrdem("Asc")}>A-Z</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOrdem("Desc")}>Z-A</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}


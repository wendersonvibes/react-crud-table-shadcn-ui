import { React } from 'react';

// SHADCN/UI COMPONENTS
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// ICONS
import { DotsVerticalIcon } from "@radix-ui/react-icons"
import { Button } from '../ui/button';

export function Produto({ id, nome, deletarProduto }) {
    return (
        <TableRow key={id}>
          <TableCell>{id}</TableCell>
          <TableCell>{nome}</TableCell>
          <TableCell>

            <DropdownMenu>
              <DropdownMenuTrigger> <DotsVerticalIcon /> </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Button variant='outline'>Editar</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant='destructive' onClick={() => deletarProduto(id)} >Deletar</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </TableCell>
        </TableRow>
    )
}
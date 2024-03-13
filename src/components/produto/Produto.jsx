import { React, useState } from 'react';

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
import { ProdutoEditForm } from '../produtoEdit/produtoEditForm';

export function Produto({ id, nome, deletarProduto }) {

  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = () => setModalAberto(true)

  return (
    <>
      <ProdutoEditForm modalAberto={modalAberto} setModalAberto={setModalAberto}/>
      
      <TableRow key={id}>
        <TableCell>{id}</TableCell>
        <TableCell>{nome}</TableCell>
        <TableCell>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <DotsVerticalIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button onClick={abrirModal}>Editar</Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant='destructive' onClick={() => deletarProduto(id)} >Deletar</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </TableCell>
      </TableRow>
    </>
  )
}
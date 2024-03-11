// SHADCN/UI COMPONENTS
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

// MY COMPONENTS 
import { ProdutoForm } from "./components/produtoForm/ProdutoForm"

// ICONS
import { DotsVerticalIcon } from "@radix-ui/react-icons"

// HOOKS
import { useState } from "react"
import { Produto } from "./components/produto/Produto"

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Abacaxi'
    },
    {
      id: 2,
      nome: 'Pêra'
    },
    {
      id: 3,
      nome: 'Maçã'
    },
  ])

  const addProduto = ( nome ) => {
    let novosProdutos = [
      ...produtos, 
      {
        id: Math.floor(Math.random()*10000),
        nome: nome
      }
    ];

    setProdutos(novosProdutos)
  }

  const deletarProduto = ( id ) => {
    let todosProdutos = [...produtos]
    let produtosFiltrados = todosProdutos.filter(
      (produto) => produto.id != id ? produto : null
    )

    setProdutos(produtosFiltrados)
  }

  return (
    <div className="max-w-4xl py-6 mx-auto ">

      <div className="flex items-center justify-end gap-3 mb-4">
        <form className="flex items-center gap-2">
          <Input placeholder='Buscar' />
        </form>

        {/* FORMULÁRIO DE PRODUTOS */}
        <ProdutoForm addProduto={addProduto} />

        <DropdownMenu>
          <DropdownMenuTrigger> <Button>Ordenar</Button> </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>A-Z</DropdownMenuItem>
            <DropdownMenuItem>Z-A</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* TABELA */}
      <div className="border rounded-lg p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Opções</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {produtos.map(({ id, nome }) => (
              <Produto id={id} nome={nome} deletarProduto={deletarProduto} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App

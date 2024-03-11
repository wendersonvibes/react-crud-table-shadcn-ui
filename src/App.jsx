// SHADCN/UI COMPONENTS
import {
  Table,
  TableBody,
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

// MY COMPONENTS 
import { ProdutoForm } from "./components/produtoForm/ProdutoForm"
import { Produto } from "./components/produto/Produto"
import { Busca } from "./components/busca/Busca"

// HOOKS
import { useState, useEffect } from "react"

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

  const [busca, setBusca] = useState("")

  // ADICICIONAR PRODUTO
  const addProduto = (nome) => {
    let novosProdutos = [
      ...produtos,
      {
        id: Math.floor(Math.random() * 10000),
        nome: nome
      }
    ];

    setProdutos(novosProdutos)
  }

  // DELETAR PRODUTO
  const deletarProduto = (id) => {
    let todosProdutos = [...produtos]
    let produtosFiltrados = todosProdutos.filter(
      (produto) => produto.id != id ? produto : null
    )

    setProdutos(produtosFiltrados)
  }

  // BUSCAR PRODUTO
  const buscarProduto = (produtos, busca) => {
    
    let buscados = produtos.filter((produto) =>
      produto.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    )

    // SUJEITO A ALTERAÇÕES!!!!
    setProdutos(buscados)

  }

  // REALIZA A PESQUISA QUANDO O CAMPO BUSCA FOR PREENCHIDO
  useEffect(() => {
    buscarProduto(produtos, busca)
  }, [busca])


  return (
    <div className="max-w-4xl py-6 mx-auto ">

      <div className="flex items-center justify-end gap-3 mb-4">
        {/* BUSCA */}
        <Busca busca={busca} setBusca={setBusca} />

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

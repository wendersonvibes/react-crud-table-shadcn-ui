// SHADCN/UI COMPONENTS
import { Table, TableBody, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Button } from "./components/ui/button"

// MY COMPONENTS 
import { ProdutoForm } from "./components/produtoForm/ProdutoForm"
import { Produto } from "./components/produto/Produto"
import { Busca } from "./components/busca/Busca"

// HOOKS
import { useState } from "react"

function App() {
  const [busca, setBusca] = useState("")
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Abacaxi'
    }
  ])

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

  // FUNÇÃO PARA RENDERIZAR OS PRODUTOS
  function renderizarProdutos(produtos) {
    return (
      <TableBody>
        {produtos.map(({ id, nome }) => (
          <Produto key={id} id={id} nome={nome} deletarProduto={deletarProduto} />
        ))}
      </TableBody>
    );
  }

  // RENDERIZA SÓ OS PRODUTOS FILTRADOS PELA BUSCA
  function renderizarProdutosFiltrados() {
    const produtosFiltrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return renderizarProdutos(produtosFiltrados);
  }

  // RENDERIZA TODOS OS PRODUTOS
  function renderizarTodosOsProdutos() {
    return renderizarProdutos(produtos);
  }

  return (
    <div className="max-w-4xl py-6 mx-auto ">

      <div className="flex items-center justify-end gap-3 mb-4">
        {/* BUSCA */}
        <Busca busca={busca} setBusca={setBusca} />

        {/* FORMULÁRIO DE PRODUTOS */}
        <ProdutoForm addProduto={addProduto} />

        {/* DROPDOWN MENU */}
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

          {busca.length != 0 ? renderizarProdutosFiltrados() : renderizarTodosOsProdutos()}

        </Table>
      </div>
    </div>
  )
}

export default App

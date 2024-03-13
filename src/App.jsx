// SHADCN/UI COMPONENTS
import { Table, TableBody, TableHead, TableHeader, TableRow, } from "@/components/ui/table"


// MY COMPONENTS 
import { ProdutoForm } from "./components/produtoForm/ProdutoForm"
import { Produto } from "./components/produto/Produto"
import { Busca } from "./components/busca/Busca"

// HOOKS
import { useState } from "react"
import { Filtro } from "./components/filtro/Filtro"

function App() {
  const [busca, setBusca] = useState("")
  const [ordem, setOrdem] = useState("Asc")
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Abacaxi'
    },
    {
      id: 2,
      nome: 'Zebra'
    }
  ])

  // ADICICIONAR PRODUTO
  const addProduto = (nome) => {
    let novosProdutos = [...produtos, { id: Math.floor(Math.random() * 10000), nome: nome }];
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

  // FUNÇÃO PARA ORDENAR OS PRODUTOS
  function ordenarProdutos(produtos) {
    const ordenados = produtos.sort((a, b) =>
      ordem === "Asc"
      ? a.nome.localeCompare(b.nome) // organiza de forma ascendente
      : b.nome.localeCompare(a.nome) // organiza de forma descendente
    )

    // RETORNA OS PRODUTOS ORDENADOS
    return ordenados;
  }

  // RENDERIZA SÓ OS PRODUTOS FILTRADOS PELA BUSCA
  function renderizarProdutosFiltrados() {
    // filtra os produtos
    const produtosFiltrados = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(busca.toLowerCase())
    );

    // ordena os produtos filtrados
    let produtosOrdenados = ordenarProdutos(produtosFiltrados)

    // retorna os produtos ordenados e filtrados
    return renderizarProdutos(produtosOrdenados);
  }

  // RENDERIZA TODOS OS PRODUTOS
  function renderizarTodosOsProdutos() {
    let produtosOrdenados = ordenarProdutos(produtos)
    return renderizarProdutos(produtosOrdenados);
  }

  return (
    <div className="max-w-4xl py-6 mx-auto ">

      <div className="flex items-center justify-end gap-3 mb-4">
        {/* BUSCA */}
        <Busca busca={busca} setBusca={setBusca} />

        {/* FORMULÁRIO DE PRODUTOS */}
        <ProdutoForm addProduto={addProduto} />

        {/* DROPDOWN MENU */}
        <Filtro setOrdem={setOrdem} />

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

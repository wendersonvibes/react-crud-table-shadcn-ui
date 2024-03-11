import { React } from 'react'
import { Input } from "@/components/ui/input"

export function Busca({ busca, setBusca }) {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input placeholder='Buscar' type='text' value={busca} onChange={(e) => setBusca(e.target.value)} />
      </form>
    </div>
  )
}

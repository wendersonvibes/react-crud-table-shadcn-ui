import React, { useState } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from '../ui/input'
import { PlusIcon } from "@radix-ui/react-icons"

export function ProdutoForm({ addProduto }) {

    const [nome, setNome] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Para não enviar o formulário
        if (!nome ) return;
        addProduto(nome);
        setNome("");
    };

    const salvarNome = (e) => {
        let nomeInput = e.target.value;
        setNome(nomeInput);
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button>Novo produto <PlusIcon /></Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='mb-3'>Cadastrar produto</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit} >
                                <label>Nome:</label>
                                <Input className='mb-3' type='text' onChange={salvarNome} value={nome} />

                                <Button type="submit">Enviar</Button>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
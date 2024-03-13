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

export function ProdutoEditForm({ modalAberto, setModalAberto}) {


    const handleSubmit = (e) => {
        e.preventDefault(); // Para não enviar o formulário
        setModalAberto(false);
        // Salvar novo nome do produto
    };

    return (
        <div>
            <Dialog open={modalAberto} onOpenChange={() => setModalAberto(!modalAberto)} >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='mb-3'>Editar produto</DialogTitle>
                        <DialogDescription>
                            <form onSubmit={handleSubmit} >
                                <label>Nome:</label>
                                <Input className='mb-3' type='text' />

                                <Button type="submit">Enviar</Button>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}
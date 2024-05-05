import { useState } from 'react'
import { imagens } from 'src/constants'
import { ChangeImage, ShowImage } from 'src/components'

const Alfabeto = () => {
    const [imagem, setImagem] = useState("/Alfa.png")

    const handleImagem = () => {
        const indice = Math.round(Math.random() * (imagens.length - 1))
        setImagem(imagens[indice])
    }

    return (
        <>
            <ShowImage imagem={imagem} />
            <ChangeImage handleImagem={handleImagem} />
        </>
    )
}

export default Alfabeto
export { Alfabeto }

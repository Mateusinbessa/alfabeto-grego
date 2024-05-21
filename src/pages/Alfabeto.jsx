import { useEffect, useState } from "react"
import { images } from "src/constants"

const Alfabeto = () => {
    const [letter, setLetter] = useState({ value: "", revealed: false })
    const [message, setMessage] = useState("hidden")
    const [image, setImage] = useState("Alfa.png")
    const [answer, setAnswer] = useState("")

    useEffect(() => {
        setLetter({ ...letter, value: image.split(".")[0] })
    }, [image])

    const handleImagem = () => {
        const indice = Math.round(Math.random() * (images.length - 1))
        setLetter({ ...letter, revealed: false })
        setMessage("hidden")
        setImage(images[indice])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === letter.value.toLowerCase()) {
            setLetter({ ...letter, revealed: true })
            setMessage("Você acertou!")
        } else {
            setMessage("Resposta errada!")
            setTimeout(() => {
                setMessage("hidden")
            }, 1000)
        }
    }

    return (
        <main>
            <div className="container">
                <h2 className={`${letter.revealed ? "revealed" : "hidden"}`}>Resposta: {letter.value}</h2>
                <img src={image} alt="Letra do alfabeto grego" />
                <h2 className={`${message === "hidden" ? "hidden" : "revealed"}`}>{message}</h2>
                <form>
                    <input
                        className="input-estilizado"
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Digite aqui o nome da letra"
                        type="text"
                    />
                    <button
                        className="btn"
                        onClick={handleSubmit}
                    >
                        Enviar
                    </button>
                </form>
                <div className="button-container">
                    <button
                        className="btn"
                        onClick={(e) => setLetter({ ...letter, revealed: true })}
                    >
                        Revele a letra
                    </button>
                    <button
                        className="btn"
                        onClick={handleImagem}
                    >
                        Altere a imagem
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Alfabeto
export { Alfabeto }
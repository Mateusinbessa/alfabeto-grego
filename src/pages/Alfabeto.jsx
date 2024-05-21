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
        setImage(images[indice])
        setMessage("hidden")
        setAnswer("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === letter.value.toLowerCase()) {
            setLetter({ ...letter, revealed: true })
            setMessage("Você acertou!")
            setTimeout(() => {
                handleImagem()
            }, 1000)
        } else {
            setMessage("Resposta errada!")
            setTimeout(() => {
                setMessage("hidden")
            }, 1000)
        }
    }

    return (
        <main>

            <div className="card">
                <h1 className="text-center mb-2 text-[40px] max-sm:text-4xl">Adivinhe a letra</h1>
                <h2 className="text-slate-500">Greek Alphabet</h2>
                <h2 className={`${letter.revealed ? "revealed" : "opacity-0"} text-2xl`}>Resposta: {letter.value}</h2>
                <img className="w-[400px] max-sm:w-[250px] h-[200px] mt-5" src={image} alt="Letra do alfabeto grego" />
                <h2 className={`${message === "hidden" ? "opacity-0" : "revealed"} text-2xl my-4`}>{message}</h2>
                <form>
                    <input
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Digite aqui o nome da letra"
                        className="input p-4 h-[40px] max-sm:w-[220px]"
                        value={answer}
                        type="text"
                    />
                    <button
                        onClick={handleSubmit}
                        className="btn h-[40px] w-[100px] max-sm:w-[75px]"
                    >
                        Enviar
                    </button>
                </form>
                <div className="flex gap-3 justify-center items-center mt-5">
                    <button
                        onClick={(e) => setLetter({ ...letter, revealed: true })}
                        className="btn w-[170px] max-sm:w-[140px] h-[40px]"
                    >
                        Revele a letra
                    </button>
                    <button
                        onClick={handleImagem}
                        className="btn w-[170px] max-sm:w-[140px] h-[40px]"
                    >
                        Altere a imagem
                    </button>
                </div>
            </div>
            <footer>
                <p className="ml-1 mt-1">Developed by: Mateus Bessa</p>
            </footer>
        </main>
    )
}

export default Alfabeto
export { Alfabeto }
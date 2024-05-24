import { useEffect, useState } from "react"
import { Check, X } from "lucide-react"
import { images } from "src/constants"
import { toast } from 'sonner'

const Alfabeto = () => {
    const [letter, setLetter] = useState({ value: "", revealed: false })
    const [image, setImage] = useState("Alfa.png")
    const [answer, setAnswer] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        setLetter({ ...letter, value: image.split(".")[0] })
    }, [image])

    const handleImagem = () => {
        const indice = Math.round(Math.random() * (images.length - 1))
        setLetter({ ...letter, revealed: false })
        setImage(images[indice])
        setAnswer("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer.toLowerCase() === letter.value.toLowerCase()) {
            setCount(count + 1)
            toast.success
                (
                    <div className="flex w-full h-full justify-center items-center">
                        <Check />
                        <p className="text-xl font-light">Você acertou</p>
                    </div>,
                    { duration: 1000, }
                )
            setTimeout(() => {
                handleImagem()
            }, 1000)
        } else {
            setCount(0)
            toast.error
            (
                <div className="flex w-full h-full justify-center items-center">
                    <X />
                    <p className="text-xl font-light">Você errou!</p>
                </div>,
                { duration: 500, }
            )
        }
    }

    return (
        <main>
            <div className="card">
                <div className="p-5 flex flex-col justify-center items-center rounded-lg">
                    <h2 className="text-blue-500 text-4xl">Alfabeto Grego</h2>
                    <h2 className="text-xl font-light mt-2 text-center">Pontos: {count}</h2>
                </div>
                <img className="w-[400px] max-sm:w-[250px] h-[200px]" src={image} alt="Letra do alfabeto grego" />
                <h2 className={`${letter.revealed ? "revealed" : "opacity-0"} text-xl font-light mb-5`}>Resposta: {letter.value}</h2>
                <form>
                    <input
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Digite a letra aqui"
                        className="input p-4 h-[40px] max-sm:w-[220px]"
                        value={answer}
                        type="text"
                    />
                    <button
                        onClick={handleSubmit}
                        className="btn rounded-r-md h-[40px] w-[100px] max-sm:w-[75px]"
                    >
                        Enviar
                    </button>
                </form>
                <div className="flex gap-3 justify-center items-center mt-5">
                    <button
                        onClick={(e) => setLetter({ ...letter, revealed: true })}
                        className="btn w-[170px] max-sm:w-[140px] h-[40px] rounded-lg"
                    >
                        Revelar a letra
                    </button>
                    <button
                        onClick={handleImagem}
                        className="btn w-[170px] max-sm:w-[140px] h-[40px] rounded-lg"
                    >
                        Mudar a letra
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
import { useState } from 'react'
import './App.css'
import ShowImage from './components/ShowImage'
import ChangeImage from './components/ChangeImage'

function App() {
  const [imagem, setImagem] = useState("/Alfa.png")

  const handleImagem = () => {

    const imagens = [
      'Alfa.png',
      'Beta.svg',
      'Gamma.png',
      'Delta.png',
      'Epsilon.png',
      'Zeta.svg',
      'Eta.png',
      'Theta.svg',
      'Iota.png',
      'Kappa.svg',
      'Lambda.svg',
      'Mu.png',
      'Nu.png',
      'Xi.svg',
      'Omicron.png',
      'Pi.svg',
      'Rho.png',
      'Sigma.png',
      'Tau.png',
      'Upsilon.png',
      'Phi.png',
      'Psi.png',
      'Omega.png'
    ]

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

export default App

const ChangeImage = ({ handleImagem }) => {
  return (
    <div>
      <button onClick={handleImagem}>Altere a imagem</button>
    </div>
  )
}

export default ChangeImage
export { ChangeImage }
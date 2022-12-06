import './styles.css';

export const NewPost = () => {
  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" placeholder="Digite o título" />
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite o título"></textarea>
        </div>
        <input type="submit" value="Criar post" className='btn'/>
      </form>
    </div>
  )
}

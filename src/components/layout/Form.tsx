import './Form.css'

function Form(){
    return(
        <div>
            <form className="form">
                <div className='input-container'>
                    <label>Título:</label>
                    <input type="text" name="title" />
                </div>
                <div className='input-container'>
                    <label>Categoria:</label>
                    <select name="category">
                        <option value="work">Trabalho</option>
                        <option value="study">Estudos</option>
                        <option value="health">Saúde</option>
                        <option value="personal">Pessoal</option>
                    </select>
                </div>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>
    )
}
export default Form
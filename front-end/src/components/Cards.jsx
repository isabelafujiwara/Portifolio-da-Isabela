import "../index.css"


function Cards(props){
    return(
        <div className="cardLivro" style={{borderColor: props.cor}}>
            <img className="capas" 
            src={props.imageUrl}
            alt={props.title}></img>
        
            <div className="tituloLivro">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default Cards;
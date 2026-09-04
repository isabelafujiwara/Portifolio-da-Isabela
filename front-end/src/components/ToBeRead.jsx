import "../index.css"
import { useState } from 'react';

function ToBeRead(props){
    const [visible, setVisible]=useState(false);
    const [count, setCount]=useState(0);
    const corBorda=visible ? props.cor : "black";

    return(
        <>
            <div className="secaoEscondida" style={{borderColor: corBorda}}>
                {visible ? 
                    (<img className="imagemEscondida" 
                    src={props.imageUrl} ></img>)
                :
                    (<img className="imagemEscondida" src="/question.jpg" ></img>)}
                {visible ? 
                    (<h2> {props.title} </h2>)
                :
                    (<h2>???</h2>)}
                
                <div className="botoes">
                    <button className= "botaoMostra"onClick={()=> setVisible (!visible)}
                    style={{
                        backgroundColor: visible ? props.cor :"#A9A9A9",
                        color: visible ? "white" : "black",
                        borderRadius: "20px",
                        border: "none"
                        
                    }}>
                            Mostrar
                    </button>
                    <div className="curtidas">
                        <button className="botaoCurtida" onClick={()=>setCount(count+1)}>
                            <img className="hearts" src={count!=0 ? "/red_heart.jpg" : "/white_heart.jpg"}></img>
                            {count} curtidas
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToBeRead;
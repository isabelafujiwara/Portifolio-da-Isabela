import "../index.css";

function Navbar() {
    
    return(
        <>
            <div>
                <div className="barra">
                    <div className="navegacoes">
                        <div><h2>Home</h2></div>
                        <div><h2>Galeria</h2></div>
                    </div>
                    <div>
                        <div className="titulo">LIVROS</div>
                    </div>
                    <div>
                        <img className="logo-livro" src="public/livro.jpg"></img>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default Navbar;
import {useState, useEffect} from "react";


function Pesquisa(){
   const [pesquisado,setPesquisado]=useState("");
   const [livro, setLivro]=useState(null);
   const [erro, setErro]=useState(null);
   const [loading, setLoading]=useState(false);
   const [imageUrl, setImageUrl]=useState("");
   const [image2Url, setImage2Url]=useState("");


   useEffect(()=>{
        async function carregarRecomendado(){
            try{
           const response2 = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent("Jogos Vorazes")}`); 

           const data2 = await response2.json();

           if ((!response2.ok || !data2.docs ||data2.docs.length ===0 || !data2.docs[0].cover_i)){
              setErro ("Livro 2 não encontrado :(") ;
           }
           else{
               const idCapa2 = data2.docs[0].cover_i;
               setImage2Url (`https://covers.openlibrary.org/b/id/${idCapa2}-L.jpg`);
           }
        }
         catch (err){
           setErro("Falha na conexão");
       }
       }
       carregarRecomendado();

   }, []);//[] faz com que rode apenas uma vez

   async function getLivro(){
       if (!pesquisado) return;


       setLoading (true);
       setErro(null);
       setImageUrl("");
       setLivro(null);


       try{
           const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(pesquisado)}`);
            //converte espaços e acentosem código válido


           const data = await response.json();
          
           // devolve um objeto com uma lista "docs" contendo os livros encontrados, mas só pega o primeiro
           // se digitar letras sem sentido não cria a lista "docs"
           if ((!response.ok || !data.docs ||data.docs.length ===0 || !data.docs[0].cover_i)){
              setErro ("Nenhum livro encontrado :(") ;
           }
           else{
               setLivro (data.docs[0]);
               const idCapa = data.docs[0].cover_i;
                setImageUrl (`https://covers.openlibrary.org/b/id/${idCapa}-L.jpg`)
           }
                      
       }
       catch (err){
           setErro("Falha na conexão");
       }
       finally{
           setLoading(false);
       }
   }


   return(
   <>
    <div className="container_pesquisa_e_recomendado">
   <div className="container_pesquisa">
       <div className="container_input">
           <input className="input_pesquisa"
               placeholder="pesquise um livro"
               value={pesquisado}
               onChange={e => setPesquisado(e.target.value)}
           />
           <button className="botao_pesquisa"onClick={getLivro}>Pesquisar</button>
       </div>
       <div className="livro_pesquisado">
           {loading && <p>Procurando livros...</p>}
           {erro && <p>{erro}</p>}
           {livro &&(
            <div>
                <h2>{livro.title}</h2>
                {imageUrl && (
                    <img className="imagem_api"
                    src={imageUrl}/>
                )}
                {livro.author_name && <p><strong>Autor:</strong> {livro.author_name[0]}</p>}
                {livro.first_publish_year && <p><strong>Publicação: </strong>{livro.first_publish_year}</p>}
                {livro.number_of_pages_median && <p><strong>Páginas:</strong> {livro.number_of_pages_median} páginas</p>}
            </div>
        )}   
       </div>
       </div>
       {image2Url &&(
       <div className="container_recomendado">
            <h2>Livro Recomendado: Jogos Vorazes</h2>
            <img className="imagem_recomendado"src={image2Url}/>
            <p><strong>Autor:</strong> Suzanne Collins</p>
            <p><strong>Publicação:</strong> 2008</p>
       </div>
        )}
        </div>
   </>
   );
}


export default Pesquisa;
import './App.css'
import  Navbar  from "./components/Navbar"
import Sobre from "./components/Sobre"
import Cards from "./components/Cards"
import cardsObj from "./constants/cardsObj.js";
import tbrObj from "./constants/tbrObj.js"
import ToBeRead from "./components/ToBeRead"
import Pesquisa from "./components/Pesquisa"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Sobre/>
      <div className="favoritos">Atuais livros favoritos!</div>
      <div className="cardsContainer">
        {cardsObj.map((card, index)=>(
          <Cards
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            cor={card.cor}
          />
      ))}</div>

      <div className="TBR">Qual será meu próximo livro??</div>
      
      <div className="tbrContainer">
        {tbrObj.map((book, index)=>(
          <ToBeRead
            key={index}
            title={book.title}
            imageUrl={book.imageUrl}
            cor={book.cor}
          />
        ))

        }
      </div>

      <Pesquisa/>
      <Footer/>
    </>
  )
}

export default App

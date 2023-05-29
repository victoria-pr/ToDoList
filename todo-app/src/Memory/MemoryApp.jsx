import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Memory.css";
import Card from "./components/Card";
import GameOver from "./components/GameOver";

function MemoryApp() {
    const navigate = useNavigate();
  let arrayOfImages = [
    { 
        num: 1,
        img: "https://drive.google.com/uc?export=download&id=1ApQwVbe75GfKvVC9sky0670VKhN0nkZy",
        isMatch: false
    },
    {
        num: 2,
        img: "https://drive.google.com/uc?export=download&id=19yAmwsBAy62JcIZl4knYgRquncYftqDz",
        isMatch: false
    },
    {
        num: 3,
        img: "https://drive.google.com/uc?export=download&id=1twOezozyMDLoq4ZVtD2ZEhAKZf4G-dcJ",
        isMatch: false
    },
    {
        num: 4,
        img: "https://drive.google.com/uc?export=download&id=1MuwDhKBh1VoaG-pzb9czeTtbbf6YouFz",
        isMatch: false
    },
    {
        num: 5,
        img: "https://drive.google.com/uc?export=download&id=1T-Ct_3agGehzRgMT9CRjjp6wjBK1ksfD",
        isMatch: false
    },
    {
        num: 6,
        img: "https://drive.google.com/uc?export=download&id=1QPvC85itqGGf_kkQb8k1JXBx73-b58jC",
        isMatch: false
    },
  ];
  const [cards, setCards] = useState([]); // array de las cartas que se van a mostrar en la pantalla (12)
  const [selectedCards, setSelectedCards] = useState([]); //array de las cartas que se van a comparar (2)
  const [score, setScore] = useState(0); 
  const [tries, setTries] = useState(0);    
  const [gameOver, setGameOver] = useState(false); //para mostrar el game over cuando se acaben las cartas y se reinicie el juego

  const shuffleImages = () => {
    //doble array
    let shuffledArray = [...arrayOfImages, ...arrayOfImages] //duplicamos el array (para que haya 2 de cada carta)
    //add id
    .map((item, index) => ({ ...item, id: index + 1 })) //añadimos un id único a cada carta
    //shuffle
    .sort((a,b) => 0.5 - Math.random()); //ordenamos aleatoriamente las cartas.
    setScore(0); //reiniciamos el score a 0 cuando se reinicia el juego 
    setCards(shuffledArray); //guardamos el array en el estado cards nuevamente barajado
  };


  useEffect(() => { //Se useEffect para asegurar que las cartas se barajen al inicio del juego
    shuffleImages();
  }, []);


    useEffect(() => { 
        //console.log(selectedCards);
        if(selectedCards.length === 2){ // comprueba si hay 2 cartas seleccionadas
            setTimeout(() => { //si hay 2 cartas seleccionadas, se ejecuta el setTimeout para que se muestren durante 700ms y luego se oculten si no son iguales
                setSelectedCards([]);
            }, 700);
            checkMatch(); //comprueba si las cartas son iguales
        }
    }, [selectedCards]);


const checkMatch = () => {
    if(selectedCards[0].num === selectedCards[1].num){ //comprueba si las cartas son iguales
        setScore((prev) => prev + 1); //si las cartas son iguales, se suma 1 al score
       let updatedCards = cards.map((card) => { //se actualiza el estado de las cartas para que se muestren como matched
            if(card.num === selectedCards[0].num){ //si las cartas son iguales, se actualiza el estado de las cartas para que se muestren como matched
                return { ...card, isMatch: true}; //se actualiza el estado de las cartas para que se muestren como matched
            }
            return card; //se actualiza el estado de las cartas para que se muestren como matched
        });
        setCards(updatedCards);
    }else{
        //console.log("no match!");
        setTries((prev) => prev + 1); //si las cartas no son iguales, se suma 1 a los intentos
    }
};
       
//RESTART GAME
useEffect(() => {
    if(score === arrayOfImages.length) { //si el score es igual a la longitud del array de cartas, se ejecuta el setTimeout para que se muestre el game over
        setTimeout(() => {
        shuffleImages(); //se barajan las cartas
        setGameOver(true); //se muestra el game over
        setSelectedCards([]); //se reinicia el array de cartas seleccionadas
    }, 1000);
    }
}, [score, shuffleImages]);

  
  return (
    <> 
    <nav> 
        <div className="memorynav">
          <button className="homeboton" onClick={() => navigate('/')}>
            Home
          </button>
        </div>
      </nav>
    {gameOver && ( <GameOver setTries={setTries} tries = {tries} setGameOver= {setGameOver}/>)} 
  <div className="memocontainer">
    <div className="score-container">
        <div className="score">Score: {score}</div>
        <div className="tries">Tries: {tries}</div>
    </div>

    <div className="card-container">
        {cards.map((card) => (
        <Card key={card.id} card={card} 
        setSelectedCards={setSelectedCards} 
        selectedCards= {selectedCards} />
            ))}
    </div>
</div>
</>
);
}

export default MemoryApp;
 

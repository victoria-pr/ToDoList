import React, { useEffect, useState } from "react";
import "./Memory.css";
import Card from "./components/Card";

function MemoryApp() {
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
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);    

  const shuffleImages = () => {
    //doble array
    let shuffledArray = [...arrayOfImages, ...arrayOfImages]
    //add id
    .map((item, index) => ({ ...item, id: index + 1 }))
    //shuffle
    .sort((a,b) => 0.5 - Math.random());

    setCards(shuffledArray);
  };
  //console.log(cards);  


  useEffect(() => {
    shuffleImages();
  }, [])


    useEffect(() => { 
        console.log(selectedCards);
        if(selectedCards.length === 2){
            setTimeout(() => {
                setSelectedCards([]);
            }, 1000);
            checkMatch();
        }
    }, [selectedCards]);


const checkMatch = () => {
    if(selectedCards[0].num === selectedCards[1].num){
        setScore((prev) => prev + 1); //prev es el valor anterior
       let updatedCards = cards.map((card) => {
            if(card.num === selectedCards[0].num){
                return { ...card, isMatch: true};
            }
            return card;
        });
        setCards(updatedCards);
    }else{
        //console.log("no match!");
        setTries((prev) => prev + 1);
    }
}
//console.log(cards);
       
//RESTART GAME
useEffect(() => {
    if(score === arrayOfImages.length){
        console.log("game over!");
    }
}, [score]);


  return (
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
);
}

export default MemoryApp;
 

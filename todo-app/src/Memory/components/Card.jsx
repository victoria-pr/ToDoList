import React, {useState, useEffect} from 'react';

const Card = ({card, setSelectedCards, selectedCards}) => {
    //console.log(card);

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        //console.log("clicked!");
        setSelectedCards([...selectedCards, card]);
    };

    useEffect(() => {
        if(selectedCards[0] ===  card || 
            selectedCards[1] === card || 
            card.isMatch
            ){
            setIsFlipped(true);
        }else{
            setIsFlipped(false);
        }
    }, [selectedCards]);


    return (
    <div className = {isFlipped ? "card open" : "card"} onClick={handleClick}>
        <div className="fron">
            <img src= {card.img} alt="" />  
        </div>
        <div className="back"></div>
    </div>
    );
}

export default Card;
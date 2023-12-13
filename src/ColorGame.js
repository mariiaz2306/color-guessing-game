import React, { useEffect, useState } from "react";
import styles from './ColorGame.module.css';

const ColorGame = () => {
    const colorData = [
        { color: '#ffa500', text: 'orange' }, 
        { color: '#eb4034', text: 'red' },
        { color: '#346beb', text: 'blue' },
        { color: '#b134eb', text: 'violet' },
        { color: '#ebe134', text: 'yellow' },
        { color: '#34eb6b', text: 'green' },
        { color: '#0f0f0f', text: 'black' },
        { color: '#ffffff', text: 'white' },
        { color: '#ff00a2', text: 'pink'}

    ]

    const [targetColorIndex, setTargetColorIndex] = useState(generateRandomIndex(colorData.length));
    const [guessedText, setGuessedText] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    useEffect(() => {
        if (
            guessedText.toLowerCase() === colorData[targetColorIndex].text.toLowerCase()
        ) {
            setIsCorrect(true)
        } else {
            setIsCorrect(false)
        }
    }, [guessedText, targetColorIndex, colorData])

    
    const handleInputChange = (e) => {
    setGuessedText(e.target.value)
    }
    const handleReset = () => {
        setTargetColorIndex(generateRandomIndex(colorData.length));
        setGuessedText('');
        setIsCorrect(null);
    }
    return (
        <div className={styles.colorGame}>
            <div className={styles.colorBox} style= {{backgroundColor: colorData[targetColorIndex].color}}>   
            </div>
            <input type="text" placeholder="guess color" value={guessedText} onChange={handleInputChange} />
            {isCorrect !== null && (
                <div className={styles.resultMessage}>
                     {isCorrect ? 'Correct' : 'Uncorrect, try again'}
                </div>
            )} 
            <button onClick={handleReset}>Next Color</button>
        </div>
    )
}
const generateRandomIndex = (max) => {
    return Math.floor(Math.random()*max)
}
export default ColorGame;

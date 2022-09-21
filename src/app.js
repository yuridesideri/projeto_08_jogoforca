import Game from "./game";
import Guess from "./guess";
import Letters from "./letters";
import styled from "styled-components";
import {useState} from 'react';

const GameScreen = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function App(props) {
	const [word, setWord] = useState('');
	const [errors, setErrors] = useState(0);
	const [rightAnswers, setRightAnswers] = useState('');
	const [gameState, setGameState] = useState('new-game');
	const [tried, setTried] = useState([])
	const setAll = {setWord, setErrors, setRightAnswers, setGameState, setTried}
	return (
		<GameScreen className="game-screen">
			<Game removeWeirdChars={removeWeirdChars} setAll={setAll} image={defineImageState(errors)} wordSplitted={word.split('')} setWord={setWord} rightAnswers={rightAnswers} gameState={gameState} setGameState={setGameState}/>
			<Letters removeWeirdChars={removeWeirdChars} tried={tried} setTried={setTried} errors={errors} setErrors={setErrors} gameState={gameState} setGameState={setGameState} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers} word={word} checkEndGame={checkEndGame}/>
			<Guess removeWeirdChars={removeWeirdChars}  setGameState={setGameState} word={word} />
		</GameScreen>
	);
}


function defineImageState(number) {
	const numberOfPictures = 7;
	if (typeof number !== "number") {
		throw new Error(
			`Invalid parameter to defineImageState function. Expected type === number. Received type === ${typeof number}.`,
			"game.js",
			"Line 5"
		);
	} else if (number < 0 || number >= numberOfPictures) {
		throw new Error("Invalid number of pictures", "game.js", "Line 9");
	}
	return `./assets/forca${number}.png`;
}


function checkEndGame(word, rightAnswers, setGameState){
	const wordSet = new Set();
	word.split('').forEach(el => wordSet.add(el));
	if(wordSet.size === rightAnswers.length + 1){
		setGameState('won-game')
	}
}

function removeWeirdChars(text){  
    text = text.toLowerCase();                                                         
    text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'A');
    text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'E');
    text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'I');
    text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'O');
    text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'U');
    text = text.replace(new RegExp('[Ç]','gi'), 'C');
    return text.toUpperCase();                 
}
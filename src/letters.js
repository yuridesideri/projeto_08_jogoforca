import styled from "styled-components";

const LetterButton = styled.button`
	width: 40px;
	height: 40px;
	font-weight: bold;
	font-size: 20px;
	border-radius: 5px;
	color: ${(props) =>props.tried.includes(props.char[0]) || props.gameState === 'new-game'? "#2a2a2a67" : props.gameState === 'in-game'? "black" : "#2a2a2a67"};
	pointer-events: ${(props) =>props.tried.includes(props.char[0]) || props.gameState === 'new-game'? "none" : props.gameState === 'in-game'? "normal" : "none"};
	background-color: ${(props) =>props.tried.includes(props.char[0]) || props.gameState === 'new-game'? "#ffffffd5" : props.gameState === 'in-game'? "#6ca1e6d2" : "#ffffffd5"};
`;
const LetterBox = styled.div`
	display: grid;
	grid-template-columns: repeat(13, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 5px;
	margin-top: 40px;
	margin-bottom: 20px;
`;

export default function Letters(props) {
	return (
		<>
			<LetterBox>
				{letterArray().map((letter) => (
					<Letter
						allProps={props}
						key={`${letter}-key`}
						char={letter}
					/>
				))}
			</LetterBox>
		</>
	);
}

function Letter(props) {
	return (
		<LetterButton
			tried={props.allProps.tried}
			char={props.char}
			gameState={props.allProps.gameState}
			onClick={() =>
				handleClick(
					props.allProps.setGameState,
					props.allProps.gameState,
					props.char,
					props.allProps.word,
					props.allProps.checkEndGame,
					props.allProps.setTried,
					props.allProps.setRightAnswers,
					props.allProps.setErrors,
					props.allProps.rightAnswers,
					props.allProps.removeWeirdChars,
				)
			}
		>
			{props.char}
		</LetterButton>
	);
}

function letterArray() {
	const alphabetNumber = 26;
	const letterArray = [];
	const code = "A".charCodeAt(0);
	for (let i = 0; i < alphabetNumber; i++) {
		letterArray.push(String.fromCharCode(code + i));
	}
	return letterArray;
}

function handleClick(setGameState, gameState, char, word, endGame, setTried, setCorrect, setErrors, rightAnswers, removeWeirdChars) {
	const newWord = removeWeirdChars(word);
	if (gameState === "in-game") {
		setTried(old => old.concat(char));
		if (newWord.includes(char[0])) {
			setCorrect(prevState => prevState.concat(char[0]));
			endGame(newWord, rightAnswers, setGameState);
		}
		else{
			setErrors(old =>{
				const newValue = old + 1;
				console.log(newValue);
				if (newValue === 6)
				{
					setGameState('lost-game');
				}
				return newValue;
			})
		}
	}
}


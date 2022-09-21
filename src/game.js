import styled from "styled-components";
import words from "./words/words.js";

const GameContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const ImageContainer = styled.div`
	pointer-events: none;
	img {
		width: 450px;
	}
`;
const GameLogicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin-right: 20%;

	button {
		width: 200px;
		height: 50px;
		background-color: #2fbb5e;
		outline: 0;
		border: 0;
		border-radius: 5px;
		font-size: 16px;
		color: white;
		font-weight: bold;
		:hover {
			transform: scale(104%);
		}
		:active {
			transform: scale(102%);
		}
	}
	h1 {
		font-size: 30px;
	}
`;
const DynamicWord = styled.h1`
	color: ${(props) => props.color};

`;

export default function Game(props) {
	const {
		image,
		wordSplitted,
		setWord,
		rightAnswers,
		gameState,
		setAll,
	} = props;
	console.log(wordSplitted);
	console.log(gameState);
	const wordColor =
		gameState === "won-game"
			? "#2fbb5e"
			: gameState === "lost-game"
			? "red"
			: "black";
	return (
		<GameContainer>
			<ImageContainer>
				<img src={image} alt="" />
			</ImageContainer>
			<GameLogicContainer>
				<button
					onClick={() => {
					resetStates(setAll);
						setWord(randomWord());
					}}
					className="choose-word-button"
				>
					Draw a word!
				</button>
				<DynamicWord color={wordColor}>
					{wordCharRender(wordSplitted, rightAnswers, gameState,props.removeWeirdChars)}
				</DynamicWord>
			</GameLogicContainer>
		</GameContainer>
	);
}

function randomWord() {
	const randomInd = Math.floor(Math.random() * words.length);
	return words[randomInd].toUpperCase();
}

function wordCharRender(wordSplitted, rightAnswers, gameState, removeWeirdChars) {
	if (gameState === "in-game" || gameState === "new-game") {
		const newArray = wordSplitted.map((el) =>{
			const newEl = removeWeirdChars(el);
			return rightAnswers.includes(newEl) ? el + " " : "_ "
		}
		);
		return newArray;
	} else {
		return wordSplitted;
	}
}

function resetStates(props){
	console.log(props);
	props.setErrors(0);
	props.setGameState('in-game');
	props.setRightAnswers('');
	props.setTried([]);
	props.setWord('');

}


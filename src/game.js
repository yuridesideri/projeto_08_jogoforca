import styled from "styled-components";
import words from "./words/words.js";

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
function randomWord() {
	const randomInd = Math.floor(Math.random() * words.length);
	return words[randomInd];
}
console.log(randomWord);

const GameContainer = styled.div`
	display: flex;

`;
const ImageContainer = styled.div`
    pointer-events: none;
    margin-right: 100px;
`;
const GameLogicContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin-left: 100px;
    button{
        width: 200px;
        height: 50px;
        background-color: #2fbb5e;
        outline: 0;
        border: 0;
        border-radius: 5px;
        font-size: 16px;
        color: white;
        font-weight: bold;
        :hover{
            transform: scale(104%);
        }
        :active{
            transform: scale(102%);
        }
    }
    h1{
        font-size: 30px;
    }
`;

export default function Game(props) {
	return (
		<GameContainer>
			<ImageContainer>
				<img src={defineImageState(6)} alt="" />
			</ImageContainer>
			<GameLogicContainer>
				<button className="choose-word-button">Draw a word!</button>
				<h1>_ _ _ _ _ _</h1>
			</GameLogicContainer>
		</GameContainer>
	);
}

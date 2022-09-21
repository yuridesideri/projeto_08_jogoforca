import styled from "styled-components";
import { useState } from "react";

const GuessDiv = styled.div`
	display: flex;
    justify-content: space-around;
    min-width: 500px;
    width: 50%;
    p{
        font-size: 18px;
    }
    input{
        width: 200px;
        height: 20px;
        font-size: 20px;
    }
    button{
        background-color: white;
        width: 100px;
        font-weight: bold;
        border-radius: 5px;
        :active{
            background-color: #f0f0f0;
        }
    }
`;


export default function Guess(props) {
	const { setGameState, word, removeWeirdChars } = props;
	const [input, setInput] = useState("");

	return (
		<GuessDiv>
			<p>Try a guess, if you dare!</p>
			<input onChange={(e) => setInput(e.target.value)} type="text" />
			<button onClick={() => checkGame(removeWeirdChars(input), setGameState, removeWeirdChars(word))}>
				Check!
			</button>
		</GuessDiv>
	);
}

function checkGame(input, setGameState, word) {
	setGameState((oldState) => {
		if (oldState === "in-game" && input !== '') {
			if (input.replace(' ', '').toUpperCase() === word) {
				return "won-game";
			} else {
				return "lost-game";
			}
		}
        else{
            return oldState;
        }
	});
}

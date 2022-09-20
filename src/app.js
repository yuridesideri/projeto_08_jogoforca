import Game from "./game";
import Guess from "./guess";
import Letters from "./letters";
import styled from "styled-components";

const GameScreen = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default function App(props) {
	return (
		<GameScreen className="game-screen">
			<Game />
			<Letters />
			<Guess />
		</GameScreen>
	);
}

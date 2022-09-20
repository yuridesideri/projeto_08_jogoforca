import styled from "styled-components";

const LetterButton = styled.button`
	width: 40px;
	height: 40px;
    font-weight: bold;
    font-size: 20px;
`;
const LetterBox = styled.div`
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
    margin-top: 40px;
    margin-bottom: 20px;
`

export default function Letters(props) {
	return (
		<>
			<LetterBox>
			{letterArray().map((letter) => (
				<Letter char={letter} />
			))}
            </LetterBox>
		</>
	);
}

function Letter(props) {
	return <LetterButton>{props.char}</LetterButton>;
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


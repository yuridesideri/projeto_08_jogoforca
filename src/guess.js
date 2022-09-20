import styled from 'styled-components'

const GuessDiv = styled.div`
display: flex;
`



export default function Guess(props) {
    
    return(
        <GuessDiv>
            <p>Try a guess, if you dare!</p>
            <input type="text" />
            <button>Check!</button>
        </GuessDiv>
    )
}
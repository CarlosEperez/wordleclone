import "../styles/WordleBoard.css"
const WordleBoard = (props) =>{
    return(
        <div className="wordleBoard">
            <h1>This is the Board</h1>
            <h1>{props.pressedKey}</h1>
        </div>
    )
}


export default WordleBoard
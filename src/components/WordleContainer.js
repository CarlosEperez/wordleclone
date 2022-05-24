import WordleKeyboard from "./WordleKeyboard"
import WordleBoard from "./WordleBoard"
import React from "react";
import "../styles/WordleBoard.css"

class WordleContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""}
    }

    handleKeyPress = (props) =>{
        this.setState({
            text: props
        })

    }
    render(){
        return(
            <div className="wordleContainer">
                <h1 className="heading">Wordle</h1>
                <WordleBoard  pressedKey={this.state.text} />
                <WordleKeyboard onKeyPressed={this.handleKeyPress} />

            </div>
            
        )
    }
}

export default WordleContainer
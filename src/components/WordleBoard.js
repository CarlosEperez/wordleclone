import "../styles/WordleBoard.css"
const WordleBoard = (props) =>{
    /*
    should make a function that hold the key pressed in something like an array
    and then some kind of loop that updates the div values
    */
    const defaultBoard = [
        ["H","E","L","L","O"],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
        ["","","","",""],
    ];

    const row1 = ["","","","",""];
    const row2 = ["","","","",""];
    const row3 = ["","","","",""];
    const row4 = ["","","","",""];
    const row5 = ["","","","",""];
    const row6 = ["","","","",""];
    const arraypush = [];
    
    arraypush.push(props.pressedKey)
    //boardModify(props)
    //{props.pressedKey}
    return(
        
        <div className="wordleBoard">
            <div className="row">
                <div>{arraypush[0]}</div>
                <div>{arraypush[1]}</div>
                <div>{row1[2]}</div>
                <div>{row1[3]}</div>
                <div>{row1[4]}</div>
            </div>
            <div className="row">
                <div>{defaultBoard[1][0]}</div>
                <div>{defaultBoard[1][1]}</div>
                <div>{defaultBoard[1][2]}</div>
                <div>{defaultBoard[1][3]}</div>
                <div>{defaultBoard[1][4]}</div>
            </div>
            <div className="row">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            <div className="row">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            <div className="row">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            <div className="row">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
            
        </div>
    )
}


export default WordleBoard
import "../styles/WordleKeyboard.css"

const WordleKey = (props) =>{
    return(
        <div className="keyboardButton" onClick={() =>{
            props.onKeyPressed(props.text)
        }}>{props.text}</div>
    )
}

const WordleKeyboard = (props) => {
    let letters = ['q', 'w','e','r','t','y','u','i','o','p',
                   'a','s','d','f','g','h','j','k','l',
                   'z','x','c','v','b','n','m'
                  ]
    let createKeys = () =>{
        return letters.map((letter, index)=>{
            return(<WordleKey key={index} onKeyPressed={props.onKeyPressed} text={letter} />)
        })

    }
    return(
        <div className={"keyboardContainer"}>
            {createKeys()}
        </div>
    )
}

export default WordleKeyboard
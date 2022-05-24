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
    
   /*
   let row1 = ['q', 'w','e','r','t','y','u','i','o','p'];
   let row2 = ['a','s','d','f','g','h','j','k','l'];
   let row3 = ['z','x','c','v','b','n','m'];

   let createKeys = (array) =>{
        return array.map((letter, index)=>{
            return(<WordleKey key={index} onKeyPressed={props.onKeyPressed} text={letter} />)
        })
    }
    return(
        <div className={"keyboardContainer"}>
            <div>{createKeys(row1)}</div>
            <div>{createKeys(row2)}</div>
            <div>{createKeys(row3)}</div>
            
        </div>
    )
    */
}

export default WordleKeyboard
import React from 'react'

export const Numbers = (props) => {
    //helper functions
    const makeArray = (endPoint, lastElement = null, initialElement = null)=>{
        const returnArray = new Array(endPoint+1)
        for(let i = 0; i < endPoint; i++){
            returnArray.push(i+1)
        }
        if(lastElement != null){
            returnArray.push(lastElement)
        }
        return returnArray
    }
    const handleClick = (buttonName) => {
        return buttonName
    }

    // variables
    const numArray = makeArray(9,0)

    const buttons = numArray.map((num,index)=> {
        return <button key={index} data-testid={`number-${num}`} onClick={handleClick} name={num.toString()}>{num}</button>
    })
    return (
        <div data-testid="button-box">
                {buttons}
        </div>
    )
}

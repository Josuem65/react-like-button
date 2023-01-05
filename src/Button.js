import React, { useState, useEffect } from 'react'

function Button() {
    const [count, setCount] = useState(0)
    const [likeText, setLikeText] = useState("likes")
    
    function handleClick() {
        setCount(count + 1)
    }
    
    useEffect(() => {
        count == 1 ? setLikeText('like') : setLikeText('likes')
    }, [count])

    return(
        <button className="like-btn" onClick={handleClick}><span className="front">{count} {likeText}</span></button>
        )
}

export default Button;
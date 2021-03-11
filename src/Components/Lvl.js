import React, {useEffect} from 'react';

const Lvl = (props) => {
    useEffect(() => {
        console.log(',reached')
        setTimeout(() => document.getElementById('lvl').classList.add('lvlAnimating'), 500)
    
        return function cleanUp() {
            document.getElementById('lvl').classList.remove('lvlAnimating')
        }
      }, [props.lvl])

    return (
        <h1 id='lvl'>Level {props.lvl}</h1>
    )
}

export default Lvl;
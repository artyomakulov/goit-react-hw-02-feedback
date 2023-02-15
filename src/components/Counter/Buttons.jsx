import React from 'react';


const Buttons = ({ increment }) => {
    return (
            <div className="Counter_buttons">
    <button type="button" onClick={increment}>good</button>
    <button type="button" onClick={increment}>neutral</button>
    <button type="button" onClick={increment}>bad</button>
</div>
    )
}

export default Buttons
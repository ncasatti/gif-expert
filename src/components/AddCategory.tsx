import React, { useState } from "react";

const AddCategory = ({onNewCategory}: {onNewCategory: Function}) => {

    const [inputValue, setInputValue] = useState('')

    const onTextChange = ( {target}: {target: HTMLInputElement} ) => setInputValue(target.value)
    
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()
        
        if (newInputValue.length < 1) return
        
        onNewCategory(newInputValue)

        setInputValue('')
    }
    


    return ( 
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onTextChange}
            />
        </form>
    );
}

export default AddCategory;
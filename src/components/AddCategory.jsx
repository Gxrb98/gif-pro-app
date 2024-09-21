import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState("")
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.length <= 1) return;
        onAddCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}


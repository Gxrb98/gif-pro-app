//yEB5fEEEHCv7HdWoT969YUYO9QRzxSnP api key

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GiftProAPP = () => {
    const [categories, setCategory] = useState([])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategory([newCategory, ...categories])
    }

    return (
        <>
            <h1>GiftProAPP</h1>
            <AddCategory onAddCategory={(value) => onAddCategory(value)} />
            {
                categories.map((category) => (
                    <GifGrid category={category} key={category} />
                ))
            }
        </>);
}

export default GiftProAPP;
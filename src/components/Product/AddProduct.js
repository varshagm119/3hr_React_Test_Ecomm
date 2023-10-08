import React, {useState} from "react";

const AddProduct = (props) => {

    const [myCategory, setMyCategory] = useState("Electronics");
    const [myId, setMyId] = useState("");
    const [myPrice, setMyPrice] = useState("");
    const [myDesc, setMyDesc] = useState("");
    const categoryChangeHandler = (event) => {
        setMyCategory(event.target.value);
    }
    const idChangeHandler = (event) => {
        setMyId(event.target.value);
    }
    const priceChangeHandler = (event) => {
        setMyPrice(event.target.value);
    }
    const descChangeHandler = (event) => {
        setMyDesc(event.target.value);
    }

    const addProductHandler = (event) => {
        event.preventDefault();
        props.onAddProduct(myId,myPrice,myDesc,myCategory);
        let allItems = [myId,myPrice,myDesc,myCategory];
        localStorage.setItem(myId, allItems);
    }

    return (
        <div>
            <form onSubmit={addProductHandler}>
                <label htmlFor="id">Product id </label>
                <input id="id" type="number" onChange={idChangeHandler} value={myId}/>
                <label htmlFor="price">Selling price </label>
                <input id="price" type="number" onChange={priceChangeHandler} value={myPrice}/>
                <label htmlFor="desc">Product name </label>
                <input id="desc" type="text" onChange={descChangeHandler} value={myDesc}/>
                <label htmlFor="category">Category </label>
                <select value={myCategory} onChange={categoryChangeHandler}>
                    <option value="Electronics">Electronics</option>
                    <option value="Food">Food</option>
                    <option value="SkinCare">SkinCare</option>
                </select>
                <button type="submit">Add product</button>
            </form>
        </div>
    );
};

export default AddProduct;
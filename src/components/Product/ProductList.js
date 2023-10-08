import React from "react";
import ElectronicsList from "./ElectronicsList";
import FoodList from "./FoodList";
import SkinCare from "./SkinCare";

const ProductList = (props) => {

    // const deleteProductHandler = (id) => {
    //     localStorage.removeItem(id);
    // }
    const electronicsArray = [];
    const foodArray = [];
    const skinCareArray = [];
    props.products.forEach(element => {
        if(element.category === "Electronics"){
            electronicsArray.push(element);
        }
        if(element.category === "Food"){
            foodArray.push(element);
        }
        if(element.category === "SkinCare"){
            skinCareArray.push(element);
        }
        
    });
    return (
        <div>
            <ElectronicsList lists={electronicsArray}/>
            <FoodList lists={foodArray}/>
            <SkinCare lists = {skinCareArray}/>
        </div>
    )
};

export default ProductList;
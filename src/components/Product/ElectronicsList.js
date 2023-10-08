
const ElectronicsList = (props) => {
    const deleteProductHandler = (id) => {
        
        document.getElementById(id).remove();
        localStorage.removeItem(id);
    }
    return (
        <div>
            <h2>Electronics Items: </h2>
            <div>
            <ul>
            {props.lists.map(product => (   
                    <li key={product.id} id={product.id}>
                        {product.price} {product.desc} {product.category}
                        <button  onClick={() => deleteProductHandler(product.id)}>delete Product</button>
                    </li>
                ))}
            </ul>
            </div>
           
        </div>
    )
}

export default ElectronicsList;
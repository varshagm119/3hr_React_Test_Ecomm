
const SkinCare = (props) => {
    const deleteProductHandler = (id) => {
        
        document.getElementById(id).remove();
        localStorage.removeItem(id);
    }
    return (
        <div>
            <h2>SkinCare Items: </h2>
            <ul>
            {props.lists.map(product => (   
                    <li key={product.id} id={product.id}>
                        {product.price} {product.desc} {product.category}
                        <button  onClick={() => deleteProductHandler(product.id)}>delete Product</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SkinCare;
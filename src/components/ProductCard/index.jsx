import "./index.css";

export function ProductCard(props){
const{image, category, title, price} = props.data;

    return (
        <div className="product-card">
        <img width="150" src={image} alt={title} />
        <div style={{ color: "#757575", fontSize: "14px", marginBottom: "8px" }}>{category}</div>
        <h4 style={{ margin: "8px 0", fontSize: "16px" }}>{title}</h4>
        <div className="price-button-container">
            <div className="price">${price}</div>
            <button>Add to Card</button>
        </div>
        </div>
    );
    }

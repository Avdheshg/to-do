
import "./ListItem.css";

function ImageGenerator(props) {
    return (
        <div className="image__container">
            <img src={props.imageURL} alt="generated" />
        </div>
    );
}

export default ImageGenerator;




















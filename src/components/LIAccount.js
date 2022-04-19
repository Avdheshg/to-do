
function LIAccount(props) {
         
    const color = props.color;
    const padding = props.padding;
    const backgroundColor = props.backgroundColor;

    return(
        <div style={ {color: `${color}`, padding: padding, backgroundColor: backgroundColor   } }>
        {props.text}
        <img src={`${props.imageURL}`} style={{height: "60px"}} alt="Account Image" />
    </div>
    );
}

export default LIAccount;











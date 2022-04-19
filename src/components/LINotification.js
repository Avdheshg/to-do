
function LINotification(props) {
        
    const color = props.color;
    const padding = props.padding;
    const backgroundColor = props.backgroundColor;

    return(
        <div style={ {color: `${color}`, padding: padding, backgroundColor: backgroundColor   } }>
        {props.text}
    </div>
    );
}

export default LINotification;





















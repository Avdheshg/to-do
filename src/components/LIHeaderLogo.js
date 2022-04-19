
function LIHeaderLogo(props) {
    const logoColor = props.logoColor;
    const padding = props.padding;
    const backgroundColor = props.backgroundColor;

    return (
        
        <div style={ {color: `${logoColor}`, padding: padding, backgroundColor: backgroundColor  } }>
            {props.logoText}
        </div>
    );
}
   
export default LIHeaderLogo;































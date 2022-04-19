import LIHeaderLogo from "./LIHeaderLogo";
import LIJobs from "./LIJobs";
import LIMessage from "./LIMessage";
import LINotification from "./LINotification";
import LIAccount from "./LIAccount";

function LIHeader(props) {
    
  return (
    <nav className="LIHeader" style={ {display: "flex", justifyContent: "space-between"} }>
      <LIHeaderLogo
        logoText={props.data[0].text}
        logoColor={props.data[0].color}
        padding={props.data[0].padding}
        backgroundColor={props.data[0].backgroundColor}
      ></LIHeaderLogo>

      <LIJobs        
        text={props.data[1].text}
        color={props.data[1].color}
        backgroundColor={props.data[1].backgroundColor}
        padding={props.data[1].padding}
      ></LIJobs>
      <LIMessage        
        text={props.data[2].text}
        color={props.data[2].color}
        backgroundColor={props.data[2].backgroundColor}
        padding={props.data[2].padding}
      ></LIMessage>
      <LINotification        
        text={props.data[3].text}
        color={props.data[3].color}
        backgroundColor={props.data[3].backgroundColor}
        padding={props.data[3].padding}
      ></LINotification>
      <LIAccount        
        text={props.data[4].text}
        color={props.data[4].color}
        backgroundColor={props.data[4].backgroundColor}
        padding={props.data[4].padding}
        imageURL={props.data[4].imageURL}
      ></LIAccount>
    </nav>
  );
}

export default LIHeader;

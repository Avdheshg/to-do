import "./App.css";
import ListItem from "./components/ListItem";
import ImageGenerator from "./components/ImageGenerator";
import ColoredDivs from "./components/ColoredDivs";
import LIHeader from "./components/LIHeader";

function App() {
  const listData = [
    {
      date: new Date(2022, 3, 13),
      name: "Practice react",
      tag: "Development",
    },
    {
      date: new Date(2002, 2, 1),
      name: "Eat Panner",
      tag: "Eating fun",
    },
    {
      date: new Date(2026, 6, 23),
      name: "Read Meditation",
      tag: "Self",
    },
    {
      date: new Date(1929, 3, 16),
      name: "Read DSA",
      tag: "Inter",
    },
    {
      date: new Date(2072, 3, 13),
      name: "Practice react-native",
      tag: "Development",
    },
  ];

  const divColors = [
    {
      name: "green",
      value: "green",
      padding: "2em",
    },
    {
      name: "blue",
      value: "blue",
      padding: "4em",
    },
    {
      name: "brown",
      value: "brown",
      padding: "5em",
    },
    {
      name: "blueviolet",
      value: "blueviolet",
      padding: "7em",
    },
  ];

  const LIHeaderData = [
    {
      text: "IN",
      color: "white",
      padding: "1em",
      backgroundColor: "#0072b1"
    },
    {
      text: "Jobs",
      color: "#343b36",
      padding: "1em",
      backgroundColor: "#5f396f"
    },
    {
      text: "Message",
      color: "#343b36",
      backgroundColor: "#1f996f",
      padding: "1em"
    },
    {
      text: "Notification",
      color: "#343b36",
      backgroundColor: "#5f966f",
      padding: "1em"
    },
    {
      text: "Account",
      color: "#343b36",
      backgroundColor: "#7f996f",
      padding: "1em",
      imageURL: "https://picsum.photos/200"
    },
    
  ]

  return (
    <div>


      <div>
        <LIHeader data={LIHeaderData} />
        
      </div>
      
      <div>
        <ColoredDivs
          name={divColors[0].name}
          value={divColors[0].name}
          padding={divColors[0].padding}
        ></ColoredDivs>
        <ColoredDivs
          name={divColors[1].name}
          value={divColors[1].name}
          padding={divColors[1].padding}
        ></ColoredDivs>
        <ColoredDivs
          name={divColors[2].name}
          value={divColors[2].name}
          padding={divColors[2].padding}
        ></ColoredDivs>
        <ColoredDivs
          name={divColors[3].name}
          value={divColors[3].name}
          padding={divColors[3].padding}
        ></ColoredDivs>
      </div>

      <div>
        <ImageGenerator imageURL={`https://picsum.photos/200`}></ImageGenerator>
      </div>

      <div>
        <ListItem
          date={listData[0].date}
          name={listData[0].name}
          tag={listData[0].tag}
        ></ListItem>
        <ListItem
          date={listData[1].date}
          name={listData[1].name}
          tag={listData[1].tag}
        ></ListItem>
        <ListItem
          date={listData[2].date}
          name={listData[2].name}
          tag={listData[2].tag}
        ></ListItem>
        <ListItem
          date={listData[3].date}
          name={listData[3].name}
          tag={listData[3].tag}
        ></ListItem>
        <ListItem
          date={listData[4].date}
          name={listData[4].name}
          tag={listData[4].tag}
        ></ListItem>
      </div>
    </div>
  );
}

export default App;

function ColoredDivs(props) {
  return (
    <div
      style={{
        backgroundColor: props.value,
        padding: props.padding,
        color: "white",
      }}
    >
      <h1>{props.name}</h1>
    </div>
  );
}

export default ColoredDivs;

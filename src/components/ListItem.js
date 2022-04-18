import "./ListItem.css";

function ListItem(props) {
  return (
    <section className="item-container">
      <div>
        <div className="item"> {props.date.toISOString()} </div>
        <div className="item"> {props.name} </div>
        <div className="item"> {props.tag} </div>
      </div>
    </section>
  );
}

export default ListItem;

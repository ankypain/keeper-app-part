import Avatar from "./Avatar";
import contacts from "../contactList";

function Card(props) {
  return (
    <div>
      <p>{props.id}</p> <Avatar img={props.img} />
      <p>{props.name}</p>
      <p>{props.mobile}</p>
    </div>
  );
}

export default Card;

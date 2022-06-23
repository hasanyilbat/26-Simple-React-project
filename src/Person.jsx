import Msg from "./Msg";
import "./Person.css";

const Person = ({ name, img, tel }) => {
  //! const { name, img, tel } = props;
  return (
    <div className="box">
      <h1>
        <Msg name={name} />
      </h1>
      <img src={img} alt="" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;

const User = (props) => {
  console.log("hellooo");
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <img src={props.photo}></img>
      <h3>{props.location}</h3>
      <h3>{props.contact}</h3>
    </div>
  );
};

export default User;

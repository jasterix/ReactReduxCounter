import { connect } from "react-redux";
import { increment, decrement, upFive } from "./action";

function Counter(props) {
  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
  };

  const upFive = () => {
    props.upFive();
  };

  return (
    <div>
      <h1>{props.currentCounter}</h1>
      <button onClick={increment}>increment +1</button>
      <button onClick={decrement}>decrement -1</button>
      <button onClick={upFive}>up +5</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentCounter: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement,
  upFive
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

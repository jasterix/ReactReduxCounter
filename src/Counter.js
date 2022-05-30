import { connect } from "react-redux";
import { increment, decrement } from "./action";

function Counter(props) {
  const increment = () => {
    props.increment();
  };

  const decrement = () => {
    props.decrement();
  };
  return (
    <div>
      <h1>{props.currentCounter}</h1>
      <button onClick={increment}>increment +1</button>
      <button onClick={decrement}>decrement -1</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  currentCounter: state.counter
});

const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import Counter from "./components/counter/Counter";
import InitialTemplate from "./components/initial-template/InitialTemplate";

const App = () => {
  return (
    <>
      <InitialTemplate display={<Counter />} />
    </>
  );
};

export default App;

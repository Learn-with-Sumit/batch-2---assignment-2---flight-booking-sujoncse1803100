import "./App.css";
import Header from "./componenets/Header";
import Book from "./componenets/Book";
import Table from "./componenets/Table";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <Book />
        <Table />
      </section>
    </Provider>
  );
}

export default App;

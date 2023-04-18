import { useContext } from "react";
import { contextApi } from "./context";
import SearchForm from "./SearchForm";
import News from "./News";
import Buttons from "./Buttons";

function App() {
  const { loading, errors } = useContext(contextApi);
  if (errors.show) {
    return <div className="error">{errors.msg}</div>;
  }
  return (
    <main>
      <SearchForm />
      <Buttons />
      {loading && <div className="loading"></div>}
      <News />
    </main>
  )
}

export default App

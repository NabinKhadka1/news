import { useContext } from "react";
import { contextApi } from "./context";

const Buttons = () => {
  const { handlePage, loading, page, nbPages } = useContext(contextApi);
  return (
    <section className="buttons">
      <button disabled={loading} onClick={() => handlePage("dec")}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button disabled={loading} onClick={() => handlePage("inc")}>
        Next
      </button>
    </section>
  );
};
export default Buttons;

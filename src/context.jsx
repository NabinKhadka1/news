import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer";

const contextApi = createContext();
const REACT_APP_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const defaultState = {
  loading: true,
  errors: { show: false, msg: "" },
  news: [],
  searchText: "react",
  page: 0,
  nbPages: 0
};
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSearch = (sText) => {
    dispatch({ type: "SEARCH", payload: sText });
  };
  const readMore = (value) => {
    dispatch({ type: "READMORE", payload: value });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const handlePage = (value) => {
    dispatch({ type: "HANDLEPage", payload: value });
  };

  const fetchNews = async () => {
    dispatch({ type: "LOADING", payload: true });
    try {
      const response = await axios.get(
        `${REACT_APP_ENDPOINT}${state.searchText}`
      );
      dispatch({
        type: "FETCHDATA",
        payload: { news: response.data.hits, nbPages: response.data.nbPages }
      });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERRORS", payload: { show: false, msg: "" } });
    } catch (error) {
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERRORS", payload: { show: true, msg: error.message } });
    }
  };
  useEffect(() => {
    fetchNews();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchText, state.page]);

  return (
    <contextApi.Provider
      value={{ ...state, handleSearch, readMore, remove, handlePage }}
    >
      {children}
    </contextApi.Provider>
  );
};
export { contextApi, ContextProvider };

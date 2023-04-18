const reducer = (state, action) => {
    if (action.type === "LOADING") {
      return { ...state, loading: action.payload };
    }
    if (action.type === "FETCHDATA") {
      return {
        ...state,
        news: action.payload.news,
        nbPages: action.payload.nbPages
      };
    }
    if (action.type === "ERRORS") {
      return { ...state, errors: action.payload };
    }
  
    if (action.type === "SEARCH") {
      return { ...state, searchText: action.payload, page: 0 };
    }
    if (action.type === "REMOVE") {
      const filteredNews = state.news.filter(
        (info) => info.objectID !== action.payload
      );
      return { ...state, news: filteredNews };
    }
    if (action.type === "READMORE") {
      window.open(action.payload, "_blank");
      return state;
    }
    if (action.type === "HANDLEPage") {
      if (action.payload === "inc") {
        if (state.page >= state.nbPages - 1) {
          return { ...state, page: 0 };
        }
        return { ...state, page: state.page + 1 };
      }
      if (action.payload === "dec") {
        if (state.page <= 0) {
          return { ...state, page: state.nbPages - 1 };
        }
        return { ...state, page: state.page - 1 };
      }
    }
    return state;
  };
  export default reducer;
  
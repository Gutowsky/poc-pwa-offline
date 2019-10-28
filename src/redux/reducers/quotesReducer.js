import CacheManager from "../../cache";
import types from "../types";
import _ from "lodash";

const cache = new CacheManager();

export const initialState = {
  quotes: []
};

const quotesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case types.ADD_PRODUCT:
      newState = {
        ...state,
        quotes: [..._.get(state, "quotes", []), action.product]
      };
      cache.writeData("quotes", newState);
      return newState;
    case types.REFRESH_CASE:
      console.log(`Case fetched from DB`);
      if (_.isNull(action.state)) {
        newState = {
          ...initialState,
        };
      } else {
        newState = {
          ...action.state,
        };
      }
      return newState;
    default:
      return state;
  }
};

export default quotesReducer;

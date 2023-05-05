import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

//Si tu aplicación es simple, puedes optar por createStore(), pero si tiene una mayor complejidad y requiere más configuraciones, entonces configureStore() puede ser una mejor opción.
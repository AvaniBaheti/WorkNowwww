import { createStore } from "redux";
import rootreducers from "./redux/reducers/indexmain"; 


const store =  createStore(
    rootreducers

);
export default store ;
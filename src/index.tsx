
import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./render";
import state from "./Redux/state";

renderEntireTree(state);

reportWebVitals();

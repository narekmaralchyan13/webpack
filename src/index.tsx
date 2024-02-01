import App from "./components/App";
import {createRoot} from "react-dom/client";

const root = document.getElementById('root')

if (!root){
    throw new Error('No find root container')
}
else{
    const container = createRoot(root)
    container.render(<App />)
}

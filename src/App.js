import './App.css';
import {Route, Routes} from "react-router-dom";
import PostPage from "./pages/PostPage/PostPage";
import PostCreationPage from "./pages/PostCreationPage/PostCreationPage";
import LayOut from "./components/LayOut/LayOut";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LayOut />}>
                    <Route index element={<PostPage />} />
                    <Route path="/post" element={<PostCreationPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

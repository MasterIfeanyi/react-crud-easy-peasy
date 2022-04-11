import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import Home from "./components/Home"
import { Posts, Create } from "./features"
import {Routes, Route} from "react-router-dom"
import BodyEditor from "./features/posts/BodyEditor"


function App() {
  return (
    <StoreProvider store={store}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Create />}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/edit/:id" element={<BodyEditor />}></Route>
          </Route>
        </Routes>
    </StoreProvider>
  );
}

export default App; 
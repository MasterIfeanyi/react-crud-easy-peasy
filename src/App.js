import React from "react";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import SharedLayout from "./components/SharedLayout"
import { Posts, Create } from "./features"
import {Routes, Route} from "react-router-dom"
import BodyEditor from "./features/posts/BodyEditor"
import Missing from "./components/Missing";


function App() {
  return (
    <StoreProvider store={store}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Create />}/>
            <Route path="posts">
              <Route index element={<Posts/>}/>
            </Route>
            <Route path="edit/:id" element={<BodyEditor />}></Route>
            <Route path="*" element={<Missing/>} />
          </Route>
        </Routes>
    </StoreProvider>
  );
}

export default App; 
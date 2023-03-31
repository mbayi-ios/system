import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { productInputs, userInputs } from "./formSource";

import Home from "./pages/home/Home";
import List from './pages/List/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}></Route>

          <Route path="login" element={<Login />}></Route>

          <Route path="users">
            <Route index element={<List />}></Route>
            <Route path=":userId" element={<Single />}></Route>
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            ></Route>
          </Route>

          <Route path="products">
            <Route index element={<List />}></Route>
            <Route path=":productId" element={<Single />}></Route>
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add  New Product" />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

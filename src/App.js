// - router(각 페이지)를 render해주는 용도
// - react-router-dom을 사용하면 브라우저를 새로고침하지 않음(깜빡거리지 않음)
// - <Route path="/" element={ <Home />}> == url 지정

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  } from "react-router-dom";
  import Detail from "./routes/Detail";
  import Home from "./routes/Home";
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={ <Home />} /> 
        <Route path="/movie/:id" element={ <Detail />} />
      </Route>
    )
  );
  
  function App() {
    return <RouterProvider router={router} />;
  }

  export default App;
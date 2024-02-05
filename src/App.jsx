import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";

export default function App(){
    return(
        <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    )
}


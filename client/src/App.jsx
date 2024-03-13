import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Transcript from "./pages/Transcript"
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="flex flex-col items-center">
        <Navbar></Navbar>
        <div className="w-2/3">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="transcript/:v" element={<Transcript />} />
            </Routes>
          </BrowserRouter>
        </div>
        {/*<Footer></Footer>*/}
      </div>
    </GoogleOAuthProvider>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Alert from "./components/layouts/Alert";
import { AlertProvider } from "./context/alert/AlertContext";
import { GithubProvider } from "./context/github/GithubContext";
import User from "./Pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<About />} /> 
          <Route path='/user/:login' element={<User />} /> 
          <Route path='/notfound' element={<NotFound />} /> 
          <Route path='/*' element={<NotFound />} /> 
        </Routes>
        
      </main>
      <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;

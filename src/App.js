import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
    <div className="container py-8">
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, AddCA, EditCA, CAList, Profile, Login } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/add" element={<AddCA />} />
          <Route path="/edit/:id" element={<EditCA />} />
          <Route path="/list" element={<CAList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

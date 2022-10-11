import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Student from './components/Student';
import { AddQueries } from './components/AddQueries';
import Queries from './components/Queries';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/student" element={<Student />}></Route>
          <Route exact path="/addQueries" element={<AddQueries />}></Route>
          <Route exact path="/queries" element={<Queries />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

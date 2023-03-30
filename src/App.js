//import './style.css';
import Search from './components/Search';
import MovieInfo from './components/MovieInfo';
import { Route, Routes } from 'react-router-dom';
import './css/main.css';


function App() {
  return (
    <Routes>
        <Route index element={<Search />} />
        <Route path='/movie-info/:id' element={<MovieInfo/>} />
    </Routes>
  );
}

export default App;

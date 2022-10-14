import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Search from '../Search/Search';
import MoviesPage from '../../pages/MoviesPage';
import BookmarkPage from '../../pages/BookmarkPage';
import TvSeriesPage from '../../pages/TvSeriesPage';
import SearchPage from '../../pages/SearchPage';
import ContentSelectedPage from '../../pages/ContentSelectedPage';
import './App.scss';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/tv-series' element={<TvSeriesPage />} />
        <Route path='/bookmark' element={<BookmarkPage />} />
        <Route path='/results/:query' element={<SearchPage />} />
        <Route path='/selected/:id' element={<ContentSelectedPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

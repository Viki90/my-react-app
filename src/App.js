import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetup';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}  exact/>
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;

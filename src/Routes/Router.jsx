
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.jsx';
import HomePage from '../HomePage/HomePage.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default Router;

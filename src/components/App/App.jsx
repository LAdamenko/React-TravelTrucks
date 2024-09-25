import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

export default function App() {
    return (
        <div>
            <Navigation />
            <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/catalog/:id" element={<CamperPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} /> */}
          {/* </Route> */}
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}
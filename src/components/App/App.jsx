import { Routes, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import CamperPage from '../../pages/CamperPage/CamperPage';
import CamperFeatures from '../CamperFeatures/CamperFeatures';
import CamperReviews from '../CamperReviews/CamperReviews';

export default function App() {
    return (
        <div>
            <Navigation />
            <Routes>
            <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campers/operations';
import { selectLoading, selectError } from '../../redux/campers/selectors';
import SearchForm from '../../components/SearchForm/SearchForm';
import CampersList from '../../components/CampersList/CampersList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import css from './CatalogPage.module.css';

export default function CatalogPage() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

    return (
        <div className={css.container}>
            <SearchForm />
            {isLoading && <Loader />}
            {isError && <Error />}
            <CampersList />
        </div>
    );
}
import { Suspense, useEffect } from 'react';
import { NavLink, useParams, Outlet, } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectError, selectCamperDetails } from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { GoStarFill } from "react-icons/go";
import { BsMap } from "react-icons/bs";
import css from './CamperPage.module.css'
import { findCamper } from '../../redux/campers/operations';
import OrderForm from '../../components/OrderForm/OrderForm';

export default function CamperPage() {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const camperDetails = useSelector(selectCamperDetails);
    const { camperId } = useParams();

    useEffect(() => {
        if (camperId) {
            dispatch(findCamper(camperId));
        }
    }, [camperId, dispatch]);

const {name, rating, location, price, gallery, description} = camperDetails || {};

    return (
        <div className={css.container}>
            <h2 className={css.camperName}>{name}</h2>
        <div className={css.line}>
            <p className={css.rating}><GoStarFill className={css.star}/>{rating}(2 Reviews)</p>
            <p><BsMap />{location}</p>
        </div>                
            <p className={css.camperName}>€{price},00</p>
        <div className={css.imgContainer}>
            {gallery && gallery.length > 0 && gallery.map((item) => (
            <img key={item.thumb} src={item.thumb} className={css.campImg} alt="camper image" />
            ))}
        </div>
            <p className={css.descr}>{description}</p>
             {isLoading && <Loader />}
            {isError && <Error />}
        
        <div className={css.addInfoContainer}>
        <ul className={css.addInfo}>
          <li className={css.addInfoItem}>
            <NavLink to="features">Features</NavLink>
          </li>
          <li className={css.addInfoItem}>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        </div>
        <hr /> 
        <Suspense fallback={<Loader />}>
            <Outlet />
        </Suspense>
        <OrderForm />
        </div>
    )
}
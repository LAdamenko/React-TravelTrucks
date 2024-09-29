import { useSelector } from 'react-redux';
import Categories from "../Categories/Categories";
import { selectCamperDetails } from '../../redux/campers/selectors';
import css from './CamperFeatures.module.css'

export default function CamperFeatures() {

    const camperDetails = useSelector(selectCamperDetails);
    return (
        <div className={css.container}>
            <Categories camper={camperDetails}/>
            <h3  className={css.tytle}>Vehicle details</h3>
            <hr /> 
            <div className={css.details}>
                <div className={css.detailRow}><p>Form</p>{camperDetails.form}</div>
                <div className={css.detailRow}><p>Length</p>{camperDetails.length}</div>
                <div className={css.detailRow}><p>Width</p>{camperDetails.width}</div>
                <div className={css.detailRow}><p>Height</p>{camperDetails.height}</div>
                <div className={css.detailRow}><p>Tank</p>{camperDetails.tank}</div>
                <div className={css.detailRow}><p>Consumption</p>{camperDetails.consumption}</div>
            </div>
        </div>
    )
}
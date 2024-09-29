import { useSelector } from 'react-redux';
import { selectCamperDetails } from '../../redux/campers/selectors';
import ReactStars from "react-rating-stars-component";
import { GoStarFill, GoStar} from "react-icons/go";
import css from './CamperReviews.module.css'

export default function CamperReviews() {
    const camperDetails = useSelector(selectCamperDetails);

    return (
        <div className={css.container}>
            <ul>
            {camperDetails.reviews.map((review, index) => (
        <li key={index}>
            <div>
                <p className={css.reviewer}>{review.reviewer_name}</p>
                        <ReactStars
                            count={5}
                            value={review.reviewer_rating}
                            size={16}
                            emptyIcon={<GoStar />}
                            filledIcon={<GoStarFill />} 
                            activeColor="#ffc531"
                            edit={false} 
                        />
                        </div>
                        <p className={css.comment}>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
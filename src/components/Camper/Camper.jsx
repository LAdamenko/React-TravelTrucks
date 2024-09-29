import { useNavigate } from "react-router-dom";
import { GoStarFill } from "react-icons/go";
import { BsMap, BsSuitHeart } from "react-icons/bs";

import css from './Camper.module.css';
import Categories from "../Categories/Categories";

export default function Camper({data}) {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/catalog/${id}`);
      };

    return (
        <div className={css.container}>
          <img
            className={css.card}
            src={data.gallery[0].thumb}
            alt="camper image"
           />
           <div>
            <div className={css.cardTytle}>
                <h2>{data.name}</h2>
                <p>€{data.price},00 <span><BsSuitHeart className={css.heart}/></span></p>
            </div>
            <div className={css.line}>
            <p className={css.rating}><GoStarFill className={css.star}/>{data.rating}({data.reviews.length} Reviews)</p>
            <p><BsMap />{data.location}</p>
            </div>
            <p className={css.descr}>{data.description.slice(0,41)}...</p>
            <Categories camper={data}/>
            <button onClick={() => handleClick(data.id)}>Show more</button>
           </div>
        </div>
    )
}
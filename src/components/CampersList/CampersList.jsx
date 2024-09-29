import { useSelector } from 'react-redux';
import { selectFilteredCampers } from '../../redux/campers/selectors';
import Camper from '../Camper/Camper';
import css from './CampersList.module.css';

export default function CampersList () {
    const visibleCampers = useSelector(selectFilteredCampers);

    return (
        <div>
        <ul className={css.list}>
          {visibleCampers.map((camper) => (
            <li className={css.item} key={camper.id}>
              <Camper data={camper} />
            </li>
          ))}
        </ul>
        </div>
      );
}
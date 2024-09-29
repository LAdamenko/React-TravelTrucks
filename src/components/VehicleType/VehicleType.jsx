import { BsGrid1X2, BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import css from './VehicleType.module.css'

export default function VehicleType() {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <BsGrid1X2 width="32" height="32"/><span>Van</span>
            </div>
            <div className={css.card}>
                <BsGrid width="32" height="32"/><span>Fully</span><span>Integrated</span>
            </div>
            <div className={css.card}>
                <BsGrid3X3Gap width="32" height="32"/><span>Alcove</span>
            </div>
        </div>
    )
}
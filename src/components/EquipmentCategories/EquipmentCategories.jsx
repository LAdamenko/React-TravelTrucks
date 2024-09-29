import {BsDiagram3, BsWind, BsCupHot, BsUiRadios, BsDroplet } from "react-icons/bs";
import icons from '../../images/icons.svg';
import css from './EquipmentCategories.module.css'

export default function EquipmentCategories() {
    return (
    <div>
        <div className={css.card}>
            <BsWind width="32" height="28"/><span>AC</span>
        </div>
    </div>
    )
}
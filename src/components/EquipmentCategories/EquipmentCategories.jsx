import {BsDiagram3, BsWind, BsCupHot, BsDroplet } from "react-icons/bs";
import icons from '../../images/icons.svg';
import css from './EquipmentCategories.module.css'

export default function EquipmentCategories() {
    return (
    <div className={css.container}>
        <div className={css.card}>
            <BsWind width="32" height="28"/><span>AC</span>
        </div>
        <div className={css.card}>
            <BsDiagram3 width="32" height="32"/><span>Automatic</span>
        </div>
        <div className={css.card}>
            <BsCupHot width="32" height="32"/><span>Kitchen</span>
        </div>
        <div className={css.card}>
        <svg  width="20" height="20"><use href={`${icons}#icon-tv`}></use></svg>
        <span>TV</span>
        </div>
        <div className={css.card}>
            <BsDroplet width="32" height="32"/><span>Buthroom</span>
        </div>
    </div>
    )
}
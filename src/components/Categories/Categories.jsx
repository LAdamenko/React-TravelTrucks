import {BsDiagram3, BsWind, BsCupHot, BsUiRadios, BsDroplet } from "react-icons/bs";
import icons from '../../images/icons.svg';
import css from './Categories.module.css';

export default function Categories({camper}) {

    const categoriesIcons = {
        transmission: <BsDiagram3 width="20" height="20"/>,
        engine: <svg  width="20" height="20"><use href={`${icons}#icon-gas`}></use></svg>,
        AC: <BsWind width="20" height="20"/>,
        bathroom: <BsDroplet width="16" height="20"/>,
        kitchen: <BsCupHot width="20" height="20"/>,
        TV: <svg  width="20" height="20"><use href={`${icons}#icon-tv`}></use></svg>,
        radio: <BsUiRadios width="19" height="18"/>,
    }
    const categoriesData = {
        transmission: camper.transmission,
        engine: camper.engine,
        AC: camper.AC,
        bathroom: camper.bathroom,
        kitchen: camper.kitchen,
        TV: camper.TV,
        radio: camper.radio,
    }

    return (
        <div className={css.container}>
            <div className={css.feature}>
            {categoriesIcons.transmission}
            <span>{categoriesData.transmission}</span>    
            </div>
            <div className={css.feature}>
            {categoriesIcons.engine}
            <span>{categoriesData.engine}</span>   
            </div>
            {Object.keys(categoriesData).filter(key => camper[key] === true).map((key) => {
                    return (          
                   <div key={key} className={css.feature}>
                        {categoriesIcons[key]}
                        <span>{[key]}</span> 
                    </div> 
                )
            })}
            <div>

            </div>
        </div>
    );

}
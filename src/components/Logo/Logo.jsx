import icons from '../../images/icons.svg';
import css from './Logo.module.css'

export default function Logo() {
  return (
    <div>
            <svg className={css.travel} width="13" height="15">
              <use href={`${icons}#icon-t`}></use>
            </svg>
            <svg className={css.travel} width="8" height="12">
              <use href={`${icons}#icon-r`}></use>
            </svg>
            <svg className={css.travel} width="11" height="12">
              <use href={`${icons}#icon-a`}></use>
            </svg>
            <svg className={css.travel} width="13" height="12">
              <use href={`${icons}#icon-v`}></use>
            </svg>
            <svg className={css.travel} width="12" height="12">
              <use href={`${icons}#icon-e`}></use>
            </svg>
            <svg className={css.travel} width="5" height="15">
              <use href={`${icons}#icon-l`}></use>
            </svg>
            <svg className={css.trucks} width="14" height="15">
              <use href={`${icons}#icon-t1`}></use>
            </svg>
            <svg className={css.trucks} width="9" height="12">
              <use href={`${icons}#icon-r1`}></use>
            </svg>
            <svg className={css.trucks} width="12" height="12">
              <use href={`${icons}#icon-u`}></use>
            </svg>
            <svg className={css.trucks} width="12" height="12">
              <use href={`${icons}#icon-c`}></use>
            </svg>
            <svg className={css.trucks} width="13" height="15">
              <use href={`${icons}#icon-k`}></use>
            </svg>
            <svg className={css.trucks} width="12" height="12">
              <use href={`${icons}#icon-s`}></use>
            </svg>
    </div>

  );
}
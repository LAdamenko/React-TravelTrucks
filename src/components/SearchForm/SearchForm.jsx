import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from 'react-redux';
import { selectLocationFilter } from "../../redux/filters/selectors";
import css from './SearchForm.module.css'
import EquipmentCategories from "../EquipmentCategories/EquipmentCategories";

export default function SearchForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        console.log('Submitted values:', values);
        if (values && values.location) {
        dispatch(selectLocationFilter(values.location))
    } else {
        console.error('Location filter is undefined or empty');
      }
        actions.resetForm();
    }
        const locateFieldId = useId();  

    return (
        <Formik initialValues={{location: ""}} onSubmit={handleSubmit}>
            <Form className={css.container}>
            <label htmlFor={locateFieldId}>Location</label>
        <Field as="select" name="location" id={locateFieldId} className={css.location}>
          <option value="Ukraine, Kyiv">Kyiv, Ukraine</option>
          <option value="Ukraine, Poltava">Poltava, Ukraine</option>
          <option value="Ukraine, Dnipro">Dnipro, Ukraine</option>
          <option value="Ukraine, Odesa">Odesa, Ukraine</option>
          <option value="Ukraine, Kharkiv">Kharkiv, Ukraine</option>
          <option value="Ukraine, Sumy">Sumy, Ukraine</option>
          <option value="Ukraine, DLviv">Lviv, Ukraine</option>
        </Field>
        <h3 className={css.text}>Filters</h3>
        <h4 className={css.filterTytle}>Vehicle equipment</h4>
        <hr /> 
        <EquipmentCategories />
        <button type="submit">Search</button>
            </Form>
        </Formik>
    )
}
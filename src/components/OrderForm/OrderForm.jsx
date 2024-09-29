import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from './OrderForm.module.css';

export default function OrderForm() {
    const initialValues = {
        name: "",
        email: "",
        date: "",
        comment: "",
    };
    const handleSubmit = (values, actions) => {
        console.log(values);
        toast.success("Congratulations, you have booked a camper.", {
            position: "bottom-right",
          });
        actions.resetForm();
    };
    return (
        <div className={css.container}>
            <h2 className={css.tytle}>Book your campervan now</h2>
            <p className={css.text}>Stay connected! We are always ready to help you.</p>
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <Field className={css.field} name="name" placeholder="Name*"/>
                    <Field className={css.field} type="email" name="email" placeholder="Email*" />
                    <Field className={css.field} type="date" name="bookingDate" placeholder="Booking date*" />
                    <input type="text" placeholder="Comment" className={css.comment}/>
                    <button className={css.btn} type="submit">Send</button>
                <Toaster />
                </Form>
            </Formik>
        </div>
    )
}
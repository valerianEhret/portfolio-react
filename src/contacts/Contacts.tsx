import React from 'react'
import styles from './Contacts.module.scss'
import Title from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";
import { useFormik } from 'formik';
import axios from "axios";
import {api} from "../api/api";


type FormikErrorType = {
    name?: string
    email?: string
    message?: boolean
}


export const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },

        onSubmit: values => {
            // alert(`${values.name} ${values.email} ${values.message}`);
            api.sendMessage(values.name, values.email, values.message)
                .then(() => {
                    alert('your message has been sent');
                })
            // formik.resetForm();
        }

    });


    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.container}>
                <a id={"#contacts"}></a>
                <Title title={'Contacts'} />
                <Fade>
                    <form onSubmit={formik.handleSubmit}  className={styles.form}>
                        <input id='name' type='text' {...formik.getFieldProps('name')} className={styles.formArea} placeholder={'Name'} />
                        <input id='email' type='email' {...formik.getFieldProps('email')} className={styles.formArea} placeholder={'E-Mail'} />
                        <textarea id='message' {...formik.getFieldProps('message')} className={styles.messageArea} placeholder={'Message'} />
                        <button type='submit'>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts
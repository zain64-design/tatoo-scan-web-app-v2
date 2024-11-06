import React from 'react';
import * as Yup from 'yup';
import CustomForm from '../CustomForm/CustomForm';

const CommentForm = () => {

    const fields = [
        {
            label: 'Full Name',
            name: 'name',
            type: 'text',
            placeholder: 'Full Name',
            colProps: { xs:12, sm:12, md:12, lg:6, xl:6, xxl:6 }
        },
        {
            label: 'Email Address',
            name: 'email',
            type: 'email',
            placeholder: 'Email Address',
            colProps: { xs:12, sm:12, md:12, lg:6, xl:6, xxl:6 }
        },
        {
            label: 'Your Comment',
            name: 'message',
            type: 'textarea',
            placeholder: 'Type Your Message',
            colProps: { xs:12, sm:12, md:12, lg:12, xl:12, xxl:12 },
            rows: 7
        }
    ]

    const onSubmit = values => {
        console.log('Submitting form', values);
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required')
    });

  return (
    <>
    <CustomForm fields={fields} onSubmit={onSubmit} validationSchema={validationSchema} buttonText='comment'/>
    </>
  )
}

export default CommentForm
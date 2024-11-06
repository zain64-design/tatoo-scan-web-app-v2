import React, { useId } from 'react';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import { MdError } from "react-icons/md";
import '../../assets/scss/components/forms/customForm.scss';

const CustomForm = ({ fields, onSubmit, validationSchema, buttonText }) => {

    const id = useId();

    const initialValues = fields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    // console.log('visited', formik.touched);

    return (
        <>
            <div className="form-main">
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        {fields?.map((field, index) => (
                            <Col {...field.colProps} key={index}>
                                <div className="input-field">
                                    <Form.Label className="fm-lb" htmlFor={id + field.name}>{field.label}</Form.Label>
                                    {field.type === 'textarea' ? (
                                        <Form.Control
                                            as="textarea"
                                            className="txt-ctl"
                                            id={id + field.name}
                                            placeholder={field.placeholder}
                                            name={field.name}
                                            rows={field.rows || 3}
                                            autoComplete='off'
                                            onChange={formik.handleChange}
                                            value={formik.values[field.name]}
                                            onBlur={formik.handleBlur}
                                        />
                                    ) : (
                                        <Form.Control
                                            type={field.type}
                                            className="inp-ctl"
                                            id={id + field.name}
                                            placeholder={field.placeholder}
                                            name={field.name}
                                            autoComplete='off'
                                            onChange={formik.handleChange}
                                            value={formik.values[field.name]}
                                            onBlur={formik.handleBlur}
                                        />
                                    )}
                                    {formik.touched[field.name] && formik.errors[field.name] ? <small>{formik.errors[field.name]}<MdError /></small> : null}
                                </div>
                            </Col>
                        ))}
                        <Col>
                            <div className="input-field">
                                <button type="submit" className="btn submit-btn hvr-bounce-to-right">{buttonText}</button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default CustomForm
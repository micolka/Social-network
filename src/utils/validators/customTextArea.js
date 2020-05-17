import React from "react";
import styles from "./customTextArea.module.css";
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return <div className={styles.customTextArea + " " + (hasError ? styles.error : '')}>
        {props.children}
        <div>
            {hasError && <span>{error}</span>}
        </div>
    </div>
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps} /></FormControl>
}

export const createCustomField = (placeholder, name, component, validate, className, props = {}) => {
    return <div>
    <Field placeholder={placeholder} name={name} component={component}
           validate={validate} className={className} {...props}/>
    </div>
}
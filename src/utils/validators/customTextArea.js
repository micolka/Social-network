import React from "react";
import styles from "./customTextArea.module.css";

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={styles.customTextArea + " " + (hasError ? styles.error : '')}>
        {props.children}
        <div>
            {hasError && <span>{meta.error}</span>}
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
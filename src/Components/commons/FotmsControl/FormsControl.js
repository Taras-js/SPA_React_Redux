import React from 'react';
import s from './FomsControls.module.css';

const FormsControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}
import React, {} from 'react';
import {Field, reduxForm} from "redux-form";
import {reqField} from "../../../utils/validators";
import s from './Login.module.css'
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {Input} from "../../commons/FotmsControl/FormsControl";
import {login} from "../../../Redux/auth-reducer";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[reqField]}
                       placeholder={'Email'}
                       name={'email'}
                       component={Input}/>
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[reqField]}/>
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMy'}
                       component={Input}
                />remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    );
}

const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {login})(Login);
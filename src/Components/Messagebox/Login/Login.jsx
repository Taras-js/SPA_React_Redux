import React, {} from 'react';
import {Field, reduxForm} from "redux-form";


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div className='message'>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}

const LoginForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder={'Login'} name={'login'} component={'input'}/>
                    </div>
                    <div>
                        <Field placeholder={'Password'} name={'Password'} component={'input'}/>
                    </div>
                    <div>
                        <Field type={'checkbox'} name={'checkbox'} component={'input'}/>remember me
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
    );
}
const LoginReduxForm = reduxForm ({form: 'login' })(LoginForm)
export default Login;
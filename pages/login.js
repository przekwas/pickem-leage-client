import Layout from '../components/layout';
import useForm from '../utils/hooks/useForm';

const Login = () => {

    const submitForm = async (e) => {
        console.log(values);
    }

    const { values, handleChange, handleSubmit } = useForm(submitForm);

    return (
        <Layout>
            <section className='section'>
                <div className='container box'>
                    <div className='field'>
                        <label className='label'>Username</label>
                        <div className='control has-icons-left'>
                            <input
                                value={values.username || ''}
                                onChange={handleChange}
                                name='username'
                                className='input'
                                type='text'
                                placeholder='sup4h1337killaCaP-A-CoP' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Password</label>
                        <div className='control has-icons-left'>
                            <input
                                value={values.password || ''}
                                onChange={handleChange}
                                name='password'
                                className='input'
                                type='password'
                                placeholder='dickbutt6969xx' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div className="control">
                        <button
                            onClick={handleSubmit}
                            className="button is-primary is-fullwidth">Login</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;
import Layout from '../components/layout';
import useForm from '../utils/hooks/useForm';

const Register = () => {

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
                        <p className="help">This will be your display name</p>
                    </div>
                    <div className='field'>
                        <label className='label'>Email</label>
                        <div className='control has-icons-left'>
                            <input
                                value={values.email || ''}
                                onChange={handleChange}
                                name='email'
                                className='input'
                                type='email'
                                placeholder='solid@snake.com' />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <p className="help">I will totally sell your data</p>
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
                        <p className="help">I didn't spend a lot on security so <strike>don't</strike> <i>do</i> re-use your bank password</p>
                    </div>
                    <div className="control">
                        <button
                            onClick={handleSubmit}
                            className="button is-primary is-fullwidth">Submit Yourself</button>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Register;

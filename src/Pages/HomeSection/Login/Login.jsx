import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate()
        
        let signInError;

        if(user || gUser) {
            console.log(user);
            navigate('/')
        }

        if( gLoading || loading) {
            return <Loading/>
        }

        if(error || gError) {
            signInError= <small className='text-red-500 my-2 text-center'>{error?.message || gError?.message}</small>
        }

        const onSubmit = data => {
            console.log(data)
            signInWithEmailAndPassword(data.email, data.password)
        };
    return (
        <div className='flex justify-center items-center h-screen'>
           <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="text-2xl text-center font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                            {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <small className='text-center text-sm my-2'>Do not have an account? <Link to='/signup' className='text-primary font-bold ml-3'> Create a new account</Link></small>
                <div class="divider">OR</div>
                <button
                onClick={() => signInWithGoogle()}
                 class="btn btn-outline"
                 ><FcGoogle className='text-4xl'
                 ></FcGoogle>
                 <p>Continue with Google</p>
                 </button>
            </div>
            </div>
        </div>
    );
};

export default Login;
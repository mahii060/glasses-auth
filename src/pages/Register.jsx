import { useContext } from "react";
import { AuthContext } from "../utilities";
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error, error.message);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    {/* <p className="py-6">
                        Join our community today and unlock exclusive benefits! Register to access personalized content, stay updated with the latest news, and connect with like-minded individuals. {"Don't"} miss out—register now!
                    </p> */}

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        {/* Name field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" className="input input-bordered"
                                {...register("fullName", { required: true })}
                            />
                            {errors.fullName && <span className="text-red-600">*This field is required</span>}
                        </div>
                        {/* Email field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="example@gmial.com" className="input input-bordered"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">*This field is required</span>}
                        </div>
                        {/* Password field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-600">*This field is required</span>}

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { Button , Card} from 'antd';
import { registerUser } from '../redux/features/authSlice';
import './register.css';  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginValidation = yup.object({
        email: yup
            .string()
            .email("Invalid email")
            .required("Email is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "Password length must be greater than 8"),
    });

    const { handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(loginValidation),
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values) => {
        try {
            await dispatch(registerUser({
                email: values.email,
                password: values.password
            }));
            navigate("/");
            toast("Registered successfullly");            
           
        } catch (error) {
            
        }
    };

    return (
        <div className="register-container">
            
            <Card 
               
                bordered={false}
                className="register-card"
            >
                <h2 style={{justifyContent:"center"}}>User Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="email"
                                placeholder="Email"
                                {...field}
                            />
                        )}
                    />
                    <p>{errors.email?.message}</p>

                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <input
                                type="password"
                                placeholder="Password"
                                {...field}
                            />
                        )}
                    />
                    <p>{errors.password?.message}</p>

                    <Button
                        className="customBlueBtn"
                        htmlType="submit"
                    >Register</Button>
                </form>
            </Card>
            <ToastContainer/>
        </div>
    );
};
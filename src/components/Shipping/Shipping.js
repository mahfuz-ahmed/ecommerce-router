import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth();
    const onSubmit = data =>
    {
        console.log(data);
    } 
    return (
        <div>
            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
            <input placeholder='Email' defaultValue={user.email} {...register("email", { required: true })} />

            <input placeholder='Address' defaultValue="" {...register("address")} />
            <input placeholder='Phone' defaultValue="" {...register("Phone")} />



           
            {errors.email && <span style={{color:'red'}}>This field is required</span>}
            
            <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
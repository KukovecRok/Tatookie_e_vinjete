import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios';

type Inputs = {
    registrska_stevilka: string,
    cestninski_razred: string,
    tip: string,
    model_avta: string,
    znamka_avta: string
};


const FormaZaNakup = (nastavi : (vhod : string) => void) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        axios.post("http://localhost:8081/vinjete/nakup", data).then((response) => nastavi(response.data)).catch()
    };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="MBUR535" {...register("registrska_stevilka", { required: true })} />
            <input defaultValue="B2" {...register("cestninski_razred", { required: true })} />
            <input defaultValue="mesecna" {...register("tip", { required: true })} />
            <input defaultValue="Trafic" {...register("model_avta", { required: true })} />
            <input defaultValue="Renault" {...register("znamka_avta", { required: true })} />

    {errors.registrska_stevilka && <span>This field is required</span>}
    {errors.cestninski_razred && <span>This field is required</span>}
    {errors.tip && <span>This field is required</span>}
    {errors.model_avta && <span>This field is required</span>}
    {errors.znamka_avta && <span>This field is required</span>}

    <input type="submit" />
        </form>
    );
    };
export default FormaZaNakup
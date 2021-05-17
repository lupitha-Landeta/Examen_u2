import React from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues : props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    setValue('notas', props.currentUser.notas);
    setValue('direccion', props.currentUser.direccion);

    const onsubmit = (data, e) => {
        console.log(data)

        data.id = props.currentUser.id        
        props.updateUser(props.currentUser.id, data)
        
        //Limpiar caja
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onsubmit)}>
            <label>Nombre:</label>
            <input type="text" name="name"
            ref={
                register({
                    required: {
                        value: true,
                        message: 'Campo obligatorio'
                    },
                })
            }/>
            <span className="text-danger">
                    {errors?.name?.message}
            </span>

            <label>Telefono:</label>
            <input type="text" name="username"
            ref={
                register({
                    required: {
                        value: true,
                        message: 'Campo obligatorio'
                    },
                })
            }/>
            <div>
                <span className="text-danger">
                    {errors?.username?.message}
                </span>
            </div>
            <label>Notas:</label>
                <input type="text" name="notas"
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                    })
                }/>    
                <span className="text-danger">
                        {errors?.name?.message}
                </span>
                <label>Dirección:</label>
                <input type="text" name="direccion"
                ref={
                    register({
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                    })
                }/>    
                <span className="text-danger">
                        {errors?.name?.message}
                </span>
            <button>Editar Contacto</button>
        </form>
     );
}
 
export default EditUserForm;
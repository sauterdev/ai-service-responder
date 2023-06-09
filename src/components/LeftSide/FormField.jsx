import React from 'react'
import { useForm } from 'react-hook-form'

const FormField = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    console.log(watch('example')) // watch input value by passing the name of it

    return (
        <div className="w-full max-w-xs m-auto">
            {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
            <form
                className="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* register your input into the hook by invoking the "register" function */}
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Enter Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        defaultValue=""
                        {...register('name')}
                    />
                </div>
                {/* include validation with required or other standard HTML validation rules */}
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Enter Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="email"
                        placeholder="abc@xyz.com"
                        defaultValue=""
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="accountNum"
                    >
                        Enter Account
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="accountNum"
                        placeholder="1234-5678"
                        defaultValue=""
                        {...register('accountNum', { required: true })}
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="serviceRequest"
                    >
                        Enter Email
                    </label>
                    <textarea
                        rows="10"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h- focus:outline-none focus:shadow-outline"
                        type="text"
                        name="serviceRequest"
                        placeholder="Dont enter any account/personal information in this request"
                        defaultValue=""
                        {...register('serviceRequest', { required: true })}
                    ></textarea>
                </div>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {' '}
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormField
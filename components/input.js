import { useFormContext } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"

export const Input = ({ label, type, id, placeholder }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext()

    function findInputError(errors, name) {
        const filtered = Object.keys(errors)
            .filter(key => key.includes(name))
            .reduce((cur, key) => {
                return Object.assign(cur, { error: errors[key] })
            }, {})
        return filtered
    }
    function isFormInvalid(error) {
        if (Object.keys(error).length > 0) {
            return true
        }
        return false
    }

    const inputError = findInputError(errors, label)
    const isInvalid = isFormInvalid(inputError)

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className="font-semibold capitalize">
                    {label}
                </label>
                <AnimatePresence mode="wait" initial={false}>
                    {isInvalid && (
                        <InputError
                            message={inputError.error.message}
                            key={inputError.error.message}
                        />
                    )}
                </AnimatePresence>
            </div>
            <input
                id={id}
                type={type}
                className="w-full p-2.5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                placeholder={placeholder}
                {...register(label, {
                    required: {
                        value: true,
                        message: 'Campo requerido',
                    },
                })}
            />
        </div>
    )
}

const InputError = ({ message }) => {
    return (
        <motion.p
            className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
            {...framer_error}
        >
            {message}
        </motion.p>
    )
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}
import { type SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const expenseSchema = z.object({
    amount: z.number(),
    trxAmount: z.number()
});

type Inputs = {
    amount: number,
    trxAmount: number
}
export default function AddExpense() {

    const  { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({ 
        resolver: zodResolver(expenseSchema),
     });

    const expesnseHandler: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <div className=" flex items-center justify-center min-h-screen">
            <form onSubmit={ handleSubmit(expesnseHandler) } className="w-[40%] bg-white rounded-lg shadow-lg text-center p-6">

                <div className="w-full flex items-center justify-center mb-6">
                    <div className=" w-12 h-12 bg-green-500 flex items-center justify-center rounded-full">
                        <span className=" text-2xl font-bold">L</span>
                    </div>
                </div>

                <div className=" text-gray-600">
                    <p>louisgituhi@gmail.com</p>
                </div>

                <div className="text-left mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="number">Amount</label>
                    <input {...register("amount") } className="w-full p-2 border rounded" id="number" name="number" />
                    {errors.amount?.message && <p className="text-red-600">{errors.amount?.message}</p>}
                </div>

                <div className="text-left mb-4">
                    <label className="block mb-2 text-sm font-medium" htmlFor="number">Transaction amount</label>
                    <input {...register("trxAmount") } className="w-full p-2 border rounded" name="number" />
                    {errors.trxAmount?.message && <p className="text-red-600">{errors.trxAmount?.message}</p>}
                </div>

                <button type="submit" className=" w-full bg-green-500 p-2 rounded-lg cursor-pointer">Add</button>

            </form>
        </div>
    )
}
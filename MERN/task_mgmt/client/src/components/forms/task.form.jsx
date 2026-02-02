import { FaAsterisk } from "react-icons/fa";


const AddEditTask = () =>{
    return(
    <div>
        <div>
            <form>
                <div className="flex flex-col gap-1">
                    <div className="flex">
                    <label
                    htmlFor="title"
                    className="text-lg"
                    placeholder="crypto assignment"
                    id="title">
                        Title
                    </label>
                    
                    <FaAsterisk size={12} className="text-red-500"/></div>
                    <input 
                    name="title" 
                    id="title" 
                    className="py-2.5 px-2 bg-slate-50 border border-blue-200 text-lg text-slate-950"/>
                
                </div>
            </form>
        </div>
    </div>
    )

}

export default AddEditTask
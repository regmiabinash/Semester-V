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
                    className="py-2.5 px-2 bg-slate-50 border border-blue-200 text-lg text-slate-950 rounded-md focus:outline-blue-400"/>
                
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex">
                    <label
                    htmlFor="content"
                    className="text-lg"
                    placeholder="SM assignment"
                    id="title">
                        Content
                    </label>
                    
                    <FaAsterisk size={12} className="text-red-500"/></div>
                    <textarea 
                    name="content" 
                    id="content" 
                    placeholder="Task description"
                    className="py-2.5 px-2 bg-slate-50 border border-blue-200 text-lg text-slate-950 rounded-md focus:outline-blue-400"/>
                
                </div>
                <div className="flex flex-col">
                    <label htmlFor="priority" className="py-2.5 text-lg font-bold border border-blue-200 focus:outline-blue-400">Priority</label>
                    <select 
                    defaultValue={"low"}
                    name="priority"
                    id="priority"
                    className="py-2.5 px-2 rounded-md text-lg font-bold border border-blue-200 focus:outline-blue-400">
                        <option value={'high'}>High</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'low'}>Low</option>
                    </select>
                </div>
            </form>
        </div>
    </div>
    )

}

export default AddEditTask
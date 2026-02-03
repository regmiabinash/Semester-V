import React, {useState} from "react";
import { TbAsterisk } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";


const initialState = {
    title: '',
    text: '',
    priority: 'low',
    pinned: false,
    user: ''
}
const AddEditTask = ({ onClose }) => {
    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState({})

    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }))
    }

    const validate = () => {
        const errs = {}
        if (!form.title || form.title.trim().length < 7) errs.title = 'Title must be at least 7 characters.'
        if (!form.text || form.text.trim().length < 12) errs.text = 'Text must be at least 12 characters.'
        if (!['high', 'medium', 'low'].includes(form.priority)) errs.priority = 'Invalid priority.'
        if (!form.user || form.user.trim().length === 0) errs.user = 'User id is required.'
        return errs
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }


  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      
      {/* Modal box */}
      <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-md">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-slate-100 p-2 rounded-md"
        >
          <IoMdClose size={22} className="text-slate-950" />
        </button>

        <form className="flex flex-col gap-6">

          {/* Title */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <label className="text-xl font-bold" htmlFor="title">
                Title
              </label>
              <TbAsterisk size={12} className="text-red-500" />
            </div>

            <input
              className="border border-blue-200 px-2 py-2.5 rounded-md text-lg bg-slate-50 text-slate-950"
              id="title"
              name="title"
              placeholder="Cryptography Assignment"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold" htmlFor="description">
              Description
            </label>

            <textarea
              className="border border-gray-400 px-2 py-2.5 rounded-md text-lg bg-slate-50 text-slate-950"
              id="description"
              name="description"
              placeholder="Task description"
              rows={4}
            />
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold" htmlFor="priority">
              Priority
            </label>

            <select
              id="priority"
              defaultValue="low"
              className="border border-blue-200 px-2 py-2.5 rounded-md focus:outline-blue-400 text-lg font-bold"
              required
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 py-3 text-white font-bold rounded-md text-xl hover:bg-blue-600"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEditTask;
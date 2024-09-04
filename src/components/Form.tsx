import { useAppDispatch, useAppSelector } from "../hook"
import { setInputValue } from "../store/formSlice";
import { CiSearch } from "react-icons/ci";

const Form = () => {
  const dispatch = useAppDispatch()
  const { inputValue } = useAppSelector(state => state.form)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <div className="relative">
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search..."
          className="
            w-[250px]
            h-[40px]
            pl-2
            pr-[40px]
            mb-[10px]
            placeholder-[#3c589a]
            bg-light-gray
            border
            border-gray-300
            focus:border-gray-400
          "
        />
        <CiSearch className="absolute top-[10px] right-[10px]" size={20} color="#3c589a" />
      </form>
    </div>
  )
}

export default Form

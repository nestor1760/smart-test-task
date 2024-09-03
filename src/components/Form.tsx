import { useAppDispatch, useAppSelector } from "../hook"
import { setInputValue } from "../store/formSlice";

const Form = () => {
  const dispatch = useAppDispatch()
  const { inputValue } = useAppSelector(state => state.form)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(e.target.value));
  };

  return (
    <form>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        className="
          w-[180px]
          h-[40px]
          m-2
          p-1
          border-solid
          border-[1px]
          border-black
        "
      />
    </form>
  )
}

export default Form

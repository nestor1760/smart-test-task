import { useFilter } from '../hooks/useFilter';
import { useAppSelector } from '../hook';

const Table = () => {
  const { inputValue } = useAppSelector(state => state.form)
  const { users } = useAppSelector(state => state.users)

  const filteredList = useFilter({ inputValue: inputValue, array: users });

  return (
    <div className="w-full h-full min-h-[500px]">
      {filteredList.map(item =>
        <div key={item.id} className="flex items-start justify-between text-start">
          <div className="mb-[10px] mx-2">{item.name}</div>
          <div className="mb-[10px] mx-2">{item.username}</div>
          <div className="mb-[10px] mx-2">{item.phone}</div>
          <div className="mb-[10px] mx-2">{item.email}</div>
        </div>
      )}
    </div>
  )
}

export default Table
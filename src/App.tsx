import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { fetchUsers } from "./store/usersSlice";
import Table from "./components/Table";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-custom-gradient">
      <Table />
    </div>
  );
}

export default App;

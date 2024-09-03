import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { fetchUsers } from "./store/usersSlice";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])


  return (
    <div className="w-full h-screen flex items-center justify-center bg-custom-gradient">
      <div className="w-[1000px] flex items-end justify-center flex-col backdrop-blur-sm bg-white/30 text-white p-3">
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;

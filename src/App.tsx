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
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[1000px] min-h-[800px] flex items-start justify-center flex-col">
        <Form />
        <Table />
      </div>
    </div>
  );
}

export default App;

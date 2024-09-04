import { useEffect } from "react";
import { useAppDispatch } from "./hook";
import { fetchUsers } from "./store/usersSlice";
import Table from "./components/Table";
import Form from "./components/Form";
import Layout from "./components/Layout";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <Layout>
      <Form />
      <Table />
    </Layout>
  );
}

export default App;

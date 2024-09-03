import { useFilter } from '../hooks/useFilter';
import { useAppSelector } from '../hook';
import { Column, useTable } from "react-table";
import { useMemo } from 'react';
import { TUser } from '../types/types';

const Table = () => {
  const { inputValue } = useAppSelector(state => state.form)
  const { users } = useAppSelector(state => state.users)

  const filteredList = useFilter({ inputValue: inputValue, array: users });
  const data = filteredList

  const columns = useMemo<Column<TUser>[]>(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Username", accessor: "username" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Email", accessor: "email" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  return (
    <div className="w-full h-full min-h-[500px]">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} key={cell.column.id}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table
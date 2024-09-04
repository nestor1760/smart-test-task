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
      { Header: "Name", accessor: "name" },
      { Header: "Username", accessor: "username" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data })

  return (
    <div className='min-w-[80vw] h-[60vh] max-h-[60vh] overflow-y-auto'>
      <table
        {...getTableProps()}
        className="w-full table-auto border-separate border-spacing-0 border border-gray-300 text-white"
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className='h-[40px] bg-sky-600 sticky top-0'
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className='border border-gray-300 px-4 py-2 text-left'
                >
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
              <tr
                {...row.getRowProps()}
                key={row.id}
                className='hover:bg-gray-100 hover:text-sky-600 cursor-pointer'
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className='border-t border-b border-gray-300 px-4 py-2'
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table

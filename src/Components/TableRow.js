import React from "react";

const TableRow = ({ rowsData, deleteTableRows, handleChange }) => {
  return rowsData.map((data, index) => {
    const { productDescription, productQuantity, ProductRate } = data;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            name="productDescription"
            id="productDescription"
            value={productDescription}
            onChange={(event) => handleChange(index, event)}
            placeholder="Description of service or product..."
            className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
          />
        </td>
        <td className="px-4 w-32">
          <input
            type="number"
            name="productQuantity"
            id="productQuantity"
            value={productQuantity}
            onChange={(event) => handleChange(index, event)}
            className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
            defaultValue="1"
          />
        </td>
        <td className="w-32">
        <div className="flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-green-50 px-3 text-gray-500 sm:text-sm">
                  $
                </span>
                <input
                  type="number"
                  name="ProductRate"
                  id="ProductRate"
                  value={ProductRate}
                  onChange={(event) => handleChange(index, event)}
                  className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                  defaultValue="1"
                />
              </div>
        </td>
        <td className="px-4 text-lg text-gray-900 w-32">$0</td>
        <td className="px-4 text-lg text-gray-900 w-10">
          <button onClick={(event) => deleteTableRows(index, event)}> &times; </button>
        </td>
      </tr>
    );
  });
};

export default TableRow;

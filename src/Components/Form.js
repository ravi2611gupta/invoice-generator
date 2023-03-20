import React, { useState } from "react";
import TableRow from "./TableRow";

const Form = () => {
  const [rowsData, setRowsData] = useState([]);

  const deleteTableRows = (index, event) => {
    event.preventDefault();
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  };

  const addTableRows = (e) => {
    e.preventDefault();
    const rowsInput = {
      productDescription: "",
      productQuantity: "",
      ProductRate: "",
    };
    setRowsData([...rowsData, rowsInput]);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
  };

  return (
    <div className="min-h-full shadow-2xl w-full bg-white p-10">
      <form action="#">
        <div className="flex justify-between items-center">
          <div className="w-3/12">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Add Your Logo</p>
                </div>
              </div>
            </label>
          </div>

          <div className="w-9/12 flex items-end flex-col">
            <div className="w-7/12 h-14">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full h-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="INVOICE"
              />
            </div>
            <div className="col-span-3 sm:col-span-2">
              <div className="mt-2 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-green-50 px-3 text-gray-500 sm:text-sm">
                  #
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                  defaultValue="1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="w-6/12">
            <div>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows="2"
                  className="mt-1 block w-full pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Who is this invoice from? (required)"
                ></textarea>
              </div>
            </div>

            <div className="mt-3 flex justify-between gap-3">
              <div className="w-6/12">
                <label htmlFor="bill-to">Bill To</label>
                <textarea
                  id="about"
                  name="about"
                  rows="2"
                  className="mt-1 block w-full rounded-md pl-3 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Who is this invoice from? (required)"
                ></textarea>
              </div>
              <div className="w-6/12">
                <label htmlFor="bill-to">Ship To</label>
                <textarea
                  id="about"
                  name="about"
                  rows="2"
                  className="mt-1 block w-full rounded-md pl-3 border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                  placeholder="Who is this invoice from? (required)"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="w-6/12 flex flex-col items-end gap-2">
            <div className="flex gap-3 justify-center items-center">
              <label>Date</label>
              <input
                type="date"
                name="company-website"
                id="company-website"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Payment Terms</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Due Date</label>
              <input
                type="date"
                name="company-website"
                id="company-website"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>PO Number</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-full mt-10 w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Item
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Quantity
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Rate
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Amount
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  {" "}
                  <button
                    className="w-7"
                    onClick={addTableRows}
                  >
                    + 
                  </button>{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                rowsData={rowsData}
                deleteTableRows={deleteTableRows}
                handleChange={handleChange}
              />
            </tbody>
          </table>
        </div>

        <div className="flex mt-10">
          <div className="w-6/12">
            <div className="mt-2">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                name="notes"
                rows="2"
                className="mt-1 block w-full pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                placeholder="Notes - any relevant information not already covered"
              ></textarea>
            </div>
            <div className="mt-2">
              <label htmlFor="terms">Terms</label>
              <textarea
                id="terms"
                name="terms"
                rows="2"
                className="mt-1 block w-full pl-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
              ></textarea>
            </div>
          </div>

          <div className="w-6/12 flex flex-col items-end gap-2">
            <div className="flex gap-3 justify-center items-center">
              <label>Subtotal</label>
              <div style={{ width: "170px" }} className="text-end">
                $ 0.00
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Discount</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Tax</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Shipping</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Total</label>
              <div style={{ width: "170px" }} className="text-end">
                $ 0.00
              </div>
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Amount Paid</label>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
            <div className="flex gap-3 justify-center items-center">
              <label>Balance Due</label>
              <div style={{ width: "170px" }} className="text-end">
                $ 0.00
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

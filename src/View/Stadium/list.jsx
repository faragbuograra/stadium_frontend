
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { MultiSelect } from "primereact/multiselect";
import fetchData from "../../api/BaseApi";


function ListStadium(){
  const [page, setPage] = React.useState(1);
const [data, setData] = React.useState([]);
const [totalPages, setTotalPages] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [state, setState] = React.useState({});
  const [flitter, setFlitter] = React.useState("");
  const [type, setType] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [dataAdd, setDataAdd] = React.useState([]);
  const [showadd, setShowadd] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState(false);

  useEffect( () => {
    loadData(page);
    
  }, [page, pageSize]);

  const loadData = async (page) => {
    try {
      const res = await fetchData(`Admin/stadium?page=${page}&paginate=${pageSize}`);
      setData(res.data);
      setTotalPages(res.meta.last_page); // تحديث عدد الصفحات الكلي
      const res1 = await fetchData(`Admin/users`);
    setState(res1.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

 
  return (
    <>
      <div style={{   margin: "20px" }}>
     
       
       
        
        <div class="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div class="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
    <div class="flex items-center justify-between ">
        <div>
            <h3 class="text-lg font-semibold text-slate-800">stadium List</h3>
            <p class="text-slate-500">Review each stadium  before edit</p>
        </div>
      <div class="flex flex-col gap-2 shrink-0 sm:flex-row">
        <button
          class="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => {
            setPageSize(100)
          }
          }
          >
          View All
        </button>
        <button
        onClick={
            () => {
                setShowadd(true);
            }
        }
          class="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
            stroke-width="2" class="w-4 h-4">
            <path
              d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z">
            </path>
          </svg>
          Add Stadium
        </button>
      </div>
    </div>
   
  </div>
  <div class="p-0 ">
    <table class="w-full mt-4 text-left table-auto min-w-max">
      <thead>
        <tr>
          <th
            class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
            <p
              class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
             ID
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
            </p>
          </th>
          <th
            class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
            <p
              class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
              Name
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
            </p>
          </th>
          <th
            class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
            <p
              class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
              balance
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" aria-hidden="true" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"></path>
              </svg>
            </p>
          </th>
       
          <th
            class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
            <p
              class="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {
            data?.map((item, index) => (
        <tr>
          <td class="p-3 border-b border-slate-200">
            <div class="flex items-center gap-3">
              {/* <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" /> */}
              <div class="flex flex-col">
                <p class="text-sm font-semibold text-slate-700">
                    {item.id}   
                </p>
                {/* <p
                  class="text-sm text-slate-500">
                  john@creative-tim.com
                </p> */}
              </div>
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {item.name}
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {item.balance}
              </p>
             
            </div>
          </td>
     
          <td class="p-3 border-b border-slate-200">
            <button
               onClick={
                () => {
                    setShow(true);
                    setDataEdit(item);
                }

            }
              class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                  class="w-4 h-4">
                  <path
                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                  </path>
                </svg>
              </span>
            </button>
          </td>
        </tr>
      ))}
      
       
      </tbody>
    </table>
  </div>
  <div className="flex items-center justify-between p-3">
          <p className="text-sm text-slate-500">
            Page {page} of {totalPages}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handlePreviousPage}
              disabled={page === 1}
              className="py-2.5 px-3 text-xs font-semibold text-slate-600 border border-slate-300">
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="py-2.5 px-3 text-xs font-semibold text-slate-600 border border-slate-300">
              Next
            </button>
          </div>
        </div>
      </div>


 
 { show && <div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true" class="absolute left-0 top-0 inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
    <div data-dialog="dialog"
      class="relative mx-auto flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md">
      <div class="flex flex-col p-6">
        <h4
          class="text-2xl mb-1 font-semibold text-slate-700">
          Edit stadium Details
        </h4>
        <p class="mb-3 mt-1 text-slate-400">
          Enter or reset each information for the stadium access.
        </p>
       
       <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
            Name
        </label>
        <input
        value={dataEdit.name}
        onChange={
            (e) => {
                setDataEdit({
                    ...dataEdit,
                    name: e.target.value
                });
            }
        }
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text" />
        </div>
        <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
        balance
        </label>
        <input
        value={dataEdit.balance}
        onChange={
            (e) => {
                setDataEdit({
                    ...dataEdit,
                    balance: e.target.value
                });
            }
        }
            type="text"
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your text" />
        </div>
    
      </div>
      <div class="p-6 pt-0">
        <div class="flex space-x-2">
            <button
            onClick={
                () => {
                    setShow(false);
                    setDataEdit({});
                }

            }
                class="w-full mx-auto select-none rounded border border-red-600 py-2 px-4 text-center text-sm font-semibold text-red-600 transition-all hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-600/20 active:bg-red-700 active:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-dialog-close="true">
                Cancel
            </button>
 
            <button
            onClick={
                () => {
                    var res = fetchData('admin/stadium/' + dataEdit.id, '', '', 'PATCH', dataEdit);
                    res.then((res) => {
                        console.log(res);
                        setShow(false);
                    }).catch((e) => {
                        console.log(e);
                    }
                    );
                }

            }
                class="w-full mx-auto select-none rounded bg-slate-800 py-2 px-4 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-dialog-close="true">
                Save
            </button>
        </div>
        <p class="flex justify-center mt-4 font-sans text-sm text-slate-500">
          Looking for more details? Contact
          <a href="#admin"
            class="ml-1 text-sm font-bold leading-normal text-slate-500">
            Admin.
          </a>
        </p>
      </div>
    </div>
  </div>   }
  { showadd && <div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true" class="absolute left-0 top-0 inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
    <div data-dialog="dialog"
      class="relative mx-auto flex w-full max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-slate-700 shadow-md">
      <div class="flex flex-col p-6">
        <h4
          class="text-2xl mb-1 font-semibold text-slate-700">
            Add stadium Details
        </h4>
        <p class="mb-3 mt-1 text-slate-400">
          Enter or reset each information for the stadium .
        </p>
       
       <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
       Name
        </label>
        <input
            type="text"
            onChange={(e) => {
                setDataAdd({
                    ...dataAdd,
                    name: e.target.value
                });
            }
            }
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your name" />
        </div>
        <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
        balance
        </label>
        <input
            type="text"
            onChange={(e) => {
                setDataAdd({
                    ...dataAdd,
                    balance: e.target.value
                });
            }
            }
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your balance" />
        </div>
         <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
        User 
        </label>
        <select
          
            onChange={(e) => {
                setDataAdd({
                    ...dataAdd,
                    user_id: e.target.value
                });
            }
            }
            class="w-full h-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
            placeholder="Enter your balance" >
              <option value="">Select User</option>
              {
state?.map((item, index) => (
    <option value={item.id}>{item.name}</option>
))
              }
        </select>
        </div> 
       
       
       
       
        
      </div>
      <div class="p-6 pt-0">
        <div class="flex space-x-2">
            <button
            onClick={
                () => {
                    setShowadd(false);
                }
            }
                class="w-full mx-auto select-none rounded border border-red-600 py-2 px-4 text-center text-sm font-semibold text-red-600 transition-all hover:bg-red-600 hover:text-white hover:shadow-md hover:shadow-red-600/20 active:bg-red-700 active:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-dialog-close="true">
                Cancel
            </button>
 
            <button
                class="w-full mx-auto select-none rounded bg-slate-800 py-2 px-4 text-center text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={
                    () => {
                        var res = fetchData('admin/stadium', '', '', 'POST', 
                        dataAdd
                        );
                        res.then((res) => {
                            console.log(res);
                            setShowadd(false);
                        }).catch((e) => {
                            console.log(e);
                        }
                        );
                    }
                }
                data-dialog-close="true">
                Save
            </button>
        </div>
        <p class="flex justify-center mt-4 font-sans text-sm text-slate-500">
          Looking for more details? Contact
          <a href="#admin"
            class="ml-1 text-sm font-bold leading-normal text-slate-500">
            Admin.
          </a>
        </p>
      </div>
    </div>
  </div>   }
      </div>
    </>
  );
}

export default ListStadium;

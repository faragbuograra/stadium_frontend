
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { MultiSelect } from "primereact/multiselect";
import fetchData from "../../api/BaseApi";


function MYMatch(){
  const [page, setPage] = React.useState(1);
const [data, setData] = React.useState([]);
const [totalPages, setTotalPages] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(100);
  const [show, setShow] = React.useState(false);
  const [dataEdit, setDataEdit] = React.useState(false);

  useEffect(() => {
    loadData(page);
  }, [page, pageSize]);

  const loadData = async (page) => {
    try {
      const res = await fetchData(`Admin/myMatch?page=${page}&paginate=${pageSize}`);
      setData(res.data);
      setTotalPages(res.meta.last_page); // تحديث عدد الصفحات الكلي
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
      <div style={{   margin: "20px" }} dir="rtl">
     
       
       
        
        <div class="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div class="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
    <div class="flex items-center justify-between ">
    
     
    </div>
   
  </div>
  <div class="p-0 ">
    <table class="w-full mt-4i text-center table-auto min-w-max">
      <thead>
        <tr>
          <th
            class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
            <p
              class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
             رقم المبارة
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
              الملعب
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
             اسم حجز المبارة
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
       اليوم
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
         الوقت
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
       الحاله
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
            <div class="flex items-center w-full  text-center gap-3">
              {/* <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                alt="John Michael" class="relative inline-block h-9 w-9 !rounded-full object-cover object-center" /> */}
             
                <p class="text-sm font-semibold w-full text-slate-700">
                    {item.id}   
                </p>
               
              
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col items-center w-full">
              <p class="text-sm font-semibold text-slate-700">
                {item.stadium.name}
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {item.user.name}
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {item.day}
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {item.time}
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
            <div class="flex flex-col">
              <p class="text-sm font-semibold text-slate-700">
                {
                  //if day > now 
                  //  تم الحجز
                  // else
                  //  لم يتم الحجز
                  new Date(item.day) < new Date() ? "تم اللعب" : "لم يتم اللعب"
                }
              </p>
             
            </div>
          </td>
          <td class="p-3 border-b border-slate-200">
        {new Date(item.day) > new Date() ?    <button
               onClick={
                () => {
                    setShow(true);
                    setDataEdit(item);
                }

            }
              class="relative h-10 max-h-[40px]  select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button">
              <span class="">
             <h1>
         طلب اللاعبين
              </h1>
              </span>
            </button> : null}
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
      
        </h4>
       
       
       <div class="w-full max-w-sm min-w-[200px] mt-4">
        <label class="block mb-1 text-sm text-slate-700">
       رقم اللاعبين المطلوب
        </label>
        <input
        value={dataEdit.number_of_players}
        onChange={
            (e) => {
                setDataEdit({
                    ...dataEdit,
                    number_of_players: e.target.value
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
                الغاء
            </button>
 
            <button
            onClick={
                () => {
                  var res = fetchData('admin/RequstPlayer', '', '', 'POST', 
                    {
                        match_id: dataEdit.id,
                        number_of_players: dataEdit.number_of_players,
                        day: dataEdit.day,
                        time: dataEdit.time,
                    }
                    );
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
                حفظ
            </button>
        </div>
      
      </div>
    </div>
  </div>   }
 
      </div>
    </>
  );
}

export default MYMatch;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { MultiSelect } from "primereact/multiselect";
import fetchData from "../../api/BaseApi";

function ListManger() {
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

  useEffect(() => {
    loadData(page);
  }, [page, pageSize]);

  const loadData = async (page) => {
    try {
      const res = await fetchData(
        `Admin/Players?page=${page}&paginate=${pageSize}`
      );
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
      <div style={{ margin: "20px" }} dir="rtl">
        <div class="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
       
          <div class="p-0 ">
            <table class="w-full mt-4 text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      التسلسل
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>
                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      الاسم
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>
                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      رقم الهاتف
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>
                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      اسم المستخدم
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>
                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      الرصيد
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>

                  <th class="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                    <p class="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                      تاريخ الانشاء
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        ></path>
                      </svg>
                    </p>
                  </th>
                
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
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
                          {item.phone}
                        </p>
                      </div>
                    </td>
                    <td class="p-3 border-b border-slate-200">
                      <div class="flex flex-col">
                        <p class="text-sm font-semibold text-slate-700">
                          {item.username}
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
                      <p class="text-sm text-slate-500">{item.created_at}</p>
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
                className="py-2.5 px-3 text-xs font-semibold text-slate-600 border border-slate-300"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={page === totalPages}
                className="py-2.5 px-3 text-xs font-semibold text-slate-600 border border-slate-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default ListManger;

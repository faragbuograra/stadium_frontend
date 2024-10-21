
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { MultiSelect } from "primereact/multiselect";
import fetchData from "../../api/BaseApi";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Header from "../../Components/home/Header";

function ListUserStadium(){
  const [page, setPage] = React.useState(1);
const [data, setData] = React.useState([]);
const [totalPages, setTotalPages] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);


  useEffect(() => {
    loadData(page);
  }, [page, pageSize]);

  const loadData = async (page) => {
    try {
      // const res = await fetchData(`Admin/stadium?page=${page}&paginate=${pageSize}`);
      // setData(res.data);
      // setTotalPages(res.meta.last_page); // تحديث عدد الصفحات الكلي
    } catch (e) {
      console.log(e);
    }
  };


 
  return (
    
    <>
			{/* <Header /> */}
			{/* <Testmonials />
			<Opinion />
			<Contact />
			<CopyRights /> */}
		</>
   
  );
}

export default ListUserStadium;

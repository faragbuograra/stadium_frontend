
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
      const res = await fetchData(`stadium?page=${page}&paginate=${pageSize}`);
      setData(res.data);
      setTotalPages(res.meta.last_page); // تحديث عدد الصفحات الكلي
    } catch (e) {
      console.log(e);
    }
  };


 
  return (
    
    <>
 
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <Card  className="m-2"
        sx={{ maxWidth: 345 }} key={item.id}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={'https://m.media-amazon.com/images/I/61eBvmR2L8L._AC_UF1000,1000_QL80_.jpg'}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              <h1 className="text-2xl font-bold text-right">
                <Link to={`stadium/${item.id}`}>{item.name}</Link>
              </h1>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
		</>
   
  );
}

export default ListUserStadium;

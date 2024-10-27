
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import { MultiSelect } from "primereact/multiselect";
import fetchData from "../../api/BaseApi";

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListUserStadium from "../Stadium/userlist";
import MYMatch from "../Match/my";
import ReqListPlayers from "../Players/requstplayer";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
function UserView(){
  const [page, setPage] = React.useState(1);
const [data, setData] = React.useState([]);
const [totalPages, setTotalPages] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [state, setState] = React.useState({});


  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    loadData(page);
  }, [page, pageSize]);

  const loadData = async (page) => {
    try {
      const res = await fetchData(`Admin/users?page=${page}&paginate=${pageSize}`);
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
      <div style={{   margin: "20px" }}>
     
       
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="اماكن شاغرة" {...a11yProps(0)} />
          <Tab label="مبارياتي" {...a11yProps(1)} />
          <Tab label=" حجز مبارة" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
   <ReqListPlayers />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
   <MYMatch />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
      <ListUserStadium />
      </TabPanel>
    </Box>
      </div>
    </>
  );
}

export default UserView;

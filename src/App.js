import { Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Main from './pages/Main';
import { connect, useSelector } from 'react-redux';
import { getWeatherInfo } from './redux/action';


const App = ({ getWeatherInfo }) => {
  const [searchValue, setSearchValue] = useState("Delhi,IN");
  const [loader, setLoader] = useState(true);
  const data = useSelector((state) => state?.weather);


  const getWeatherInfor = () => {
    setLoader(true);
    getWeatherInfo(searchValue);
  }

  useEffect(() => {       // useEffect after refresh page useEffect call function only one time
    getWeatherInfo(searchValue);
  }, []);


  useEffect(() => {       // Use useEffect to update the loader based on the data
    if (data?.length === 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          // bgcolor: "yellow",
          mb: 5,
          p: 2, width: "60%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          type="search"
          placeholder='search...'
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyUp={(e) => e.which === 13 ? getWeatherInfor() : ""}
          InputProps={{ style: { height: "40px" } }}
          style={{
            width: '60%',
            marginRight: '16px',                    // Adjust spacing between inputfield and button
          }}
        />
        <Button
          disableRipple
          sx={{
            backgroundColor: '#FF8D2A',
            color: '#FFFFFF',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#FF8D2A',
              border: '1.5px solid #FF8D2A',
            },
          }}
          variant="outlined"
          onClick={getWeatherInfor}
        >
          Search
        </Button>
      </Box>

      {/* API data show in Main component */}
      <Main loader={loader} />

    </Box>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    getWeatherInfo: (data) => dispatch(getWeatherInfo(data)),
  };
}
export default connect(null, mapDispatchToProps)(App);


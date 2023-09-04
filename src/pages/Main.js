import { Box, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Toastify from '../config/Toastify';

const Main = ({ loader }) => {
    const weatherData = useSelector((state) => state?.weather);   // fetching weather api result
    const weatherCurrent = weatherData[0]?.current;       // api data for weather condition
    const weatherLocation = weatherData[0]?.location;     // api data for place details or location name etc.

    return (
        <Box sx={style.outer} >

            {loader &&
                <Box sx={{
                    mt: 12, display: "flex", flexWrap: "wrap",
                    justifyContent: { xs: "center", md: "space-between" }
                }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((val, ind) => (
                        <Skeleton
                            sx={{ width: { xs: "300px", md: "400px", lg: "600px" }, mb: 4 }}
                            variant="rectangular" height={50} />))}
                </Box>
            }



            {!loader && weatherData[0]?.message &&           // Error handling for fetching api data then message comes from api
                <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                    <h1>No Record Found</h1>
                    <Toastify />
                </Box>
            }

            {!loader && !weatherData[0]?.message &&      // API data is correct then display in respective field
                <>
                    <Box sx={style.fifty}>
                        <Box sx={style.row}>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.is_day === 1 ? "Day" : "Night"}
                            </Typography>
                            <Typography sx={style.typo}>
                                <img
                                    alt="Image"
                                    src={weatherCurrent.condition.icon}
                                />

                                {weatherCurrent.condition.text}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Temperature :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.temp_c} &deg;c
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Humidity :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.humidity}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Pressure (In) :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.pressure_in}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Wind (kph) :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.wind_kph}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                UV Index :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherCurrent.uv}
                            </Typography>
                        </Box>
                    </Box>


                    <Box sx={style.verticle}></Box>


                    <Box sx={style.fifty}>
                        <Box sx={{ fontSize: "30px", fontWeight: 600, p: 2, pl: 10, mb: 5 }}>Place</Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Name :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherLocation.name}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Region :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherLocation.region}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Country :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherLocation.country}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                Time :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherLocation.localtime}
                            </Typography>
                        </Box>

                        <Box sx={style.row}>
                            <Typography sx={style.typo}>
                                TimeZone :
                            </Typography>
                            <Typography sx={style.typoValue}>
                                {weatherLocation.tz_id}
                            </Typography>
                        </Box>


                    </Box>
                </>
            }

        </Box>
    )
}

export default Main;

const style = {
    outer: {
        // bgcolor: "green",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%"
    },

    fifty: {
        width: { md: "48%" }
    },

    verticle: {
        bgcolor: "black",
        width: { xs: "0px", md: "2px" },
        height: { xs: "50px", md: "480px" }
    },

    row: {
        display: "flex",
        flexDirection: "row",
        // bgcolor: "yellow",
        mb: 5,
        pl: 10
    },

    typo: {
        fontSize: "20px",
        width: { xs: "45%", lg: "70%", xl: "70%" },
    },
    typoValue: {
        fontSize: "20px",
        fontWeight: 600,
    }
};
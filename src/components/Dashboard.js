import * as React from 'react';
import {Button, FormHelperText, Typography} from "@mui/material";
import {useState} from "react";
import UseGeolocation from "../hooks/useGeolocation";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';
import AttractionsIcon from '@mui/icons-material/Attractions';
import CloseIcon from '@mui/icons-material/Close';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const location = UseGeolocation();

    return (
        <div className="centered column">
            <Button
                variant="outlined"
                onClick={() => setShow(!show)}
                disabled={location.error}
                startIcon={location.error ? <LocationOffIcon /> : show ? <CloseIcon /> : <LocationOnIcon />}
            >
                {show ? "close" : "Show my location"}
            </Button>
            {
                location.error
                    ? <FormHelperText>{location.error.message}</FormHelperText>
                    : null
            }

            <br/>
            {
                // Check if user location is loaded
                // Until user gives permission the location loaded will be false
                show ?
                    <div>
                        <Typography variant="h6" gutterBottom component="div">
                        latitude: {location?.coordinates.lat}
                        <br/>
                        longitude: {location?.coordinates.lng}
                        </Typography>
                        <br/>
                        <br/>
                        <Button
                            variant="contained"
                            startIcon={<AttractionsIcon />}
                        >
                            Find nearest attractions
                        </Button>

                    </div>
                    : null
            }
        </div>
    );
};

export default Dashboard;
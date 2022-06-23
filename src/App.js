import {React , useEffect , useState} from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Placedetails from "./components/Placedetails/Placedetails";


const App = () => {

    const [places ,setPlaces] = useState(); 
    const [childClicked , setChildClicked] = useState(null);
    const [coordinates , setCoordinates] = useState({});
    const [bounds , setBounds] = useState({});

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('0');
    

    //to get the user current location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords : {latitude , longitude}})=> {
            setCoordinates({lat : latitude , lng : longitude});
        })
    }, []);

    useEffect(() => {
        //console.log(coordinates , bounds);

        getPlacesData(type ,bounds.sw , bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
        })
    }, [type,coordinates,bounds]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            
                <Grid container spacing={3}>
                    <Grid item xs = {12} md = {4}>
                        <List
                           places = {places}
                           childClicked = {childClicked} 
                           type = {type}
                           setType = {setType}
                           rating = {rating}
                           setRating = {setRating}
                        />
                    </Grid>
                    <Grid item xs ={12} md = {8}>
                        <Map
                            setCoordinates = {setCoordinates}
                            setBounds = {setBounds} 
                            coordinates = {coordinates}
                            places = {places}
                            setChildClicked = {setChildClicked}

                        />
                    </Grid>
                    
                </Grid>

        </>
    );
} 

export default App;
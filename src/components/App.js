import React, {useEffect, useState} from 'react'
import Dashboard from "./Dashboard";
import Attractions from "./Attractions";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Amplify, { API } from 'aws-amplify'


function App() {

    useEffect(async () => {
        await fetchAPI()
    },[])

    const [message, setMessage] = useState('');

    async function fetchAPI(){
        API.get("attAPI", "/attractions", {})
            .then(response => {
                setMessage(response.success)
                console.log(`Response: ${response}`)
            })
            .catch(error => {
                console.log(error.response)
            })
    }



    return (

        <Router>
            <p>{message}</p>
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/attractions' component={Attractions}/>
            </Switch>
        </Router>
    )
}

export default App;
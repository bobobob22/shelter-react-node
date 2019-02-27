import React from 'react';
import {Route, Switch} from "react-router-dom";

import AddNewPet from "../../containers/AddNewPet/AddNewPet";
import Home from '../../containers/Home/Home'
import Lost from "../../containers/Lost/Lost"
import ToAdopt from '../../containers/ToAdopt/ToAdopt';
import Founded from '../../containers/Founded/Founded'
import Login from '../../containers/Login/Login'
import Register from '../../containers/Register/Register';
import Page404 from "../Page404/Page404";
import SinglePet from "../../containers/SinglePet/SinglePet";
import ForAdoption from "../../containers/ForAdoption/ForAdoption";

const main = () => (
    
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/pet/:id" component={SinglePet}/>
            <Route path="/lost" component={Lost}/>
            <Route path="/searching" component={ForAdoption}/>
            <Route path="/addnotice" component={AddNewPet}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register} />
            <Route path="*" component={Page404}/>
        </Switch>
   
);

export default main;

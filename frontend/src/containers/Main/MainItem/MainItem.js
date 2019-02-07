import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../Home/Home";
import Lost from "../../Lost/Lost";
import AddNewPet from "../../AddNewPet/AddNewPet";
import Page404 from "../../Page404/Page404";

const mainItem = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/lost" component={Lost}/>
        <Route path="/addnotice" component={AddNewPet}/>
        <Route component={Page404}/>
    </Switch>
);

export default mainItem;

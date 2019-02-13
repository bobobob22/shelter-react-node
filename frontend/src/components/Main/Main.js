import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../../containers/Home/Home";
import Lost from "../../containers/Lost/Lost";
import AddNewPet from "../../containers/AddNewPet/AddNewPet";
import Page404 from "../Page404/Page404";
import SinglePet from "../../containers/SinglePet/SinglePet";

const main = () => (
    <main>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/lost" component={Lost}/>
            <Route path="/addnotice" component={AddNewPet}/>
            <Route path="/:id" component={SinglePet}/>
            <Route component={Page404}/>
        </Switch>
    </main>
);

export default main;

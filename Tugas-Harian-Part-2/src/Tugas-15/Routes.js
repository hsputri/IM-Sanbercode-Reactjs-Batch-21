import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PurchaseForm from '../Tugas-9/tugas-9';
import PriceTable from '../Tugas-10/tugas-10';
import Timer from '../Tugas-11/tugas-11';
import DataBuah from '../Tugas-12/DaftarBuah';
import DaftarBuah from '../Tugas-13/tugas-13';
import Tugas14 from '../Tugas-14/DaftarBuah';
import Tugas15 from '../Tugas-15/SwitchTheme';
import Nav from './Nav';
import { ThemeProvider } from "./ThemeContext";

export default function App() {
  return (
      <>
        <Router>
          <ThemeProvider>
            <Nav/>
            <Switch>
              <Route exact path="/">
                <PurchaseForm />
              </Route>

              <Route exact path="/tugas10">
                <PriceTable />
              </Route>

              <Route exact path="/tugas11">
                <Timer start={200} />
              </Route>

              <Route exact path="/tugas12">
                <DataBuah />
              </Route>
              
              <Route exact path="/tugas13">
                <DaftarBuah />
              </Route>

              <Route exact path="/tugas14">
                <Tugas14 />
              </Route>

              <Route exact path="/tugas15">
                <Tugas15 />
              </Route>
            
            </Switch>
          </ThemeProvider>
        </Router>    
      </>
  );
}
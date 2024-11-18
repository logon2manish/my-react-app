import React from "react";
import LeftMenu from '../LeftMenu/leftMenu'
import PageDetails from '../PageDetails/pageDetails'
import "./main.css"


const main = () => {
    return (
        <div className="container">
          <LeftMenu />
          <PageDetails />
        </div>
      );
      
};
export default main;

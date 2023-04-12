import "./App.css";
import React, { useState } from "react";
import Table from "./Components/Table";
import PopupComponent from "./Components/PopupComponent";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Provider } from "react-redux";
import store from "./Components/redux/store";
import { connect } from "react-redux";


function App(props) {
  let entries=props.entries;
  return (
    
    <div className="App">
      
      {entries.length?
      <Table/>
      :
      console.log("")
      }
      <Popup trigger={<div className="addButton"><button >Add</button></div>} modal>
        {(close) => (
          <PopupComponent
            closePopup={close}
          />
        )}
      </Popup>
    </div>
  );
}


const mapStateToProps = state =>{
  return {
    entries:[...state.entries]
  }
}




export default connect(mapStateToProps,null)(App);

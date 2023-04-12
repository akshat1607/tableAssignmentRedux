import React from "react";
import {addElement} from "./redux/table/ActionAdd"
import {updateElement} from "./redux/table/ActionUpdate"
import {deleteElement} from "./redux/table/ActionDelete"
import { connect } from "react-redux";

function Popup({addEntry,updateEntry,deleteEntry,closePopup,entries,id}) {
  let {name,phoneNumber,email,address}=(id===undefined)?{}:entries[id];
  return (
    <form
      onSubmit={(e) => {
        if (id===undefined)
          addEntry({
            name: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
          });
        else
          updateEntry(id, {
            name: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            address: e.target[3].value,
          });
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        closePopup();
        // {debugger}
      }}
    >
      <p>
        Name :{" "}
        <input
          type="text"
          name="Name"
          defaultValue={name}
          required
        ></input>
      </p>
      <p>
        Phone Number :{" "}
        <input
          type="text"
          pattern="[0-9]{10}"
          name="phoneNumber"
          defaultValue={phoneNumber}
          required
        ></input>
      </p>
      <p>
        Email :{" "}
        <input
          type="email"
          name="email"
          defaultValue={email}
          required
        ></input>
      </p>
      <p>
        Address :{" "}
        <textarea
          type="text"
          name="address"
          defaultValue={address}
          required
        ></textarea>
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}


const mapStateToProps = state =>{
  return {
    entries:[...state.entries]
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    addEntry : (e)=>dispatch(addElement(e)),
    updateEntry :(id,e)=> dispatch(updateElement(id,e)),
    deleteEntry :(id)=> dispatch(deleteElement(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Popup);




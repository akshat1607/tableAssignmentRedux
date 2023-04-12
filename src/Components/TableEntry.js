import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import PopupComponent from "./PopupComponent";
import {addElement} from "./redux/table/ActionAdd"
import {updateElement} from "./redux/table/ActionUpdate"
import {deleteElement} from "./redux/table/ActionDelete"

import { connect } from "react-redux";

function TableEntry({
  index,
  deleteEntry,
  entries
}) {
  return (
    <tr>
      <td>{entries[index].name}</td>
      <td>{entries[index].phoneNumber}</td>
      <td>{entries[index].email}</td>
      <td>{entries[index].address}</td>
      <td>
        <Popup trigger={<BiEdit />} modal>
          {(close) => {
            return (
              <PopupComponent
                id={index}
                closePopup={close}
              />
            );
          }}
        </Popup>
        <MdDeleteOutline onClick={() => deleteEntry(index)} />
      </td>
    </tr>
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

export default connect(mapStateToProps,mapDispatchToProps)(TableEntry);
import React from "react";
import TableEntry from "./TableEntry";
import TableHeader from "./TableHeader";
import './table.css'

import { connect } from "react-redux";
function Table({
  entries,
}) {
  return (
    <div >
      <table border="1" className="tableclass">
        <TableHeader></TableHeader>
        {entries.map((entry,index) => {
          return (
            <TableEntry
              index={index}
            />
          );
        })}
      </table>
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    entries:[...state.entries]
  }
}

export default connect(mapStateToProps,null)(Table);

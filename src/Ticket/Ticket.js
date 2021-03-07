import React from "react";

import "./Ticket.css";

const Ticket = (props) => {
  return (
    <div className="ticket">
      <div className="hide" onClick={props.click}>
        <p>hide</p>
      </div>
    </div>
  );
};

export default Ticket;

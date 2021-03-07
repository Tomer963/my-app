import React, { Component } from "react";
import Ticket from "./Ticket/Ticket";

class App extends Component {
  state = {
    tickets: [{ id: "asfa1" }, { id: "vasdf1" }, { id: "asdf11" }],
    hiddenTicketsNum: 0,
  };

  deleteTicketHandler = (ticketIndex) => {
    const tickets = [...this.state.tickets];
    tickets.splice(ticketIndex, 1);
    this.setState({ tickets });
    this.setState((prevState) => {
      return { hiddenTicketsNum: prevState.hiddenTicketsNum + 1 };
    });
  };

  render() {
    let hiddenTicketsNum = null;

    if (this.state.hiddenTicketsNum) {
      hiddenTicketsNum = (
        <>
          <span>
            {this.state.hiddenTicketsNum > 0 &&
              ` (${this.state.hiddenTicketsNum} hidden tickets) - `}
          </span>
          <em>
            <a href="/" style={{ textDecoration: "none" }}>
              restore
            </a>
          </em>
        </>
      );
    }

    return (
      <div>
        <p style={{ marginLeft: "20%" }}>
          showing 20 results {hiddenTicketsNum}
        </p>
        {this.state.tickets.map((ticket, index) => {
          return (
            <Ticket
              click={() => this.deleteTicketHandler(index)}
              key={ticket.id}
            />
          );
        })}
      </div>
    );
  }
}

export default App;

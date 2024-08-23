import { useState } from "react";
import { genTicket } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";
export default function Lottery({n, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = winCondition(ticket);
  let buyTicket = () => {
    setTicket(genTicket(n));
  }
 return (
  <div>
<Ticket ticket={ticket} />
  <button onClick={buyTicket}>Buy New Ticket</button>
  <h3>{isWinning && "You Conguratualtes, you won!"}</h3>
  </div>
 )
}
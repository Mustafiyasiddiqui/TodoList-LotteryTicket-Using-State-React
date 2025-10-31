import { useState } from "react";

export default function LotteryTicket() {
  let [ticket, setTicket] = useState(0);
  const [message, setMessage] = useState("");

  let genrateTicket = () => {
    let newTicket = (ticket = Math.floor(100 + Math.random() * 900));
    setTicket(newTicket);

    let sum = 0;
    String(newTicket)
      .split("")
      .forEach((digit) => {
        sum += Number(digit);
      });
    if (sum === 15) {
      setMessage("🎉 Congratulations, you won!");
    } else {
      setMessage("😢 Better luck next time!");
    }
  };

  return (
    <div>
      <h1>Lottery</h1>
      <span>Lottery Ticket = {ticket}</span>
      <br />
      <button onClick={genrateTicket}>Get New Ticket</button>
      <h3>{message}</h3>
    </div>
  );
}

import "./App.css";
import Counter from "./counter.jsx";
import LikeButton from "./likeButton.jsx";
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import LotteryTicket from "./LotteryTicket.jsx";
import LottreyTicketArr from "./LottreyTicketArr.jsx";
import "./LottreyTicketArr.css";
import { sum } from "./helper.js";
function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      {/* <Counter /> */}
      {/* <LudoBoard /> */}
      {/* <LikeButton /> */}
      {/* <TodoList /> */}
      {/* <LotteryTicket /> */}
      <LottreyTicketArr n={3} winCondition={winCondition} />
    </>
  );
}

export default App;

import "./App.css";
import ExpensesItems from "./components/ExpensesItem/ExpensesItem";
import { data } from "./components/data/expenseData";

function App() {
  return (
    <div className="expenses-app">
      <h1> You've got money to spend!</h1>
      <div className="expense-items">
        {data.map((item) => (
          <ExpensesItems
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

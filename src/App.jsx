import { useState, useEffect } from "react";
import BalanceSummary from "./components/BalanceSummary";
import AddTransactionForm from "./components/AddTransactionForm";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import './App.css';



function App(){
  
  const getInitialTransactions = () => {
    const stored = localStorage.getItem("transactions");
    return stored? JSON.parse(stored) : [];
  };

  const [transactions, setTransactions] = useState(getInitialTransactions);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  },[transactions]);

  return(
    <div className="app-container">
      <h1>Personal Finance Tracker</h1>
      <BalanceSummary transactions={transactions} />
      <AddTransactionForm setTransactions={setTransactions} />
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
      <Chart transactions={transactions} />
    </div>
  );
}
export default App;
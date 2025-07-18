import { useState } from "react";

function AddTransactionForm({setTransactions}){

    const[description, setDescription] = useState("");
    const[amount, setAmount] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!description || !amount){
            alert("Please fill in both fields.");
            return;
        }

        const newTransaction = {
            id:Date.now(),
            description,
            amount:parseFloat(amount),
        };

        setTransactions((prev)=>[newTransaction, ...prev]);
        setDescription("");
        setAmount("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add New Transaction</h3>
            <div>
                <input 
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e)=>setDescription(e.target.value)} 
                />
            </div>
            <div>
                <input 
                type="number"
                placeholder="Amount (use - for expenses)"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)} 
                />
            </div>
            <button type="submit">Add Transaction</button>
        </form>
    );
}
export default AddTransactionForm;
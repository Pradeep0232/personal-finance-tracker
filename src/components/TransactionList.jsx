function TransactionList({transactions, setTransactions}){

    const handleDelete = (id) => {
        const updated = transactions.filter((tx) => tx.id!==id);
        setTransactions(updated);
    };
    return(
        <div>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map((tx)=>(
                    <li
                    key={tx.id}
                    style={{color:tx.amount>=0?"green":"red", listStyle:"none", marginBottom:"8px",}}
                    >
                        {tx.description}:₹{tx.amount}{" "}
                        <button
                        onClick={()=>handleDelete(tx.id)}
                        style={{
                            marginLeft: "10px",
                            background: "transparent",
                            border: "none",
                            color: "gray",
                            cursor: "pointer", 
                        }}
                        title="delete">
                           ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
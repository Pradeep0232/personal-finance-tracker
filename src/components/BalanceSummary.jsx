function BalanceSummary({transactions}){
    const amounts = transactions.map((tx)=>tx.amount);
    const total = amounts.reduce((acc, val)=> acc+val,0);
    const income = amounts.filter((val)=>val>0).reduce((acc,val)=>acc+val,0);
    const expense = amounts.filter((val)=>val<0).reduce((acc,val)=>acc+val,0);
    return(
        <div style={{marginBottom:"20px"}}>
            <h3>Balance:₹{total}</h3>
            <p style={{color:"green"}}>Income:₹{income}</p>
            <p style={{color:"red"}}>Expense:₹{Math.abs(expense)}</p>
        </div>
    );
}

export default BalanceSummary;
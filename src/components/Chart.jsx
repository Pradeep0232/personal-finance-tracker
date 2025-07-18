import {PieChart, Pie, Cell, Tooltip, Legend} from "recharts";

function Chart({transactions}){
    const income = transactions
      .filter((tx)=>tx.amount>0)
      .reduce((acc,tx) => acc+tx.amount,0);

    const expense = transactions
      .filter((tx) => tx.amount<0)
      .reduce((acc,tx) => acc+tx.amount,0);

    const data = [
        {name: "Income", value: income},
        {name: "Expense", value: Math.abs(expense)},
    ];

    const COLORS = ["#00C49F", "#FF4444"];

    return(
        <div>
            <h3>Income vs Expense</h3>
            <PieChart width={300} height={250}>
            <Pie 
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
            >
                {data.map((entry, index)=>(
                    <Cell key={index} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
             </PieChart>
        </div>
    );
}

export default Chart;

import { useContext } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import { ExpenseContext, UserContext } from "../App";



function Expenses() {

    const expenses =  useContext(ExpenseContext);
    return (
        <Card className="expenses">
            {expenses.map((expense , index) => {
                return <ExpenseItem key={index} expenses={expense}></ExpenseItem>
            })};
       </Card>
    );
}

export default Expenses;
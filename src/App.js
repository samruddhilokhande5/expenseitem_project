import { createContext, useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

export const ExpenseContext = createContext();

function App() {

const [expenses , setExpenses] = useState([
  {
    title : "Drawing Book", date : new Date(2024, 1 ,11), amount: 70
  },
  {
    title : "Pencil" , date: new Date(2022 ,8 ,31), amount: 20
  },
  {
    title : "Color Box" , date: new Date(2001 , 3 ,5), amount: 150
  },
  {
    title : "Gilter Color" , date: new Date(1999 , 4 ,21), amount: 100
  }
]);

/* const expenses =[
  {
    title : "Drawing Book", date : new Date(2024, 1 ,11), amount: 70
  },
  {
    title : "Pencil" , date: new Date(2022 ,8 ,31), amount: 20
  },
  {
    title : "Color Box" , date: new Date(2001 , 3 ,5), amount: 150
  },
  {
    title : "Gilter Color" , date: new Date(1999 , 4 ,21), amount: 100
  }
]; */

useEffect(()=>{
console.log(JSON.stringify(expenses));
},[expenses]);

const handleAddExpense = (expense) => {
console.log("AddExpense ", JSON.stringify(expense));

setExpenses((prevState)=>{
  return[...prevState, expense]
});

};


  return (
    <ExpenseContext.Provider value={expenses}>
    <div>I am App</div>
    <br />
    <ExpenseForm addExpense={handleAddExpense} />
    <Expenses />
   {/*  {expenses.map((expense)=>{
return<ExpenseItem expenses={expense}></ExpenseItem>
    })}; */}
   
    </ExpenseContext.Provider>
  );
}

export default App;


{/* <ExpenseItem
   // title={expenses[0].title} date={expenses[0].date.toLocaleString()} amount={expenses[0].amount} */
   //expenses={expenses[0]}
   /*  ></ExpenseItem>
     <ExpenseItem 
    //title={expenses[1].title} date={expenses[1].date.toLocaleString()} amount={expenses[1].amount}
   // expenses={expenses[1]}
    ></ExpenseItem>
    <ExpenseItem
     //title={expenses[2].title} date={expenses[2].date.toLocaleString()} amount={expenses[2].amount}
   //expenses={expenses[2]}
   ></ExpenseItem>
    <ExpenseItem
     //title={expenses[3].title} date={expenses[3].date.toLocaleString()} amount={expenses[3].amount}
   //expenses={expenses[3]}
   ></ExpenseItem>  */} 
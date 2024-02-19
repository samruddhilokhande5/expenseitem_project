import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


function ExpenseItem(props) {
/* const date = new Date();
const title = "Color Paints";
const amount = "25";
  */
/* const date = props.expenses.date.toLocaleString();
const title = props.expenses.title;
const amount = props.expenses.amount;
 */
const {title , date , amount} = props.expenses;
    return(
        <Card className="expense-item">
             <ExpenseDate date={date} />
            <div className="expense-item__description"> 
                <h2>{title}</h2>
                <div className="expense-item__price">{"Rs. " + amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;


 {/* <div>
            <div>{date.toLocaleString("en-US", {day: "2-digit"})}</div>
            <div>{date.toLocaleString("en-US", {month : "short"})}</div>
            <div>{date.getFullYear()}</div>
            </div> */}
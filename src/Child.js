import React, { useContext, useState } from 'react';
import './App.css';
import TransactionContext from './TransContext';


function Child() {
    let {transactions, addTransaction } = useContext(TransactionContext);
    let [newDes, setDes] = useState("");
    let [newAmo, setAmo] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
       addTransaction({
            amount: newAmo,
            desc: newDes
        })
    }
    return (
        <div className="container">
            <h1 className="heading" >Expense Tracker</h1>
            <h3 >YOUR BALANCE<br />$00</h3>
            <div className="flex">
                <h3>YOUR INCOME<br />$00</h3>
                <h3>YOUR EXPENSE<br />$00</h3>
            </div>
            <h3>HISTORY</h3><hr />
            <ul className="list">
                {transactions.map((transobj, index) => {
                    return (
                        <li key={index}>
                            <span>{transobj.desc}</span>
                            <span>{transobj.amount}</span>
                        </li>
                    )
                })}

            </ul>
            <h3>ADD YOUR TRANSACTION<hr /></h3>
            <form className="form" onSubmit={handleAddition}>
                <label>ENTER DESCRIPTION<br /><input type="text" onChange={(ev) => setDes(ev.target.value)} required /></label><br />

                <label>ENTER AMOUNT<br /><input type="amount" onChange={(ev) => setAmo(ev.target.value)} required /></label><br />
                <input type="submit" value="ADD" />
            </form>
        </div>
    );
}

export default Child;

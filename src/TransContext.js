import React, { createContext, useReducer } from 'react';
import TransactionReducer from './TransReducer'


let transactions = [
    { amount: 100, desc: "commision" },
    { amount: 200, desc: "work" },
    { amount: 300, desc: "paywork" }
]

const TransactionContext = createContext(transactions);


export default TransactionContext;


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, transactions);

    function addTransaction(transobj) {
        dispatch({
            type: "Add",
            payload: {
                amount: transobj.amount,
                desc: transobj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    )
}
import React from 'react'

const TransTable =({transactions}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
            </thead>
            <thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key = {index}>
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                        </tr>
                    ))}
                </tbody>
            </thead>
        </table>
    );
};

export default TransTable;
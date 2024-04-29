import React, { useState } from 'react';

// This component represents the form that allows the user to add a new transaction
const Transform = ({ onSubmit }) => {
  // Declare a state variable for each of the form fields
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // This function is called when the form is submitted
  const handleSubmit = (e) => {
    // Prevent the default behavior of submitting the form
    e.preventDefault();

    // Call the onSubmit function with the form values
    onSubmit({ description, amount, category });

    // Reset the form values
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    // Render a form with an onSubmit event that calls the handleSubmit function
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default Transform;
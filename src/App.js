import React, { useState } from 'react';
import TransTable from './components/Table';
import Transform from './components/Form';
import SearchBar from './components/Search';

const App = () => {
  const [transactions, setTransactions] = useState([
    {description: 'Medication', amount: 1000 ,category: 'Health'},
    {description: 'Clothes', amount: 2000 ,category: 'Garments'},
    {description: 'Rent', amount: 3000 ,category: 'Housing'},
    {description: 'Gym', amount: 4000 ,category: 'Fitness'},
    
  ]);
const [searchQuery, setSearchQuery] = useState('');
const[sortBy, setSortBy] = useState(null);
const[sortOrder, setSortOrder] = useState('asc');

const handleAddTransaction = (newTransaction) => {
  setTransactions([...transactions, newTransaction]);
};

const handleSearch = (query) => {
  setSearchQuery(query);
};

const handleSort = (field) => {
  if (sortBy === field) {
    setSortOrder(sortOrder === 'asc'? 'desc' : 'asc');
  } else {
    setSortBy(field);
    setSortOrder('asc');
  };
};

const filteredTransactions = transactions.filter((transaction) => {
  return transaction.description.toLowerCase().includes(searchQuery.toLowerCase());
});

const sortedTransactions = () => {
  let sorted = [...filteredTransactions];
  if (sortBy === 'description') {
    sorted = sorted.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sorted === 'category' ){
    sorted = sorted.sort((a, b) => a.category.localeCompare(b.category));
  }
  return sortOrder === 'desc' ? sorted.reverse() : sorted;
};

return(
  <div>
    <h1>Bank Transactions</h1>
    <Transform onSubmit = {handleAddTransaction}/>
    <SearchBar onSearch = {handleSearch}/>
    <div>
      <button onClick={() => handleSort('description')}>Sort by Description</button>
      <button onClick={() => handleSort('category')}>Sort by Category</button>
    </div>
    <TransTable transactions = {sortedTransactions()}/>
  </div>
);
};
export default App;

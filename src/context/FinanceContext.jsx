// Finance Context - Manages all financial data and state for the dashboard
// I created this context to share data between all components without prop drilling
import { createContext, useContext, useState, useEffect } from 'react';
import { generateMockTransactions } from '../data/mockData';

const FinanceContext = createContext();

export function FinanceProvider({ children }) {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('finance_transactions');
    return saved ? JSON.parse(saved) : generateMockTransactions();
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem('finance_role') || 'admin';
  });

  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    category: 'all',
    status: 'all',
    dateFrom: '',
    dateTo: ''
  });

  const [sortConfig, setSortConfig] = useState({
    key: 'date',
    direction: 'desc'
  });

  // Save to localStorage whenever transactions or role changes
  useEffect(() => {
    localStorage.setItem('finance_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('finance_role', role);
  }, [role]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: `TXN${String(transactions.length + 1).padStart(5, '0')}`,
      status: 'completed'
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const updateTransaction = (id, updates) => {
    setTransactions(transactions.map(t =>
      t.id === id ? { ...t, ...updates } : t
    ));
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const resetData = () => {
    const newTransactions = generateMockTransactions();
    setTransactions(newTransactions);
  };

  const exportData = (format = 'json') => {
    const dataStr = format === 'json'
      ? JSON.stringify(transactions, null, 2)
      : convertToCSV(transactions);

    const blob = new Blob([dataStr], {
      type: format === 'json' ? 'application/json' : 'text/csv'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `transactions_${new Date().toISOString().split('T')[0]}.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const convertToCSV = (data) => {
    const headers = ['ID', 'Date', 'Type', 'Category', 'Amount', 'Description', 'Status'];
    const rows = data.map(t => [
      t.id,
      t.date,
      t.type,
      t.category,
      t.amount,
      t.description,
      t.status
    ]);

    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const value = {
    transactions,
    role,
    setRole,
    filters,
    setFilters,
    sortConfig,
    setSortConfig,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    resetData,
    exportData
  };

  return (
    <FinanceContext.Provider value={value}>
      {children}
    </FinanceContext.Provider>
  );
}

export function useFinance() {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within FinanceProvider');
  }
  return context;
}

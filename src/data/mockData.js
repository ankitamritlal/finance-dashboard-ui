// Mock data generation for the Finance Dashboard
// Creates realistic financial transactions for demo purposes

// Generate mock transactions - creates realistic financial data for demo purposes
export const generateMockTransactions = () => {
  const categories = ['Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 'Bills & Utilities', 'Healthcare', 'Salary', 'Freelance', 'Investment', 'Other'];
  const transactions = [];

  // Generate transactions for the last 6 months - I wanted to show historical data
  for (let i = 0; i < 150; i++) {
    const isIncome = Math.random() > 0.7; // 30% chance of income transactions
    const category = isIncome
      ? categories[Math.floor(Math.random() * 3) + 6] // Salary, Freelance, Investment
      : categories[Math.floor(Math.random() * 6)]; // Expense categories

    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 180)); // Random date within 6 months

    // Indian Rupee amounts - I converted from USD to INR for local currency
    transactions.push({
      id: `TXN${String(i + 1).padStart(5, '0')}`,
      date: date.toISOString().split('T')[0],
      amount: isIncome
        ? Math.floor(Math.random() * 400000) + 80000  // ₹80,000 to ₹480,000 for income
        : Math.floor(Math.random() * 40000) + 800,    // ₹800 to ₹40,800 for expenses
      category,
      type: isIncome ? 'income' : 'expense',
      description: `${isIncome ? 'Payment from' : 'Payment to'} ${category}`,
      status: Math.random() > 0.1 ? 'completed' : 'pending'
    });
  }

  return transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
};
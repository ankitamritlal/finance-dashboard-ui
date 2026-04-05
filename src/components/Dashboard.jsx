import { useFinance } from '../context/FinanceContext';
import { TrendingUp, TrendingDown, DollarSign, Wallet, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui';

export function Dashboard() {
  const { transactions } = useFinance();

  // Calculate summary statistics
  const totalIncome = transactions
    .filter(t => t.type === 'income' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  // Calculate this month's data
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const thisMonthTransactions = transactions.filter(t => {
    const date = new Date(t.date);
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  });

  const thisMonthIncome = thisMonthTransactions
    .filter(t => t.type === 'income' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  const thisMonthExpenses = thisMonthTransactions
    .filter(t => t.type === 'expense' && t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  // Calculate highest spending category for insights
  const categoryTotals = {};
  transactions
    .filter(t => t.type === 'expense' && t.status === 'completed')
    .forEach(t => {
      categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
    });

  const highestCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0];

  // Calculate monthly comparison
  const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const lastMonthExpenses = transactions
    .filter(t => {
      const date = new Date(t.date);
      return t.type === 'expense' &&
             t.status === 'completed' &&
             date.getMonth() === lastMonth &&
             date.getFullYear() === lastMonthYear;
    })
    .reduce((sum, t) => sum + t.amount, 0);

  const monthlyChange = lastMonthExpenses > 0
    ? ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses * 100).toFixed(1)
    : 0;

  // Calculate average transaction
  const completedTransactions = transactions.filter(t => t.status === 'completed');
  const avgTransaction = completedTransactions.length > 0
    ? completedTransactions.reduce((sum, t) => sum + t.amount, 0) / completedTransactions.length
    : 0;

  // Calculate most frequent transaction day
  const dayFrequency = {};
  transactions.forEach(t => {
    const day = new Date(t.date).toLocaleDateString('en-US', { weekday: 'long' });
    dayFrequency[day] = (dayFrequency[day] || 0) + 1;
  });

  const mostFrequentDay = Object.entries(dayFrequency)
    .sort((a, b) => b[1] - a[1])[0];

  const summaryCards = [
    {
      title: 'Total Balance',
      value: balance,
      icon: Wallet,
      trend: balance > 0 ? 'up' : 'down',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      title: 'Total Income',
      value: totalIncome,
      icon: TrendingUp,
      trend: 'up',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      subtitle: `₹${thisMonthIncome.toFixed(2)} this month`
    },
    {
      title: 'Total Expenses',
      value: totalExpenses,
      icon: TrendingDown,
      trend: 'down',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
      subtitle: `₹${thisMonthExpenses.toFixed(2)} this month`
    },
    {
      title: 'Transactions',
      value: transactions.length,
      icon: DollarSign,
      isCount: true,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      subtitle: `${thisMonthTransactions.length} this month`
    }
  ];

  const insights = [
    {
      title: 'Highest Spending Category',
      value: highestCategory ? highestCategory[0] : 'N/A',
      subValue: highestCategory ? `₹${highestCategory[1].toFixed(2)}` : '',
      icon: Award,
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30'
    },
    {
      title: 'Monthly Spending Trend',
      value: monthlyChange > 0 ? `+${monthlyChange}%` : `${monthlyChange}%`,
      subValue: `vs last month`,
      icon: monthlyChange > 0 ? TrendingUp : TrendingDown,
      color: monthlyChange > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400',
      bgColor: monthlyChange > 0 ? 'bg-red-50 dark:bg-red-950/30' : 'bg-green-50 dark:bg-green-950/30'
    },
    {
      title: 'Average Transaction',
      value: `₹${avgTransaction.toFixed(2)}`,
      subValue: `${completedTransactions.length} total`,
      icon: TrendingUp,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      title: 'Most Active Day',
      value: mostFrequentDay ? mostFrequentDay[0] : 'N/A',
      subValue: mostFrequentDay ? `${mostFrequentDay[1]} transactions` : '',
      icon: Calendar,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-950/30'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2">{card.title}</p>
                    <p className="text-2xl font-semibold mb-1">
                      {card.isCount ? card.value : `₹${card.value.toFixed(2)}`}
                    </p>
                    {card.subtitle && (
                      <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                    )}
                  </div>
                  <div className={`p-3 rounded-full ${card.bgColor}`}>
                    <Icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Financial Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Financial Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.title} className="p-4 rounded-lg border bg-card">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">{insight.title}</p>
                      <p className="text-xl font-semibold mb-1">{insight.value}</p>
                      {insight.subValue && (
                        <p className="text-xs text-muted-foreground">{insight.subValue}</p>
                      )}
                    </div>
                    <div className={`p-2 rounded-full ${insight.bgColor}`}>
                      <Icon className={`h-5 w-5 ${insight.color}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
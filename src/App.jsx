// Main App component - Entry point for the Finance Dashboard
// Features: Theme provider, finance context, responsive layout
// This component serves as the root of our application, providing:
// 1. Theme management (light/dark mode)
// 2. Global state management via FinanceContext
// 3. Responsive layout with custom background
// 4. Component composition and layout structure
import { ThemeProvider } from 'next-themes';
import { FinanceProvider } from './context/FinanceContext';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { BalanceChart, SpendingChart } from './components/Charts';
import { TransactionsTable } from './components/TransactionsTable';
import { Toaster } from './components/ui';

// This is the main App component that wraps everything together
// I learned that React apps need a root component that provides context and layout
// The component tree flows: App > FinanceProvider > ThemeProvider > Layout > Components
export default function App() {
  return (
    // ThemeProvider lets users switch between light and dark modes
    // I added this to make the app more user-friendly
    // The 'attribute="class"' applies theme classes to the html element
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* FinanceProvider gives all components access to financial data */}
      {/* This context provides transactions, filters, and CRUD operations */}
      <FinanceProvider>
        {/* Main container with minimum height and background */}
        <div className="min-h-screen bg-background relative">
          {/* This is a custom background I created for the finance theme */}
          {/* It has gradients and subtle patterns to make it look professional */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Base gradient background that changes with theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

            {/* Grid pattern overlay - subtle but adds texture */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>

            {/* Blur elements for visual interest - positioned strategically */}
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent dark:from-blue-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-gradient-to-br from-green-200/20 to-transparent dark:from-green-900/20 rounded-full blur-3xl"></div>
          </div>

          {/* Header component - navigation and theme toggle */}
          <Header />

          {/* Main content area - responsive grid layout */}
          <main className="container mx-auto px-4 py-8 space-y-8 relative">
            {/* Dashboard section - shows key financial metrics and insights */}
            <section>
              <Dashboard />
            </section>

            {/* Charts section - displays balance and spending data visually */}
            <section className="grid gap-6 lg:grid-cols-2">
              <BalanceChart />
              <SpendingChart />
            </section>

            {/* Transactions table - shows all financial transactions with filtering */}
            <section>
              <TransactionsTable />
            </section>
          </main>

          {/* Footer - simple copyright notice */}
          <footer className="border-t py-6 mt-12 bg-background/80 backdrop-blur-sm relative">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p>Finance Dashboard - My First React Project</p>
              <p className="mt-1">Built by Ankit Yadav with React, Vite, Tailwind CSS, and Recharts</p>
            </div>
          </footer>
        </div>
        {/* Toaster component for showing notifications - really useful for user feedback */}
        <Toaster />
      </FinanceProvider>
    </ThemeProvider>
  );
}


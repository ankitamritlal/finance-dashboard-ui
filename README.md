# Finance Dashboard

> **Internship Project Submission** - A modern, responsive finance dashboard built with React and modern web technologies. This project demonstrates full-stack development skills including state management, data visualization, CRUD operations, and user interface design.

## ✨ Features

- **📊 Dashboard Overview**: Summary cards displaying total balance, income, expenses, transaction count, and financial insights
- **📈 Interactive Charts**: Line chart for balance trends over time and pie chart for spending categories breakdown
- **💰 Transaction Management**: Complete CRUD operations (Create, Read, Update, Delete) with advanced filtering and sorting
- **🔍 Advanced Filtering**: Search by description, filter by type, category, status, and date range
- **👤 Role-Based Access**: Admin (full access) and Viewer (read-only) roles with different permissions
- **🌙 Dark/Light Mode**: Theme switching with system preference detection and manual toggle
- **📱 Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **💾 Data Persistence**: Local storage integration for data persistence across sessions
- **📤 Data Export**: Export transaction data as JSON or CSV files
- **🔄 Data Reset**: Reset functionality to generate fresh mock data
- **🔔 Toast Notifications**: User feedback for all actions and state changes
- **🎨 Modern UI**: Beautiful design with shadcn/ui components and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4, shadcn/ui component library
- **Charts & Visualization**: Recharts library
- **Icons**: Lucide React
- **State Management**: React Context API
- **Theming**: next-themes
- **Notifications**: Sonner toast library
- **Date Handling**: date-fns
- **UI Components**: Radix UI primitives (Dialogs, Selects, etc.)
- **Animations**: Motion library
- **Form Handling**: React Hook Form
- **Drag & Drop**: React DnD

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ankitamritlal/finance-dashboard.git
cd finance-dashboard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
finance-dashboard/
├── index.html                 # HTML template with meta tags
├── vite.config.js            # Vite configuration with Tailwind
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── src/
    ├── main.jsx              # Application entry point
    ├── App.jsx               # Main application component
    ├── components/
    │   ├── ui.jsx            # Consolidated shadcn/ui components
    │   ├── Charts.jsx        # Balance and spending chart components
    │   ├── Dashboard.jsx     # Summary cards and financial insights
    │   ├── Header.jsx        # Navigation, theme toggle, role switcher
    │   └── TransactionsTable.jsx # CRUD table with filtering/sorting
    ├── context/
    │   └── FinanceContext.jsx # Global state management
    ├── data/
    │   └── mockData.js       # Mock transaction data generation
    ├── pages/                 # Page components (for future routing)
    └── styles/
        ├── index.css         # Global styles and Tailwind imports
        ├── fonts.css         # Custom font definitions
        ├── tailwind.css      # Tailwind base styles
        └── theme.css         # Theme-specific styles
```

## 🎯 Usage

### Dashboard Features
- **Summary Cards**: View total balance, income, expenses, and transaction statistics
- **Monthly Insights**: Compare current month spending with previous month
- **Category Analysis**: Identify highest spending categories and patterns
- **Transaction Frequency**: See most active transaction days

### Chart Visualization
- **Balance Trend Chart**: Line chart showing balance progression over time
- **Spending Breakdown**: Pie chart categorizing expenses by type

### Transaction Management
- **Add Transactions**: Create new income or expense entries
- **Edit Transactions**: Update existing transaction details
- **Delete Transactions**: Remove transactions with confirmation
- **Search & Filter**: Find transactions by description, category, date, etc.
- **Sort Options**: Sort by date, amount, category, or status
- **Bulk Export**: Download data in JSON or CSV format

### User Experience
- **Theme Toggle**: Switch between light and dark modes
- **Role Switching**: Change between Admin and Viewer modes
- **Data Reset**: Generate fresh mock data for testing
- **Responsive Layout**: Optimized for desktop, tablet, and mobile

## 🎯 What This Project Demonstrates

This finance dashboard showcases modern web development skills and best practices:

- **React Development**: Component-based architecture, hooks, context API, custom hooks
- **Modern JavaScript**: ES6+ features, async/await, destructuring, array methods
- **State Management**: Complex state handling with React Context and localStorage
- **Data Visualization**: Interactive charts with Recharts library
- **UI/UX Design**: Responsive design, dark/light themes, accessibility considerations
- **CRUD Operations**: Full create, read, update, delete functionality
- **Form Handling**: Controlled components, validation, and user feedback
- **Build Tools**: Vite for fast development and optimized production builds
- **Component Libraries**: shadcn/ui for consistent, accessible UI components
- **Styling**: Utility-first CSS with Tailwind, custom themes and animations
- **Code Quality**: Clean code structure, meaningful comments, and documentation
- **Performance**: Optimized rendering, memoization, and efficient state updates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankit Yadav**
- GitHub: [@ankitamritlal](https://github.com/ankitamritlal)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful and accessible UI components
- [Recharts](https://recharts.org/) for powerful data visualization
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Radix UI](https://www.radix-ui.com/) for unstyled, accessible component primitives
- [Vite](https://vitejs.dev/) for lightning-fast development experience
- [Lucide React](https://lucide.dev/) for consistent iconography
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management
- [Sonner](https://sonner.emilkowal.ski/) for elegant toast notifications

### Transaction Management
- **Add Transactions**: Create new income or expense entries with date, category, amount, and description
- **Edit Transactions**: Update existing transaction details (Admin role only)
- **Delete Transactions**: Remove transactions with confirmation dialog (Admin role only)
- **Search & Filter**: Find transactions by description, category, date, etc.
- **Sort Options**: Sort by date, amount, category, or status
- **Bulk Export**: Download data in JSON or CSV format

### User Experience
- **Theme Toggle**: Switch between light and dark modes with smooth transitions
- **Role Switching**: Change between Admin (full CRUD access) and Viewer (read-only) modes
- **Data Reset**: Generate fresh mock data for testing (Admin role only)
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Toast Notifications**: Real-time feedback for all user actions

### Data Features
- **Local Storage**: All data persists across browser sessions
- **Mock Data Generation**: 150+ realistic transactions with Indian Rupee amounts
- **Real-time Updates**: All components update instantly when data changes
- **Data Validation**: Form validation and error handling

## 🎯 What This Project Demonstrates

This finance dashboard showcases modern web development skills and best practices:

- **React Development**: Component-based architecture, hooks, context API
- **Modern JavaScript**: ES6+ features, async/await, destructuring
- **UI/UX Design**: Responsive design, dark/light themes, accessibility
- **Data Management**: State management, CRUD operations, data persistence
- **Data Visualization**: Interactive charts and graphs
- **Build Tools**: Vite for fast development and optimized production builds
- **Styling**: Utility-first CSS with Tailwind, component libraries
- **Code Quality**: Clean code structure, comments, and documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ankit Yadav**
- GitHub: [@ankitamritlal](https://github.com/ankitamritlal)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/ankit-yadav-2953a4325/)
- Email: ankjjf@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Recharts](https://recharts.org/) for data visualization
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for fast development experience

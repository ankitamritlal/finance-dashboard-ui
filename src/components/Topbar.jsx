// Topbar component - Navigation bar with theme toggle and user role selector
// I built this to let users switch between different finance roles and themes
import { useApp } from '../context/AppContext';
import { User, Shield, Moon, Sun, RefreshCw } from 'lucide-react';
import { Button } from './ui';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

export function Topbar() {
  const { role, setRole, resetData } = useApp();
  const { theme, setTheme } = useTheme();
  
  // Function to handle role changes - shows a toast notification
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    toast.success(`Role switched to ${newRole.charAt(0).toUpperCase() + newRole.slice(1)}`);
  };
  
  // Function to reset all data - asks for confirmation first
  const handleResetData = () => {
    if (confirm('Are you sure you want to reset all data? This will generate new mock transactions.')) {
      resetData();
      toast.success('Data has been reset');
    }
  };
  
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Finance Dashboard</h1>
            <p className="text-sm text-muted-foreground">Track and manage your financial activity</p>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            {/* Role Switcher */}
            <div className="flex items-center gap-2 p-2 rounded-lg border bg-background">
              <div className="flex items-center gap-2 px-2">
                {role === 'admin' ? (
                  <Shield className="h-4 w-4 text-primary" />
                ) : (
                  <User className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-sm font-medium">Role:</span>
              </div>
              <Select value={role} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-32 border-0 shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Admin
                    </div>
                  </SelectItem>
                  <SelectItem value="viewer">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Viewer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Reset Data Button */}
            {role === 'admin' && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResetData}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Reset Data
              </Button>
            )}
            
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


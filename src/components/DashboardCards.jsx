import { Link } from 'react-router-dom';  // Import Link
import { CheckSquare, Box } from 'lucide-react';

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {/* Card 1 - Task Manager */}
      <Link to="/Tasks">
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-center flex-col text-center">
            <CheckSquare className="text-indigo-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Task Manager</h2>
            <p className="text-gray-600">
              Manage your daily tasks and stay organized
            </p>
          </div>
        </div>
      </Link>

      {/* Card 2 - Shopping Cart */}
      <Link to="/Cart">
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center justify-center flex-col text-center">
            <Box className="text-indigo-500 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Shopping Cart</h2>
            <p className="text-gray-600">
              Browse and manage your cart items
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

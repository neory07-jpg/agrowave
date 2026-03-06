import { useState, useEffect } from 'react'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Subscriptions from './pages/Subscriptions'
import AdminPanel from './pages/AdminPanel'
import Navigation from './components/Navigation'

export default function App() {
  const [currentPage, setCurrentPage] = useState('signup')
  const [user, setUser] = useState(null)
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Farmers', product: 'Premium Fertilizer', quantity: 100, amount: 5000, status: 'pending', date: '2024-03-01' },
    { id: 2, customerName: 'Jane Gardens', product: 'Organic Seeds', quantity: 50, amount: 2500, status: 'pending', date: '2024-03-02' },
    { id: 3, customerName: 'Bob Harvest', product: 'Irrigation Kit', quantity: 25, amount: 8000, status: 'completed', date: '2024-02-28' },
  ])

  useEffect(() => {
    const savedUser = localStorage.getItem('agrowave_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setCurrentPage('dashboard')
    }
  }, [])

  const handleSignup = (userData) => {
    setUser(userData)
    localStorage.setItem('agrowave_user', JSON.stringify(userData))
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('agrowave_user')
    setCurrentPage('signup')
  }

  const handleConfirmOrder = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: 'completed' } : order
    ))
  }

  const handleRejectOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId))
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  if (!user) {
    return <Signup onSignup={handleSignup} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        userRole={user.role}
        onLogout={handleLogout}
      />

      <main className="pt-20">
        {currentPage === 'dashboard' && <Dashboard user={user} />}
        {currentPage === 'subscriptions' && <Subscriptions user={user} />}
        {currentPage === 'admin' && (
          <AdminPanel 
            orders={orders}
            onConfirmOrder={handleConfirmOrder}
            onRejectOrder={handleRejectOrder}
          />
        )}
      </main>
    </div>
  )
}
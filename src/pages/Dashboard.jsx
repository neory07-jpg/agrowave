import { useState, useEffect } from 'react'

export default function Dashboard({ user }) {
  const [stats, setStats] = useState({
    totalOrders: 12,
    totalRevenue: 45000,
    pendingOrders: 3,
    completedOrders: 9
  })

  const [recentOrders, setRecentOrders] = useState([
    { id: 1, product: 'Premium Fertilizer', quantity: 100, date: '2024-03-05', status: 'completed', amount: 5000 },
    { id: 2, product: 'Organic Seeds', quantity: 50, date: '2024-03-04', status: 'pending', amount: 2500 },
    { id: 3, product: 'Irrigation Kit', quantity: 25, date: '2024-03-03', status: 'completed', amount: 8000 },
    { id: 4, product: 'Pest Control', quantity: 20, date: '2024-03-02', status: 'completed', amount: 3000 },
  ])

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome, {user.fullName}!</h1>
        <p className="text-lg text-slate-600">{user.farmName} • Joined {user.joinDate}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-slate-900">{stats.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl font-bold">
              📦
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-slate-900">₦{stats.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-xl font-bold">
              💰
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Pending Orders</p>
              <p className="text-3xl font-bold text-slate-900">{stats.pendingOrders}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-xl font-bold">
              ⏳
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Completed Orders</p>
              <p className="text-3xl font-bold text-slate-900">{stats.completedOrders}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl font-bold">
              ✅
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900">Recent Orders</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(order => (
                <tr key={order.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                  <td className="px-6 py-4 text-slate-900 font-medium">{order.product}</td>
                  <td className="px-6 py-4 text-slate-600">{order.quantity} units</td>
                  <td className="px-6 py-4 text-slate-900 font-semibold">₦{order.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-slate-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      order.status === 'completed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Place New Order</h3>
          <p className="text-blue-100 mb-4">Order premium agricultural products for your farm</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition">
            Order Now
          </button>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Manage Subscription</h3>
          <p className="text-emerald-100 mb-4">Upgrade, downgrade, or manage your active subscriptions</p>
          <button className="bg-white text-emerald-600 px-6 py-2 rounded-lg font-bold hover:bg-emerald-50 transition">
            View Plans
          </button>
        </div>
      </div>
    </div>
  )
}
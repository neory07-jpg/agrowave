import { useState } from 'react'

export default function AdminPanel({ orders, onConfirmOrder, onRejectOrder }) {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOrders = orders.filter(order => {
    const matchesFilter = filter === 'all' || order.status === filter
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter(o => o.status === 'pending').length,
    completedOrders: orders.filter(o => o.status === 'completed').length,
    totalRevenue: orders.reduce((sum, order) => sum + order.amount, 0)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Admin Panel</h1>
        <p className="text-lg text-slate-600">Manage orders and confirm transactions</p>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-slate-900">{stats.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
              📋
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Pending Orders</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.pendingOrders}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 text-xl">
              ⏳
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Completed Orders</p>
              <p className="text-3xl font-bold text-green-600">{stats.completedOrders}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-semibold mb-1">Total Revenue</p>
              <p className="text-3xl font-bold text-slate-900">₦{(stats.totalRevenue / 1000).toFixed(0)}K</p>
            </div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-xl">
              💰
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900">Order Management</h2>

            {/* Search & Filter */}
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Search by customer or product..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Product</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-600">
                    No orders found
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => (
                  <tr key={order.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                    <td className="px-6 py-4 text-slate-900 font-medium">{order.customerName}</td>
                    <td className="px-6 py-4 text-slate-600">{order.product}</td>
                    <td className="px-6 py-4 text-slate-600">{order.quantity} units</td>
                    <td className="px-6 py-4 text-slate-900 font-bold">₦{order.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-slate-600">{order.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${
                        order.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {order.status === 'pending' && (
                          <>
                            <button
                              onClick={() => onConfirmOrder(order.id)}
                              className="px-3 py-1 bg-green-600 text-white text-sm font-bold rounded-lg hover:bg-green-700 transition"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => onRejectOrder(order.id)}
                              className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-lg hover:bg-red-700 transition"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {order.status === 'completed' && (
                          <span className="text-xs text-slate-500 italic">No actions</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-blue-100">
              <span>Orders Confirmed Today</span>
              <span className="text-2xl font-bold">5</span>
            </div>
            <div className="flex justify-between items-center text-blue-100">
              <span>Pending Confirmation</span>
              <span className="text-2xl font-bold">{stats.pendingOrders}</span>
            </div>
            <div className="flex justify-between items-center text-blue-100">
              <span>Revenue Today</span>
              <span className="text-2xl font-bold">₦25,000</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">System Health</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-emerald-100">
              <span>Database Status</span>
              <span className="text-lg font-bold">✅ Healthy</span>
            </div>
            <div className="flex justify-between items-center text-emerald-100">
              <span>API Response Time</span>
              <span className="text-lg font-bold">45ms</span>
            </div>
            <div className="flex justify-between items-center text-emerald-100">
              <span>Active Users</span>
              <span className="text-lg font-bold">127</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
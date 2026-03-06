import { useState } from 'react'

export default function Signup({ onSignup }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    farmName: '',
    role: 'user',
    acceptTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.acceptTerms) {
      alert('Please accept the terms and conditions')
      return
    }
    
    const userData = {
      id: Math.random().toString(36).substr(2, 9),
      email: formData.email,
      fullName: formData.fullName,
      farmName: formData.farmName,
      role: formData.role,
      joinDate: new Date().toLocaleDateString(),
      subscription: null
    }
    
    onSignup(userData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold text-white">A</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">AgroWave</h1>
            <p className="text-slate-600">Modern Agribusiness Management Platform</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Farmer"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Farm Name
              </label>
              <input
                type="text"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                placeholder="My Farm Ltd"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Account Type
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="user">Farmer / User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-sm text-slate-600">
                I agree to the{' '}
                <span className="text-blue-600 font-semibold">Terms & Conditions</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition duration-200 mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs text-slate-600 font-semibold mb-2">DEMO CREDENTIALS:</p>
            <p className="text-xs text-slate-600">Try admin role to access the Admin Panel</p>
          </div>
        </div>
      </div>
    </div>
  )
}
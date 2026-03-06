export default function Navigation({ currentPage, onNavigate, userRole, onLogout }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <h1 className="text-2xl font-bold text-slate-900">AgroWave</h1>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === 'dashboard'
                ? 'bg-blue-100 text-blue-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => onNavigate('subscriptions')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === 'subscriptions'
                ? 'bg-blue-100 text-blue-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Subscriptions
          </button>

          {userRole === 'admin' && (
            <button
              onClick={() => onNavigate('admin')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === 'admin'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Admin Panel
            </button>
          )}

          <button
            onClick={onLogout}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
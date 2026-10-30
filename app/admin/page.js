'use client';
import React, { useState } from 'react';

export default function AdminDashboard() {
  // Mock Data representing live registered users
  const [users, setUsers] = useState([
    { id: 1, name: 'Natalie', email: 'natalie@example.com', balance: 0, profit: 0, status: 'Pending Deposit' },
    { id: 2, name: 'David K.', email: 'david@example.com', balance: 1500, profit: 120, status: 'Active' },
  ]);

  const updateBalance = (id, newBalance) => {
    setUsers(users.map(u => u.id === id ? { ...u, balance: parseFloat(newBalance) || 0 } : u));
  };

  return (
    <div className="bg-[#0A0D14] text-white min-h-screen p-6 font-sans">
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-red-500">Steadfast Capital Admin Control</h1>
          <p className="text-xs text-gray-400">Master Overview & Financial Approvals</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111520] border border-gray-800 p-6 rounded-2xl">
          <p className="text-xs text-gray-400">Total Registered Users</p>
          <h3 className="text-3xl font-extrabold mt-2">{users.length}</h3>
        </div>
        <div className="bg-[#111520] border border-gray-800 p-6 rounded-2xl">
          <p className="text-xs text-gray-400">Pending Deposit Requests</p>
          <h3 className="text-3xl font-extrabold text-amber-400 mt-2">1 Request</h3>
        </div>
        <div className="bg-[#111520] border border-gray-800 p-6 rounded-2xl">
          <p className="text-xs text-gray-400">Total Managed Capital</p>
          <h3 className="text-3xl font-extrabold text-emerald-400 mt-2">
            ${users.reduce((acc, u) => acc + u.balance, 0).toLocaleString()}
          </h3>
        </div>
      </div>

      {/* User Management Table */}
      <div className="max-w-6xl mx-auto bg-[#111520] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold">Registered Users & Balance Control</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-300">
            <thead className="bg-[#0A0D14] text-xs text-gray-400 uppercase">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Status</th>
                <th className="p-4">Current Balance ($)</th>
                <th className="p-4">Quick Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-900/50">
                  <td className="p-4">
                    <p className="font-bold text-white">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <input 
                      type="number" 
                      value={user.balance} 
                      onChange={(e) => updateBalance(user.id, e.target.value)}
                      className="bg-[#0A0D14] border border-gray-700 px-3 py-1.5 rounded-lg text-white font-mono w-32 focus:outline-none focus:border-red-500"
                    />
                  </td>
                  <td className="p-4 space-x-2">
                    <button 
                      onClick={() => alert(`Approved deposit for ${user.name}`)}
                      className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-bold hover:bg-emerald-500/30">
                      Approve Deposit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

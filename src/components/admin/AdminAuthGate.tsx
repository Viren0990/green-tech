'use client';

import { useState, useCallback } from 'react';
import { Lock, Eye, EyeOff, Loader2 } from 'lucide-react';

interface AdminAuthGateProps {
  children: React.ReactNode;
  title?: string;
}

export default function AdminAuthGate({ children, title = 'Admin Panel' }: AdminAuthGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuth = useCallback(async () => {
    if (!password.trim()) {
      setAuthError('Please enter the admin password');
      return;
    }
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        setAuthError(data.error || 'Invalid password');
      }
    } catch {
      setAuthError('Network error. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  }, [password]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="w-full max-w-md relative z-10">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
            {/* Lock icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Lock size={28} className="text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 text-center mb-1">{title}</h1>
            <p className="text-gray-500 text-center text-sm mb-8">Enter admin password to continue</p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAuth()}
                  placeholder="Admin password"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition pr-12"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {authError && (
                <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-2.5 text-red-600 text-sm">
                  {authError}
                </div>
              )}

              <button
                onClick={handleAuth}
                disabled={authLoading}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 rounded-xl transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/20"
              >
                {authLoading ? <Loader2 className="animate-spin" size={20} /> : 'Unlock Access'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

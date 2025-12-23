// app/dashboard/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Store,
  DollarSign,
  Eye,
  MessageCircle,
  Plus,
  BarChart3,
  LogOut,
  Sparkles,
  Target,
  Camera,
  Star
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('linkup_user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('linkup_user');
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="text-center">
          <div className="animate-pulse-glow w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"></div>
          <div className="text-2xl font-semibold text-gray-700">Loading your dashboard...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Enhanced Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center group">
              <img
                src="/linkup_logo.PNG"
                alt="LinkUp Marketplace"
                className="h-16 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="ml-3 text-2xl font-bold gradient-text hidden sm:block">LinkUp</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-semibold">Welcome back, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Welcome to your Dashboard! 🎉</h1>
                <p className="text-purple-100">Manage your services and track your success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          {/* Main Actions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/post-service">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Plus className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Post New Service</h3>
                      <p className="text-gray-600 text-sm">Add a new listing to attract customers</p>
                    </div>
                  </div>
                  <div className="text-purple-600 font-semibold text-sm">Get started →</div>
                </div>
              </Link>

              <Link href="/">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Store className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">Browse Marketplace</h3>
                      <p className="text-gray-600 text-sm">Explore services and get inspired</p>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm">Explore now →</div>
                </div>
              </Link>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">View Analytics</h3>
                    <p className="text-gray-600 text-sm">Track your performance and growth</p>
                  </div>
                </div>
                <div className="text-green-600 font-semibold text-sm">Coming soon →</div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 card-hover group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Customer Messages</h3>
                    <p className="text-gray-600 text-sm">Respond to inquiries and reviews</p>
                  </div>
                </div>
                <div className="text-orange-600 font-semibold text-sm">in app chat coming soon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips & Insights */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-100 rounded-2xl">
              <Target className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Tips to Boost Your Success</h2>
              <p className="text-gray-600">Quick ways to improve your listings and attract more customers</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Add High-Quality Photos</h3>
              <p className="text-sm text-gray-600">Listings with multiple photos get 3x more views</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Respond Quickly</h3>
              <p className="text-sm text-gray-600">Reply within 1 hour to increase booking rates</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Collect Reviews</h3>
              <p className="text-sm text-gray-600">5-star reviews boost your visibility in search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
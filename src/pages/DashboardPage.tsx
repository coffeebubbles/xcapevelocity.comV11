import React, { useState } from 'react';
import { useAuthStore } from '../stores/authStore';
import { Calendar, Users, Settings, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ConsultationDiary } from '../components/ConsultationDiary';

export function DashboardPage() {
  const { profile } = useAuthStore();
  const [isDiaryOpen, setIsDiaryOpen] = useState(false);

  const renderSuperAdminDashboard = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">User Management</h3>
        <p className="text-gray-400 mb-6">Manage user accounts, roles, and permissions</p>
        <Link
          to="/admin/users"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          Manage Users
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div 
        className="bg-[#111111] rounded-3xl p-8 cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
        onClick={() => setIsDiaryOpen(true)}
      >
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Consultation Calendar</h3>
        <p className="text-gray-400 mb-6">Manage consultation slots and bookings</p>
        <div className="flex items-center gap-2 text-[#FFD700] group-hover:gap-3 transition-all">
          Manage Calendar
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">System Settings</h3>
        <p className="text-gray-400 mb-6">Configure system-wide settings and preferences</p>
        <Link
          to="/admin/settings"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          Manage Settings
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  const renderAgencyDashboard = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Users className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Client Management</h3>
        <p className="text-gray-400 mb-6">Manage your client accounts and projects</p>
        <Link
          to="/agency/clients"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Clients
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Consultations</h3>
        <p className="text-gray-400 mb-6">Manage your consultation schedule</p>
        <Link
          to="/agency/consultations"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Schedule
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Reports</h3>
        <p className="text-gray-400 mb-6">View analytics and generate reports</p>
        <Link
          to="/agency/reports"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Reports
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  const renderClientDashboard = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Calendar className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">My Consultations</h3>
        <p className="text-gray-400 mb-6">View and manage your consultation bookings</p>
        <Link
          to="/client/consultations"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Bookings
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <FileText className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">My Projects</h3>
        <p className="text-gray-400 mb-6">View your active projects and progress</p>
        <Link
          to="/client/projects"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="bg-[#111111] rounded-3xl p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#FFD700] rounded-2xl transform translate-y-2 opacity-75"></div>
          <div className="relative bg-[#FFD700] w-16 h-16 rounded-2xl flex items-center justify-center">
            <Settings className="w-8 h-8 text-black" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">Account Settings</h3>
        <p className="text-gray-400 mb-6">Manage your account preferences</p>
        <Link
          to="/client/settings"
          className="flex items-center gap-2 text-[#FFD700] hover:gap-3 transition-all"
        >
          View Settings
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-black text-center mb-6 text-[#FFD700]">
          Dashboard
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Welcome back{profile?.company_name ? `, ${profile.company_name}` : ''}
        </p>

        {profile?.role === 'super_admin' && renderSuperAdminDashboard()}
        {profile?.role === 'agency' && renderAgencyDashboard()}
        {profile?.role === 'client' && renderClientDashboard()}

        <ConsultationDiary
          isOpen={isDiaryOpen}
          onClose={() => setIsDiaryOpen(false)}
        />
      </div>
    </section>
  );
}
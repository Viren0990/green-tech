import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import { 
  FileText, 
  Upload, 
  MessageSquare, 
  Trash2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function AdminDashboardPage() {
  const adminLinks = [
    {
      title: 'Invoice Generator',
      description: 'Create and download PDF invoices for clients.',
      href: '/admin/invoice',
      icon: <FileText className="w-8 h-8 text-emerald-500" />,
      color: 'bg-emerald-50 border-emerald-100',
      iconBg: 'bg-emerald-100'
    },
    {
      title: 'Invoices Archive',
      description: 'View and regenerate past invoices from the database.',
      href: '/admin/admin1/invoices',
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      color: 'bg-purple-50 border-purple-100',
      iconBg: 'bg-purple-100'
    },
    {
      title: 'Upload New Post',
      description: 'Share your latest e-waste transformation stories.',
      href: '/admin/admin1/upload',
      icon: <Upload className="w-8 h-8 text-blue-500" />,
      color: 'bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-100'
    },
    {
      title: 'Manage Submissions',
      description: 'View and handle user contact and query submissions.',
      href: '/admin/admin1/submits',
      icon: <MessageSquare className="w-8 h-8 text-amber-500" />,
      color: 'bg-amber-50 border-amber-100',
      iconBg: 'bg-amber-100'
    },
    {
      title: 'Manage Deletes',
      description: 'Review and manage deleted posts or content.',
      href: '/admin/admin1/deletes',
      icon: <Trash2 className="w-8 h-8 text-rose-500" />,
      color: 'bg-rose-50 border-rose-100',
      iconBg: 'bg-rose-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Control Panel</h1>
            <p className="text-gray-500 mt-1">Manage DMD GREENTECH REVIVE tools and content</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`group flex items-start p-6 bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${link.color}`}
            >
              <div className={`p-4 rounded-xl mr-5 ${link.iconBg} transition-transform group-hover:scale-110`}>
                {link.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </div>

              <div className="mt-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-gray-400">
                <ChevronRight className="w-6 h-6" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

import AdminPostForm from '@/src/components/admin/AdminPostForm';
import Navbar from '@/src/components/Navbar';

export default function AdminPostsPage() {
  return (
    <div>
        <Navbar />
    <main className="min-h-screen bg-gray-50 py-12 mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Upload New Post
            </h1>
            <p className="text-gray-600">
              Share your latest e-waste transformation stories and projects.
            </p>
          </div>
          
          <AdminPostForm />
        </div>
      </div>
    </main>
    </div>
  );
}

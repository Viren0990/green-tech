import Navbar from "@/src/components/Navbar";
import { prisma } from "@/src/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function Page() {
    let submits = [];
    try {
        submits = await prisma.contactForm.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
    } catch (err) {
        console.error("Failed to fetch submissions:", err);
        return (
            <div className="p-8 text-center text-red-500">
                <Navbar />
                Failed to load submissions. Please try again later.
            </div>
        );
    }

    if (!submits || submits.length === 0) {
        return (
            <div><Navbar />
                <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-gray-500">
                    <h2 className="text-xl font-semibold mb-2">No Submissions Yet</h2>
                    <p>Contact form submissions will appear here.</p>
                </div>
            </div>
        );
    }

    return (
        <div><Navbar />
            <div className="w-full p-6 mt-12 pt-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Contact Submissions</h1>
                    <p className="text-gray-600 mt-2">
                        View and manage inquiries from the contact form.
                    </p>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
                                <tr>
                                    <th scope="col" className="px-6 py-4 font-semibold">Date</th>
                                    <th scope="col" className="px-6 py-4 font-semibold">Name</th>
                                    <th scope="col" className="px-6 py-4 font-semibold">Email</th>
                                    <th scope="col" className="px-6 py-4 font-semibold">Phone</th>
                                    <th scope="col" className="px-6 py-4 font-semibold">Message</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {submits.map((submit) => (
                                    <tr key={submit.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                                            {new Date(submit.createdAt).toLocaleDateString()}
                                            <span className="block text-xs text-gray-400 font-normal">
                                                {new Date(submit.createdAt).toLocaleTimeString()}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-gray-900 font-medium">
                                            {submit.name}
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <a href={`mailto:${submit.email}`} className="text-green-600 hover:underline">
                                                {submit.email}
                                            </a>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            {submit.phone ? (
                                                <a href={`tel:${submit.phone}`} className="hover:text-gray-900">
                                                    {submit.phone}
                                                </a>
                                            ) : (
                                                <span className="text-gray-400">-</span>
                                            )}
                                        </td>
                                        <td className="min-w-[300px] px-6 py-4">
                                            <p className="line-clamp-3 text-gray-600">
                                                {submit.message}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-4 text-xs text-gray-400 text-right">
                    Total Submissions: {submits.length}
                </div>
            </div>
        </div>
    );
}
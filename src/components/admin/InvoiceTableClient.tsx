'use client';

import { useState } from 'react';
import Link from 'next/link';
import { generateInvoicePDF, type InvoiceData } from '@/src/utils/generateInvoicePDF';
import { Download, Loader2, FileText, Edit } from 'lucide-react';

export default function InvoiceTableClient({ invoices }: { invoices: any[] }) {
  const [generatingId, setGeneratingId] = useState<string | null>(null);

  const handleDownload = async (invoice: any) => {
    setGeneratingId(invoice.id);
    try {
      // Reconstruct InvoiceData from the database record
      const invoiceData: InvoiceData = {
        date: invoice.date,
        invoiceNo: invoice.invoiceNo,
        placeOfSupply: invoice.placeOfSupply,
        clientName: invoice.clientName,
        clientAddress: invoice.clientAddress,
        clientGstin: invoice.clientGstin,
        items: typeof invoice.items === 'string' ? JSON.parse(invoice.items) : invoice.items,
        termsAndConditions: invoice.termsAndConditions,
        amountInWords: invoice.amountInWords,
        taxMode: invoice.taxMode as any,
        cgstPercent: invoice.cgstPercent,
        sgstPercent: invoice.sgstPercent,
        igstPercent: invoice.igstPercent,
        subTotal: invoice.subTotal,
        cgstAmount: invoice.cgstAmount,
        sgstAmount: invoice.sgstAmount,
        igstAmount: invoice.igstAmount,
        roundOff: invoice.roundOff,
        finalTotal: invoice.finalTotal,
        bankName: invoice.bankName,
        bankAccountNo: invoice.bankAccountNo,
        bankIfsc: invoice.bankIfsc,
        bankBranch: invoice.bankBranch,
      };

      await generateInvoicePDF(invoiceData);
    } catch (err) {
      console.error('Failed to regenerate PDF:', err);
      alert('Failed to regenerate PDF. See console for details.');
    } finally {
      setGeneratingId(null);
    }
  };

  if (!invoices || invoices.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-gray-500 mt-12">
        <FileText className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-xl font-semibold mb-2">No Invoices Yet</h2>
        <p>Generated invoices will be saved here automatically.</p>
      </div>
    );
  }

  const fmt = (n: number) => n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Invoices Archive</h1>
          <p className="text-gray-500 mt-1 text-sm">
            View, manage, and regenerate past invoices from your database.
          </p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-100 flex items-center gap-2">
          <FileText size={16} />
          {invoices.length} {invoices.length === 1 ? 'Invoice' : 'Invoices'} Total
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600 border-collapse">
            <thead className="bg-gray-800 text-xs uppercase tracking-wider text-gray-200 border-b border-gray-900">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">Date</th>
                <th scope="col" className="px-6 py-4 font-semibold">Invoice No</th>
                <th scope="col" className="px-6 py-4 font-semibold">Client Name</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Final Total</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50/60 transition-colors group">
                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                    {invoice.date}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100/50">
                      {invoice.invoiceNo}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900">
                    {invoice.clientName}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right font-bold text-gray-900">
                    ₹ {fmt(invoice.finalTotal)}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/invoice?edit=${invoice.id}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-gray-700 hover:bg-gray-50 hover:text-blue-600 border border-gray-200 transition-all font-medium shadow-sm group-hover:border-blue-200 group-hover:shadow-blue-100"
                      >
                        <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                        <span>Edit</span>
                      </Link>
                      
                      <button
                        onClick={() => handleDownload(invoice)}
                        disabled={generatingId === invoice.id}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-gray-700 hover:bg-gray-50 hover:text-emerald-600 border border-gray-200 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm group-hover:border-emerald-200 group-hover:shadow-emerald-100"
                      >
                        {generatingId === invoice.id ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                            <span>Generating</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4 text-gray-400 group-hover:text-emerald-500" />
                            <span>Download</span>
                          </>
                        )}
                      </button>
                    </div>
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

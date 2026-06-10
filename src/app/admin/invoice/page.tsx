import InvoiceForm from '@/src/components/admin/InvoiceForm';
import { Suspense } from 'react';

export default function InvoicePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">Loading...</div>}>
      <InvoiceForm />
    </Suspense>
  );
}

import Navbar from "@/src/components/Navbar";
import AdminAuthGate from "@/src/components/admin/AdminAuthGate";
import { getInvoices } from "@/src/actions/invoices";
import InvoiceTableClient from "@/src/components/admin/InvoiceTableClient";

export const dynamic = 'force-dynamic';

export default async function InvoicesPage() {
  const { data } = await getInvoices();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AdminAuthGate title="Invoices Archive">
         <InvoiceTableClient invoices={data || []} />
      </AdminAuthGate>
    </div>
  );
}

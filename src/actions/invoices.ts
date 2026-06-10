'use server';

import { prisma } from '@/src/lib/prisma';
import { revalidatePath } from 'next/cache';
import type { InvoiceData } from '@/src/utils/generateInvoicePDF';

export async function saveInvoice(data: InvoiceData, editId?: string) {
  try {
    const dbData = {
      invoiceNo: data.invoiceNo,
      date: data.date,
      clientName: data.clientName,
      clientAddress: data.clientAddress,
      clientGstin: data.clientGstin,
      placeOfSupply: data.placeOfSupply,
      
      subTotal: data.subTotal,
      cgstAmount: data.cgstAmount,
      sgstAmount: data.sgstAmount,
      igstAmount: data.igstAmount,
      roundOff: data.roundOff,
      finalTotal: data.finalTotal,
      
      taxMode: data.taxMode,
      cgstPercent: data.cgstPercent,
      sgstPercent: data.sgstPercent,
      igstPercent: data.igstPercent,
      
      items: JSON.parse(JSON.stringify(data.items)),
      
      termsAndConditions: data.termsAndConditions,
      amountInWords: data.amountInWords,
      bankName: data.bankName,
      bankAccountNo: data.bankAccountNo,
      bankIfsc: data.bankIfsc,
      bankBranch: data.bankBranch,
    };

    if (editId) {
      await prisma.invoice.update({
        where: { id: editId },
        data: dbData
      });
      revalidatePath('/admin/admin1/invoices');
      return { success: true, id: editId };
    } else {
      const newInvoice = await prisma.invoice.create({
        data: dbData
      });
      revalidatePath('/admin/admin1/invoices');
      return { success: true, id: newInvoice.id };
    }
  } catch (error: any) {
    console.error('Error saving invoice:', error);
    if (error.code === 'P2002') {
      return { success: false, error: 'An invoice with this number already exists. Please use a unique invoice number.' };
    }
    return { success: false, error: 'Failed to save invoice to the database.' };
  }
}

export async function getInvoices() {
  try {
    const invoices = await prisma.invoice.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return { success: true, data: invoices };
  } catch (error) {
    console.error('Error fetching invoices:', error);
    return { success: false, error: 'Failed to fetch invoices.', data: [] };
  }
}

export async function getNextInvoiceNumber() {
  try {
    const today = new Date();
    // format: YYMMDD
    const yy = String(today.getFullYear()).slice(2);
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const datePrefix = `DMD-${yy}${mm}${dd}`;

    // Find the latest invoice for today
    const latestInvoice = await prisma.invoice.findFirst({
      where: {
        invoiceNo: {
          startsWith: datePrefix,
        },
      },
      orderBy: {
        invoiceNo: 'desc',
      },
    });

    if (!latestInvoice) {
      return { success: true, invoiceNo: `${datePrefix}-01` };
    }

    // Extract the sequence number
    const parts = latestInvoice.invoiceNo.split('-');
    const seq = parseInt(parts[parts.length - 1], 10);
    const nextSeq = String(seq + 1).padStart(2, '0');

    return { success: true, invoiceNo: `${datePrefix}-${nextSeq}` };
  } catch (error) {
    console.error('Error generating invoice number:', error);
    return { success: false, invoiceNo: '' };
  }
}

export async function getInvoiceById(id: string) {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id }
    });
    if (!invoice) return { success: false, error: 'Invoice not found' };
    return { success: true, data: invoice };
  } catch (error) {
    console.error('Error fetching invoice by id:', error);
    return { success: false, error: 'Failed to fetch invoice' };
  }
}

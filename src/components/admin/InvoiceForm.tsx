'use client';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { generateInvoicePDF, type InvoiceData, type InvoiceLineItem } from '@/src/utils/generateInvoicePDF';
import { saveInvoice, getNextInvoiceNumber, getInvoiceById } from '@/src/actions/invoices';
import { numberToIndianWords } from '@/src/utils/numberToWords';
import {
  Lock, Eye, EyeOff, FileText, Plus, Trash2, Loader2,
  Download, Calculator, Building2, Users, ClipboardList,
  IndianRupee, ChevronDown,
} from 'lucide-react';

// ── Empty line item factory ────────────────────────────────────────────────
function createEmptyItem(srNo: number): InvoiceLineItem {
  return { srNo, description: '', hsn: '', unit: '', quantity: '', unitPrice: '', amount: '' };
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function InvoiceForm() {
  const searchParams = useSearchParams();
  const editId = searchParams.get('edit');

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Invoice fields
  const [date, setDate] = useState(() => {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  });
  const [invoiceNo, setInvoiceNo] = useState('');
  const [placeOfSupply, setPlaceOfSupply] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientGstin, setClientGstin] = useState('');

  // Line items
  const [items, setItems] = useState<InvoiceLineItem[]>([createEmptyItem(1)]);

  // Tax
  const [taxMode, setTaxMode] = useState<'cgst_sgst' | 'igst'>('cgst_sgst');
  const [cgstPercent, setCgstPercent] = useState(9);
  const [sgstPercent, setSgstPercent] = useState(9);
  const [igstPercent, setIgstPercent] = useState(18);

  // Additional
  const DEFAULT_TERMS = `1. Quantity and weight have been checked and accepted by the buyer at the time of delivery/pickup.\n2. Ownership and risk of the material transfer to the buyer upon delivery and/or receipt of full payment.\n3. This invoice serves as a record of sale and transfer of the e-waste material described herein.`;
  const [termsAndConditions, setTermsAndConditions] = useState(DEFAULT_TERMS);
  const [amountInWords, setAmountInWords] = useState('');
  const [bankName, setBankName] = useState('Bank of Baroda');
  const [bankAccountNo, setBankAccountNo] = useState('29040200013947');
  const [bankIfsc, setBankIfsc] = useState('BARB0VJWAGH');
  const [bankBranch, setBankBranch] = useState('Wagholi');

  // UI state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState('');

  // ── Calculations ──────────────────────────────────────────────────────
  const subTotal = items.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.unitPrice) || 0;
    return sum + (qty * price);
  }, 0);

  const cgstAmount = taxMode === 'cgst_sgst' ? (subTotal * cgstPercent) / 100 : 0;
  const sgstAmount = taxMode === 'cgst_sgst' ? (subTotal * sgstPercent) / 100 : 0;
  const igstAmount = taxMode === 'igst' ? (subTotal * igstPercent) / 100 : 0;

  const totalBeforeRounding = subTotal + cgstAmount + sgstAmount + igstAmount;

  // Round off (user-editable)
  const [roundOffSign, setRoundOffSign] = useState<1 | -1>(1);
  const [roundOffValue, setRoundOffValue] = useState<string>('');
  const roundOffNum = Number(roundOffValue) || 0;
  const roundOff = roundOffSign * roundOffNum;
  const finalTotal = totalBeforeRounding + roundOff;

  // Prevent scroll-wheel from changing number inputs
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' && (target as HTMLInputElement).type === 'number') {
        target.blur();
      }
    };
    document.addEventListener('wheel', handleWheel, { passive: true });
    return () => document.removeEventListener('wheel', handleWheel);
  }, []);

  // Fetch next invoice number when authenticated, OR fetch edit data
  useEffect(() => {
    if (isAuthenticated) {
      if (editId) {
        // We are editing an existing invoice
        getInvoiceById(editId).then((res) => {
          if (res.success && res.data) {
            setDate(res.data.date);
            setInvoiceNo(res.data.invoiceNo);
            setPlaceOfSupply(res.data.placeOfSupply);
            setClientName(res.data.clientName);
            setClientAddress(res.data.clientAddress);
            setClientGstin(res.data.clientGstin);
            
            const parsedItems = typeof res.data.items === 'string' ? JSON.parse(res.data.items) : res.data.items;
            setItems(parsedItems?.length ? parsedItems : [createEmptyItem(1)]);
            
            setTaxMode(res.data.taxMode as any);
            setCgstPercent(res.data.cgstPercent);
            setSgstPercent(res.data.sgstPercent);
            setIgstPercent(res.data.igstPercent);
            setTermsAndConditions(res.data.termsAndConditions || '');
            setAmountInWords(res.data.amountInWords || '');
            
            const rOff = Number(res.data.roundOff || 0);
            setRoundOffSign(rOff < 0 ? -1 : 1);
            setRoundOffValue(Math.abs(rOff).toString() || '');
            
            setBankName(res.data.bankName);
            setBankAccountNo(res.data.bankAccountNo);
            setBankIfsc(res.data.bankIfsc);
            setBankBranch(res.data.bankBranch);
          } else {
            setGenerateError('Failed to load invoice for editing. It may have been deleted.');
          }
        });
      } else {
        // Normal generation
        getNextInvoiceNumber().then((res) => {
          if (res.success && res.invoiceNo) {
            setInvoiceNo(res.invoiceNo);
          }
        });
      }
    }
  }, [isAuthenticated, editId]);

  // Auto-update amount in words when final total changes
  useEffect(() => {
    if (finalTotal > 0) {
      setAmountInWords(numberToIndianWords(finalTotal));
    } else {
      setAmountInWords('');
    }
  }, [finalTotal]);

  // ── Auth handler ──────────────────────────────────────────────────────
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

  // ── Item handlers ─────────────────────────────────────────────────────
  const addItem = useCallback(() => {
    if (items.length >= 15) return;
    setItems(prev => [...prev, createEmptyItem(prev.length + 1)]);
  }, [items.length]);

  const removeItem = useCallback((index: number) => {
    setItems(prev => {
      const updated = prev.filter((_, i) => i !== index);
      return updated.map((item, i) => ({ ...item, srNo: i + 1 }));
    });
  }, []);

  const updateItem = useCallback((index: number, field: keyof InvoiceLineItem, value: string | number) => {
    setItems(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  }, []);

  // ── Generate PDF ──────────────────────────────────────────────────────
  const handleGeneratePDF = useCallback(async () => {
    // Validation
    if (!invoiceNo.trim()) {
      setGenerateError('Please enter an invoice number');
      document.getElementById('field-invoiceNo')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('field-invoiceNo')?.focus({ preventScroll: true });
      return;
    }
    if (!clientName.trim()) {
      setGenerateError('Please enter client name');
      document.getElementById('field-clientName')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('field-clientName')?.focus({ preventScroll: true });
      return;
    }
    if (!placeOfSupply.trim()) {
      setGenerateError('Please enter place of supply');
      document.getElementById('field-placeOfSupply')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('field-placeOfSupply')?.focus({ preventScroll: true });
      return;
    }
    if (items.every(item => !item.description.trim())) {
      setGenerateError('Please add at least one line item description');
      document.getElementById('field-item-desc-0')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('field-item-desc-0')?.focus({ preventScroll: true });
      return;
    }

    setIsGenerating(true);
    setGenerateError('');

    try {
      const invoiceData: InvoiceData = {
        date,
        invoiceNo,
        placeOfSupply,
        clientName,
        clientAddress,
        clientGstin,
        items: items.filter(item => item.description.trim()),
        termsAndConditions,
        amountInWords,
        taxMode,
        cgstPercent,
        sgstPercent,
        igstPercent,
        subTotal,
        cgstAmount,
        sgstAmount,
        igstAmount,
        roundOff,
        finalTotal,
        bankName,
        bankAccountNo,
        bankIfsc,
        bankBranch,
      };

      // 1. Save to Database
      const saveRes = await saveInvoice(invoiceData, editId || undefined);
      if (!saveRes.success) {
        setGenerateError(saveRes.error || 'Failed to save to database. PDF not generated.');
        setIsGenerating(false);
        return;
      }

      // 2. Generate PDF
      await generateInvoicePDF(invoiceData);
      
      // Clear the data on successful generation
      setClientName('');
      setClientAddress('');
      setClientGstin('');
      setPlaceOfSupply('');
      setItems([createEmptyItem(1)]);
      setTermsAndConditions(DEFAULT_TERMS);
      setAmountInWords('');
      setRoundOffValue('');
      setRoundOffSign(1);
      
      // Auto-fetch the next sequential invoice number for convenience
      // Wait, if they were editing, we shouldn't wipe out and reset to new, 
      // but maybe it's fine. Let's just reset URL to remove edit param
      if (editId) {
        window.location.href = '/admin/invoice';
      } else {
        getNextInvoiceNumber().then((res) => {
          if (res.success && res.invoiceNo) {
            setInvoiceNo(res.invoiceNo);
          }
        });
      }
      
    } catch (err) {
      console.error('PDF generation failed:', err);
      setGenerateError('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  }, [
    date, invoiceNo, placeOfSupply, clientName, clientAddress, clientGstin,
    items, termsAndConditions, amountInWords, taxMode,
    cgstPercent, sgstPercent, igstPercent, subTotal,
    cgstAmount, sgstAmount, igstAmount, roundOff, finalTotal,
    bankName, bankAccountNo, bankIfsc, bankBranch,
  ]);

  // ── Format currency for display ───────────────────────────────────────
  const fmt = (n: number) => n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // ═══════════════════════════════════════════════════════════════════════
  // PASSWORD GATE
  // ═══════════════════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Decorative glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            {/* Lock icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Lock size={28} className="text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white text-center mb-1">Invoice Generator</h1>
            <p className="text-gray-400 text-center text-sm mb-8">Enter admin password to continue</p>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAuth()}
                  placeholder="Admin password"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition pr-12"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-400 transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {authError && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2.5 text-red-400 text-sm">
                  {authError}
                </div>
              )}

              <button
                onClick={handleAuth}
                disabled={authLoading}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold py-3.5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                {authLoading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Lock size={18} />
                    Unlock
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════
  // INVOICE FORM
  // ═══════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative">
      {/* Full screen loading overlay */}
      {isGenerating && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 backdrop-blur-md">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-10 flex flex-col items-center shadow-2xl">
            <Loader2 size={56} className="text-emerald-500 animate-spin mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Generating Invoice...</h3>
            <p className="text-gray-400 text-sm">Please wait while we save and generate your PDF.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center">
              <FileText size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Invoice Generator</h1>
              <p className="text-xs text-gray-500">DMD GREENTECH REVIVE</p>
            </div>
          </div>
          <button
            onClick={handleGeneratePDF}
            disabled={isGenerating}
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold px-6 py-2.5 rounded-xl hover:from-emerald-500 hover:to-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-emerald-500/20 text-sm"
          >
            {isGenerating ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download size={16} />
                Generate PDF
              </>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Error banner */}
        {generateError && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
            {generateError}
          </div>
        )}

        {/* ── Section: Invoice Details ─────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <ClipboardList size={18} className="text-emerald-400" />
            <h2 className="text-base font-semibold text-white">Invoice Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Date</label>
              <input
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Invoice Number *</label>
              <input
                id="field-invoiceNo"
                type="text"
                value={invoiceNo}
                onChange={e => setInvoiceNo(e.target.value)}
                placeholder="e.g. INV-001"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Place of Supply *</label>
              <input
                id="field-placeOfSupply"
                type="text"
                value={placeOfSupply}
                onChange={e => setPlaceOfSupply(e.target.value)}
                placeholder="e.g. Maharashtra"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* ── Section: Client Details ──────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Users size={18} className="text-emerald-400" />
            <h2 className="text-base font-semibold text-white">Client Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Client Name *</label>
              <input
                id="field-clientName"
                type="text"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                placeholder="Company / Person name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Client GSTIN</label>
              <input
                type="text"
                value={clientGstin}
                onChange={e => setClientGstin(e.target.value)}
                placeholder="22AAAAA0000A1Z5"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Client Address</label>
              <input
                type="text"
                value={clientAddress}
                onChange={e => setClientAddress(e.target.value)}
                placeholder="Full address"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* ── Section: Line Items ──────────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <IndianRupee size={18} className="text-emerald-400" />
              <h2 className="text-base font-semibold text-white">Line Items</h2>
            </div>
            <button
              onClick={addItem}
              disabled={items.length >= 15}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <Plus size={16} />
              Add Item
            </button>
          </div>

          {/* Table header */}
          <div className="hidden md:grid grid-cols-[40px_1fr_90px_70px_70px_90px_90px_36px] gap-2 mb-2 px-1">
            <span className="text-xs font-medium text-gray-500">SR</span>
            <span className="text-xs font-medium text-gray-500">Description</span>
            <span className="text-xs font-medium text-gray-500">Equipment Code</span>
            <span className="text-xs font-medium text-gray-500">Qty</span>
            <span className="text-xs font-medium text-gray-500">Unit</span>
            <span className="text-xs font-medium text-gray-500">Unit Price</span>
            <span className="text-xs font-medium text-gray-500">Amount (₹)</span>
            <span />
          </div>

          {/* Items */}
          <div className="space-y-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[40px_1fr_90px_70px_70px_90px_90px_36px] gap-2 bg-gray-800/30 rounded-xl p-3 md:p-2 border border-gray-800/50"
              >
                {/* SR NO */}
                <div className="flex items-center">
                  <span className="text-gray-500 text-sm font-mono md:text-center w-full">{item.srNo}</span>
                </div>

                {/* Description */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Description</label>
                  <input
                    id={`field-item-desc-${idx}`}
                    type="text"
                    value={item.description}
                    onChange={e => updateItem(idx, 'description', e.target.value)}
                    placeholder="Item description"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-2.5 py-2 text-white text-sm placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                {/* Equipment code */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Equipment Code</label>
                  <input
                    type="text"
                    value={item.hsn}
                    onChange={e => updateItem(idx, 'hsn', e.target.value)}
                    placeholder="Code"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-2.5 py-2 text-white text-sm placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Qty</label>
                  <input
                    type="text"
                    value={item.quantity}
                    onChange={e => updateItem(idx, 'quantity', e.target.value)}
                    placeholder="Qty"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-2.5 py-2 text-white text-sm placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                {/* Unit */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Unit</label>
                  <input
                    type="text"
                    value={item.unit}
                    onChange={e => updateItem(idx, 'unit', e.target.value)}
                    placeholder="Kg/Pcs"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-2.5 py-2 text-white text-sm placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                {/* Unit Price */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Unit Price (₹)</label>
                  <input
                    type="number"
                    value={item.unitPrice}
                    onChange={e => updateItem(idx, 'unitPrice', e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-2.5 py-2 text-white text-sm placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>

                {/* Amount (auto-calculated, read-only) */}
                <div>
                  <label className="text-xs text-gray-500 md:hidden mb-1 block">Amount (₹)</label>
                  <div className="w-full bg-gray-800/30 border border-gray-700/50 rounded-lg px-2.5 py-2 text-emerald-400 text-sm font-medium">
                    {((Number(item.quantity) || 0) * (Number(item.unitPrice) || 0)).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                </div>

                {/* Remove */}
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => removeItem(idx)}
                    disabled={items.length <= 1}
                    className="text-gray-600 hover:text-red-400 transition disabled:opacity-30 disabled:cursor-not-allowed p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {items.length >= 15 && (
            <p className="text-xs text-amber-400/80 mt-2">Maximum 15 items reached (single-page limit)</p>
          )}
        </section>

        {/* ── Section: Tax & Totals ────────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Calculator size={18} className="text-emerald-400" />
            <h2 className="text-base font-semibold text-white">Tax & Totals</h2>
          </div>

          {/* Tax mode toggle */}
          <div className="mb-6">
            <label className="block text-xs font-medium text-gray-400 mb-2">Tax Type</label>
            <div className="relative inline-block">
              <select
                value={taxMode}
                onChange={e => setTaxMode(e.target.value as 'cgst_sgst' | 'igst')}
                className="appearance-none bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2.5 pr-10 text-white text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition cursor-pointer"
              >
                <option value="cgst_sgst">Intra-State (CGST + SGST)</option>
                <option value="igst">Inter-State (IGST)</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Tax rates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {taxMode === 'cgst_sgst' ? (
              <>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">CGST Rate (%)</label>
                  <input
                    type="number"
                    value={cgstPercent}
                    onChange={e => setCgstPercent(parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">SGST Rate (%)</label>
                  <input
                    type="number"
                    value={sgstPercent}
                    onChange={e => setSgstPercent(parseFloat(e.target.value) || 0)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                  />
                </div>
              </>
            ) : (
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">IGST Rate (%)</label>
                <input
                  type="number"
                  value={igstPercent}
                  onChange={e => setIgstPercent(parseFloat(e.target.value) || 0)}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                />
              </div>
            )}
          </div>

          {/* Totals display */}
          <div className="bg-gray-800/40 rounded-xl p-4 space-y-2.5 border border-gray-700/50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Sub Total</span>
              <span className="text-white font-medium">₹ {fmt(subTotal)}</span>
            </div>
            {taxMode === 'cgst_sgst' ? (
              <>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">CGST ({cgstPercent}%)</span>
                  <span className="text-white">₹ {fmt(cgstAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">SGST ({sgstPercent}%)</span>
                  <span className="text-white">₹ {fmt(sgstAmount)}</span>
                </div>
              </>
            ) : (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">IGST ({igstPercent}%)</span>
                <span className="text-white">₹ {fmt(igstAmount)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Round Off</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setRoundOffSign(prev => prev === 1 ? -1 : 1)}
                  className="w-7 h-7 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold flex items-center justify-center transition"
                >
                  {roundOffSign === 1 ? '+' : '−'}
                </button>
                <input
                  type="number"
                  value={roundOffValue}
                  onChange={e => setRoundOffValue(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-24 bg-gray-800/50 border border-gray-700 rounded-lg px-2 py-1.5 text-white text-sm text-right placeholder-gray-600 focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
                />
              </div>
            </div>
            <div className="border-t border-gray-700 pt-2.5 flex justify-between text-base">
              <span className="text-white font-bold">Final Total</span>
              <span className="text-emerald-400 font-bold">₹ {fmt(finalTotal)}</span>
            </div>
          </div>
        </section>

        {/* ── Section: Additional Info ─────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <FileText size={18} className="text-emerald-400" />
            <h2 className="text-base font-semibold text-white">Additional Information</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Terms & Conditions</label>
              <textarea
                value={termsAndConditions}
                onChange={e => setTermsAndConditions(e.target.value)}
                placeholder="Enter terms and conditions (optional)"
                rows={3}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition resize-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">
                Amount in Words
                <span className="text-gray-600 ml-1">(auto-generated)</span>
              </label>
              <input
                type="text"
                value={amountInWords}
                onChange={e => setAmountInWords(e.target.value)}
                placeholder="Will auto-fill when items are added"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* ── Section: Bank Details ────────────────────────────────────── */}
        <section className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <Building2 size={18} className="text-emerald-400" />
            <h2 className="text-base font-semibold text-white">Bank Account Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Bank Name</label>
              <input
                type="text"
                value={bankName}
                onChange={e => setBankName(e.target.value)}
                placeholder="Bank name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Account Number</label>
              <input
                type="text"
                value={bankAccountNo}
                onChange={e => setBankAccountNo(e.target.value)}
                placeholder="A/C number"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">IFSC Code</label>
              <input
                type="text"
                value={bankIfsc}
                onChange={e => setBankIfsc(e.target.value)}
                placeholder="IFSC code"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">Branch</label>
              <input
                type="text"
                value={bankBranch}
                onChange={e => setBankBranch(e.target.value)}
                placeholder="Branch name"
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>
        </section>

        {/* ── Bottom Generate Button ───────────────────────────────────── */}
        <div className="pb-8">
          <button
            onClick={handleGeneratePDF}
            disabled={isGenerating}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold py-4 rounded-xl hover:from-emerald-500 hover:to-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 text-base"
          >
            {isGenerating ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Generating Invoice PDF...
              </>
            ) : (
              <>
                <Download size={20} />
                Generate & Download Invoice PDF
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

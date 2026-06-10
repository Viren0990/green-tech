import jsPDF from 'jspdf';

// ── Types ──────────────────────────────────────────────────────────────────
export interface InvoiceLineItem {
  srNo: number;
  description: string;
  hsn: string;
  quantity: string;
  amount: number | string;
}

export interface InvoiceData {
  date: string;
  invoiceNo: string;
  placeOfSupply: string;
  clientName: string;
  clientAddress: string;
  clientGstin: string;
  items: InvoiceLineItem[];
  termsAndConditions: string;
  amountInWords: string;
  taxMode: 'cgst_sgst' | 'igst';
  cgstPercent: number;
  sgstPercent: number;
  igstPercent: number;
  subTotal: number;
  cgstAmount: number;
  sgstAmount: number;
  igstAmount: number;
  roundOff: number;
  finalTotal: number;
  bankName: string;
  bankAccountNo: string;
  bankIfsc: string;
  bankBranch: string;
}

// ── Company Constants ──────────────────────────────────────────────────────
const COMPANY = {
  name: 'DMD GREENTECH REVIVE',
  subtext: 'Its unit of (DMD GOLD PROSPERITY PVT LTD)',
  address: 'Shop No-01, Amaryllis Society, Maruti Nagar, Wagholi, Pune, 412207',
  cin: 'CIN :U27205PN2022PTC210032',
  gstin: '127AAJCD1867E1ZL',
  pan: 'AAJCD1867E',
  contact: '9763123699',
  email: 'info@dmdgreentechrevive.com',
};

// ── Layout Constants (mm) ──────────────────────────────────────────────────
const L = 10;      // left margin
const R = 200;     // right edge
const W = 190;     // content width
const LINE_W = 0.3; // border line width

// Section Y positions
const H_TOP = 10;   const H_BOT = 48;   // Header
const I_TOP = 48;   const I_BOT = 66;   // Info row
const C_TOP = 66;   const C_BOT = 88;   // Client
const T_HT = 88;    const T_HB = 96;    // Table header
const T_BT = 96;    const T_BB = 206;   // Table body
const S_TOP = 206;  const S_BOT = 251;  // Summary
const F_TOP = 251;  const F_BOT = 287;  // Footer

// Info row column dividers
const I_C1 = 80;
const I_C2 = 140;

// Table column right edges
const TC1 = 30;    // SR NO
const TC2 = 110;   // DESCRIPTION
const TC3 = 140;   // HSN
const TC4 = 165;   // QUANTITY
// TC5 = R (200)   // AMOUNT

// Summary dividers
const S_LD = 130;  // left divider (terms vs totals)
const S_MD = 165;  // mid divider (label vs value)
const S_RH = 7.5;  // summary row height

// Footer column dividers
const F_C1 = 80;
const F_C2 = 140;

// Table body row height
const ROW_H = 7;

// ── Helper: Load image as base64 ──────────────────────────────────────────
async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) return reject(new Error('Canvas context failed'));
      ctx.drawImage(img, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
}

// ── Helper: Center text in a rect ─────────────────────────────────────────
function centerText(doc: jsPDF, text: string, xLeft: number, xRight: number, y: number) {
  const textWidth = doc.getTextWidth(text);
  const x = xLeft + (xRight - xLeft - textWidth) / 2;
  doc.text(text, x, y);
}

// ── Helper: Right-align text ──────────────────────────────────────────────
function rightText(doc: jsPDF, text: string, xRight: number, y: number) {
  const textWidth = doc.getTextWidth(text);
  doc.text(text, xRight - textWidth - 2, y);
}

// ── Helper: Format currency ───────────────────────────────────────────────
function fmt(n: number): string {
  return n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ── Main PDF Generator ────────────────────────────────────────────────────
export async function generateInvoicePDF(data: InvoiceData): Promise<void> {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  doc.setLineWidth(LINE_W);

  // Load logo
  let logoData: string | null = null;
  try {
    logoData = await loadImageAsBase64('/images/invoice/logo.png');
  } catch {
    console.warn('Logo could not be loaded, skipping...');
  }

  // Load stamp
  let stampData: string | null = null;
  try {
    stampData = await loadImageAsBase64('/images/invoice/stamppppp.png');
  } catch {
    console.warn('Stamp could not be loaded, skipping...');
  }

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 1: HEADER
  // ═══════════════════════════════════════════════════════════════════════
  // Light green header background
  doc.rect(L, H_TOP, W, H_BOT - H_TOP);

  // Logo
  if (logoData) {
    doc.addImage(logoData, 'PNG', L + 2, H_TOP + 2, 30, 30);
  }

  // Header text (centered in the area to the right of the logo)
  const textAreaLeft = L + 35;
  const textAreaRight = R;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  centerText(doc, 'Tax Invoice', textAreaLeft, textAreaRight, H_TOP + 7);

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  centerText(doc, COMPANY.name, textAreaLeft, textAreaRight, H_TOP + 15);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  centerText(doc, COMPANY.subtext, textAreaLeft, textAreaRight, H_TOP + 21);
  centerText(doc, COMPANY.address, textAreaLeft, textAreaRight, H_TOP + 26);
  centerText(doc, COMPANY.cin, textAreaLeft, textAreaRight, H_TOP + 31);

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 2: INFO ROW (GSTIN / Contact / Date)
  // ═══════════════════════════════════════════════════════════════════════
  doc.rect(L, I_TOP, W, I_BOT - I_TOP);
  doc.line(I_C1, I_TOP, I_C1, I_BOT);  // vertical divider 1
  doc.line(I_C2, I_TOP, I_C2, I_BOT);  // vertical divider 2
  doc.line(L, I_TOP + 9, R, I_TOP + 9); // horizontal mid

  // Top row (GSTIN, Contact, Date)
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('GSTIN : ', L + 2, I_TOP + 6);
  doc.text('Contact no : ', I_C1 + 2, I_TOP + 6);
  doc.text('Date  :', I_C2 + 2, I_TOP + 6);

  doc.setFont('helvetica', 'normal');
  doc.text(COMPANY.gstin, L + 22, I_TOP + 6);
  doc.text(COMPANY.contact, I_C1 + 28, I_TOP + 6);
  doc.text(data.date, I_C2 + 18, I_TOP + 6);

  // Bottom row (PAN, Email, Invoice No) — smaller font for email to prevent overflow
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text('PAN : ', L + 2, I_TOP + 15);
  doc.text('Invoice No  :', I_C2 + 2, I_TOP + 15);

  doc.setFont('helvetica', 'normal');
  doc.text(COMPANY.pan, L + 16, I_TOP + 15);
  doc.text(data.invoiceNo, I_C2 + 28, I_TOP + 15);

  // Email in smaller font to fit within column
  doc.setFontSize(7.5);
  doc.setFont('helvetica', 'bold');
  doc.text('Email Id : ', I_C1 + 2, I_TOP + 15);
  doc.setFont('helvetica', 'normal');
  doc.text(COMPANY.email, I_C1 + 20, I_TOP + 15);
  doc.setFontSize(9);

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 3: CLIENT DETAILS
  // ═══════════════════════════════════════════════════════════════════════
  doc.rect(L, C_TOP, W, C_BOT - C_TOP);

  doc.setFontSize(9);
  const clientLabelX = L + 2;
  const clientValueX = L + 35;
  let cy = C_TOP + 5;

  doc.setFont('helvetica', 'bold');
  doc.text('Place of supply :', clientLabelX, cy);
  doc.setFont('helvetica', 'normal');
  doc.text(data.placeOfSupply, clientValueX, cy);

  cy += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('Client Details  :', clientLabelX, cy);
  doc.setFont('helvetica', 'normal');
  doc.text(data.clientName, clientValueX, cy);

  cy += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('Address   :', clientLabelX, cy);
  doc.setFont('helvetica', 'normal');
  // Wrap address text if too long
  const addressLines = doc.splitTextToSize(data.clientAddress, W - 37);
  doc.text(addressLines[0] || '', clientValueX, cy);

  cy += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('GSTIN  :', clientLabelX, cy);
  doc.setFont('helvetica', 'normal');
  doc.text(data.clientGstin, clientValueX, cy);

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 4: ITEMS TABLE HEADER
  // ═══════════════════════════════════════════════════════════════════════
  // Shaded table header
  doc.setFillColor(230, 236, 230);
  doc.rect(L, T_HT, W, T_HB - T_HT, 'FD');

  // Column dividers (header)
  doc.line(TC1, T_HT, TC1, T_HB);
  doc.line(TC2, T_HT, TC2, T_HB);
  doc.line(TC3, T_HT, TC3, T_HB);
  doc.line(TC4, T_HT, TC4, T_HB);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  centerText(doc, 'SR NO', L, TC1, T_HT + 5.5);
  centerText(doc, 'DESCRIPTION', TC1, TC2, T_HT + 5.5);
  centerText(doc, 'EQUIPMENT CODE', TC2, TC3, T_HT + 5.5);
  centerText(doc, 'QUANTITY', TC3, TC4, T_HT + 5.5);
  centerText(doc, 'AMOUNT', TC4, R, T_HT + 5.5);

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 5: ITEMS TABLE BODY
  // ═══════════════════════════════════════════════════════════════════════
  doc.rect(L, T_BT, W, T_BB - T_BT);

  // Draw item rows (fills first, then column lines on top)
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');

  const maxItems = Math.min(data.items.length, 15); // max 15 rows in available space
  for (let i = 0; i < maxItems; i++) {
    const item = data.items[i];
    const rowTopY = T_BT + (i * ROW_H);
    const y = rowTopY + 5;

    // Subtle alternating row tint
    if (i % 2 === 1) {
      doc.setFillColor(248, 250, 248);
      doc.rect(L, rowTopY, W, ROW_H, 'F');
    }

    // SR NO (centered)
    centerText(doc, String(item.srNo), L, TC1, y);

    // DESCRIPTION (left-aligned with padding)
    const descLines = doc.splitTextToSize(item.description, TC2 - TC1 - 4);
    doc.text(descLines[0] || '', TC1 + 2, y);

    // Equipment code (centered)
    centerText(doc, item.hsn, TC2, TC3, y);

    // QUANTITY (centered)
    centerText(doc, item.quantity, TC3, TC4, y);

    // AMOUNT (centered without Rs.)
    centerText(doc, fmt(Number(item.amount) || 0), TC4, R, y);
  }

  // Column dividers (drawn AFTER fills so lines show on top)
  doc.line(TC1, T_BT, TC1, T_BB);
  doc.line(TC2, T_BT, TC2, T_BB);
  doc.line(TC3, T_BT, TC3, T_BB);
  doc.line(TC4, T_BT, TC4, T_BB);

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 6: SUMMARY (Terms, Totals)
  // ═══════════════════════════════════════════════════════════════════════
  doc.rect(L, S_TOP, W, S_BOT - S_TOP);

  // Vertical dividers
  doc.line(S_LD, S_TOP, S_LD, S_BOT);
  doc.line(S_MD, S_TOP, S_MD, S_BOT);

  // Horizontal dividers for right section rows
  for (let i = 1; i < 6; i++) {
    const hy = S_TOP + (i * S_RH);
    doc.line(S_LD, hy, R, hy);
  }

  // Left side: Terms & Conditions
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('Terms & Condition :', L + 2, S_TOP + 5);
  doc.setFont('helvetica', 'normal');

  if (data.termsAndConditions) {
    const termsLines = doc.splitTextToSize(data.termsAndConditions, S_LD - L - 4);
    const maxTermsLines = 6;
    for (let i = 0; i < Math.min(termsLines.length, maxTermsLines); i++) {
      doc.text(termsLines[i], L + 2, S_TOP + 10 + i * 3.5);
    }
  }

  // Amount in Words (in the lower part of left section)
  doc.setFont('helvetica', 'bold');
  doc.text('Amount in Word :', L + 2, S_TOP + (4 * S_RH) + 5);
  doc.setFont('helvetica', 'normal');
  if (data.amountInWords) {
    const wordLines = doc.splitTextToSize(data.amountInWords, S_LD - L - 4);
    for (let i = 0; i < Math.min(wordLines.length, 2); i++) {
      doc.text(wordLines[i], L + 2, S_TOP + (4 * S_RH) + 10 + i * 3.5);
    }
  }

  // Right side: Totals
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');

  const summaryRows = [
    { label: 'Sub Total', value: 'INR ' + fmt(data.subTotal) },
    { label: `CGST ${data.cgstPercent}%`, value: data.taxMode === 'cgst_sgst' ? 'INR ' + fmt(data.cgstAmount) : '' },
    { label: `SGST ${data.sgstPercent}%`, value: data.taxMode === 'cgst_sgst' ? 'INR ' + fmt(data.sgstAmount) : '' },
    { label: `IGST ${data.igstPercent}%`, value: data.taxMode === 'igst' ? 'INR ' + fmt(data.igstAmount) : '' },
    { label: 'Round off', value: data.roundOff >= 0 ? fmt(data.roundOff) : '-' + fmt(Math.abs(data.roundOff)) },
    { label: 'Final total', value: 'INR ' + fmt(data.finalTotal) },
  ];

  summaryRows.forEach((row, i) => {
    const rowTopY = S_TOP + (i * S_RH);
    const rowY = rowTopY + 5;

    // Highlight the Final Total row
    if (i === 5) {
      doc.setFillColor(230, 246, 233);
      doc.rect(S_LD, rowTopY, R - S_LD, S_RH, 'F');
    }

    doc.setFont('helvetica', 'bold');
    doc.text(row.label, S_LD + 2, rowY);
    doc.setFont('helvetica', 'normal');
    // Final total gets bold value too
    if (i === 5) doc.setFont('helvetica', 'bold');
    rightText(doc, row.value, R, rowY);
  });

  // ═══════════════════════════════════════════════════════════════════════
  // SECTION 7: FOOTER (Bank Details, Signatures)
  // ═══════════════════════════════════════════════════════════════════════
  doc.rect(L, F_TOP, W, F_BOT - F_TOP);
  doc.line(F_C1, F_TOP, F_C1, F_BOT);
  doc.line(F_C2, F_TOP, F_C2, F_BOT);

  // Bank Details (left column)
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text('Bank Account Details :', L + 2, F_TOP + 5);

  doc.setFont('helvetica', 'normal');
  const bankY = F_TOP + 10;
  doc.text(`Bank Name : ${data.bankName}`, L + 2, bankY);
  doc.text(`A/C NO : ${data.bankAccountNo}`, L + 2, bankY + 5);
  doc.text(`IFSC CODE : ${data.bankIfsc}`, L + 2, bankY + 10);
  doc.text(`Branch : ${data.bankBranch}`, L + 2, bankY + 15);

  // Client Signature (middle column)
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  centerText(doc, 'Client signature', F_C1, F_C2, F_BOT - 4);

  // Authorised Signature (right column)
  if (stampData) {
    const stampW = 32;
    const stampH = 22;
    const stampX = F_C2 + (R - F_C2 - stampW) / 2;
    const stampY = F_BOT - 34;
    doc.addImage(stampData, 'PNG', stampX, stampY, stampW, stampH);
  }

  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  centerText(doc, 'For DMD GREENTECH REVIVE', F_C2, R, F_BOT - 8);
  doc.setFont('helvetica', 'italic');
  centerText(doc, 'Authorised Signature', F_C2, R, F_BOT - 4);

  // ═══════════════════════════════════════════════════════════════════════
  // FINAL TOUCH: Thicker outer border around the whole invoice
  // ═══════════════════════════════════════════════════════════════════════
  doc.setLineWidth(0.6);
  doc.setDrawColor(60, 60, 60);
  doc.rect(L, H_TOP, W, F_BOT - H_TOP);
  doc.setLineWidth(LINE_W);
  doc.setDrawColor(0, 0, 0);

  // ═══════════════════════════════════════════════════════════════════════
  // SAVE
  // ═══════════════════════════════════════════════════════════════════════
  const filename = `Invoice_${data.invoiceNo || 'DRAFT'}_${data.date.replace(/\//g, '-')}.pdf`;
  doc.save(filename);
}

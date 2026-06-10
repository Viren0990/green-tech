/**
 * Converts a number to Indian currency words.
 * e.g. 12345.50 → "Twelve Thousand Three Hundred and Forty Five Rupees and Fifty Paise Only"
 */
export function numberToIndianWords(num: number): string {
  if (num === 0) return 'Zero Rupees Only';
  if (isNaN(num)) return '';

  const ones = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
    'Seventeen', 'Eighteen', 'Nineteen',
  ];
  const tensArr = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
  ];

  function belowHundred(n: number): string {
    if (n < 20) return ones[n];
    return tensArr[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
  }

  function belowThousand(n: number): string {
    if (n < 100) return belowHundred(n);
    return (
      ones[Math.floor(n / 100)] +
      ' Hundred' +
      (n % 100 ? ' and ' + belowHundred(n % 100) : '')
    );
  }

  let rupees = Math.floor(Math.abs(num));
  const paise = Math.round((Math.abs(num) - Math.floor(Math.abs(num))) * 100);

  if (rupees === 0 && paise === 0) return 'Zero Rupees Only';

  let result = '';

  if (rupees >= 10000000) {
    result += belowThousand(Math.floor(rupees / 10000000)) + ' Crore ';
    rupees %= 10000000;
  }

  if (rupees >= 100000) {
    result += belowHundred(Math.floor(rupees / 100000)) + ' Lakh ';
    rupees %= 100000;
  }

  if (rupees >= 1000) {
    result += belowHundred(Math.floor(rupees / 1000)) + ' Thousand ';
    rupees %= 1000;
  }

  if (rupees > 0) {
    result += belowThousand(rupees);
  }

  result = result.trim();

  if (result) {
    result += ' Rupees';
  }

  if (paise > 0) {
    result += (result ? ' and ' : '') + belowHundred(paise) + ' Paise';
  }

  return result + ' Only';
}

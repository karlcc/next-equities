'use client';

import TradingViewWidget from './tw';
// Translation data list
const translationData = {
  AAPL: 'NASDAQ:AAPL',
  SPY: 'SPY',
  // Add more translations here as needed
};

export default function Chart({ params }: { params: { issue: string } }) {
  const issue = params.issue.toUpperCase();

  // Translate the issue to symbol using the translation data
  const symbol = (translationData as { [key: string]: string })[issue] || issue;

  return (
    <section className="tradingview-widget-container h-[calc(100vh-90px)] w-full grow">
      <TradingViewWidget symbol={symbol} />
    </section>
  );
}

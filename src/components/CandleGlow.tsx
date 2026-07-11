export default function CandleGlow({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`candle-glow ${className}`} />;
}

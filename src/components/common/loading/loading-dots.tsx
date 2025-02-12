'use client';

export default function LoadingDots({ message = '', dots = '•' }) {
  return (
    <div>
      {message}
      <span className="dot">{dots}</span>
      <span className="dot">{dots}</span>
      <span className="dot">{dots}</span>
    </div>
  );
}

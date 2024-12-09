'use client';

export default function LoadingDots2({ message = '', dots = '•' }) {
  return (
    <div>
      {message}
      <span className="dot">{dots}</span>
      <span className="dot">{dots}</span>
      <span className="dot">{dots}</span>
    </div>
  );
}

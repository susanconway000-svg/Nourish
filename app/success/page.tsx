'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (sessionId) {
      // You can optionally verify the session and deliver the digital product here
      setMessage(`Payment successful! Your session ID is: ${sessionId}`);
      
      // TODO: Send digital product download link via email
      // TODO: Log successful transaction to your database
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-6xl mb-4">✓</div>
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Thank you for your purchase. Your digital product will be delivered to your email shortly.
        </p>
        {message && <p className="text-sm text-gray-500 mb-6">{message}</p>}
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

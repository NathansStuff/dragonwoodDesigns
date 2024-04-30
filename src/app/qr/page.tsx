'use client';

import { useSearchParams } from 'next/navigation';

function CodePage() {
  const searchParams = useSearchParams();
  const url = process.env.NEXT_PUBLIC_SCANWARE_FORWARD ?? '';

  const code = searchParams?.get('id');
  const forwardUrl = `${url}?i=${code}`;

  if (code) {
    window.location.href = forwardUrl;
  }

  return <div></div>;
}

export default CodePage;

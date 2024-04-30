'use client';

import { useSearchParams } from 'next/navigation';

function CodePage() {
  const searchParams = useSearchParams();
  const url = process.env.NEXT_PUBLIC_SCANWARE_FORWARD ?? '';

  const code = searchParams?.get('i');
  const forwardUrl = `${url}/${code}`;

  if (code) {
    window.location.href = forwardUrl;
  }

  return <></>;
}

export default CodePage;

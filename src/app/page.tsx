'use client';

import Template from '@/components/sample/template';
import useClient from '@/lib/hooks/utils/useClient';

export default function Home() {
  const { isClient } = useClient();

  return <main className="font-sans">{isClient && <Template />}</main>;
}

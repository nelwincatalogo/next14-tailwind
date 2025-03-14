'use client';

import Loading from '../loading';
import LoadingDots from '../loading/loading-dots';

export default function LoadingFull({ ...props }) {
  return (
    <div className="grid gap-2" {...props}>
      <Loading className="mx-auto" />
      <LoadingDots message="Loading Data" dots="." />
    </div>
  );
}

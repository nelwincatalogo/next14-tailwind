'use client';

import { useAlert } from 'react-alert';

export default function ReactAlertSample() {
  const alert = useAlert();

  return (
    <div>
      <button
        onClick={() => {
          alert.show('Oh look, an alert!');
          alert.success('Oh look, an alert!');
          alert.error('Oh look, an alert!');
        }}
        className="rounded-md bg-green-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-green-600 active:scale-95"
      >
        Show Alert
      </button>
    </div>
  );
}

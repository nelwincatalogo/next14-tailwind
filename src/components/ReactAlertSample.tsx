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
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 active:scale-95 transition duration-300 ease-in-out"
      >
        Show Alert
      </button>
    </div>
  );
}

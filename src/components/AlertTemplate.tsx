'use client';

import { AlertTemplateProps } from 'react-alert';
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillExclamationCircle,
} from 'react-icons/ai';
import { HiX } from 'react-icons/hi';

export default function AlertTemplate({
  style,
  options,
  message,
  close,
}: AlertTemplateProps) {
  return (
    <div
      style={style}
      className={`
        flex items-center space-x-4 rounded-lg border-t-2 bg-white px-4 py-4 shadow-lg sm:border-l-2 sm:border-t-0
        ${options.type === 'info' && 'border-blue-500'}
        ${options.type === 'success' && 'border-emerald-500'}
        ${options.type === 'error' && 'border-red-500'}
      `}
    >
      {options.type === 'info' && (
        <AiFillInfoCircle className="h-4 w-4 flex-shrink-0 text-blue-500" />
      )}
      {options.type === 'success' && (
        <AiFillCheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-500" />
      )}
      {options.type === 'error' && (
        <AiFillExclamationCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
      )}
      <div className="w-full">
        <div className="font-medium leading-tight text-gray-700">
          {options.type === 'info' && 'Info'}
          {options.type === 'success' && 'Success'}
          {options.type === 'error' && 'Error'}
        </div>
        <div className="text-xs leading-tight text-gray-500">{message}</div>
      </div>
      <button onClick={close} className="active:scale-125 active:transform">
        <HiX className="h-4 w-4 text-gray-500" />
      </button>
    </div>
  );
}

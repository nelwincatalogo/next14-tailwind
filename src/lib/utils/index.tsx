import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export const isDevMode = process.env.NODE_ENV === 'development';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const catchError = (
  e: any,
  label: string = 'Error',
  title: string = 'Oops! Something went wrong',
  description: string = '',
) => {
  const error = e?.response?.data?.message || e.message;
  console.log(`${label}: `, error);

  toast.error(title, {
    description: description.length > 0 ? description : error,
  });
};

export function isObjectEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

/**
 * Create a function that accepts a number and then returns it like this:
 * 1000 => 1k, 10000 => 10k, 100000 => 100k, 1000000 => 1M, 10000000 => 10M,
 * 100000000 => 100M, 1000000000 => 1B, etc
 */
export const formatNumber = (num: number) => {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`;
  return num.toString();
};

export const uniqueIndentifier = () =>
  (new Date().getTime().toString(36) + Math.random().toString(36).slice(2)).toLowerCase();

export function bytesToSize(bytes: number) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(String(Math.floor(Math.log(bytes) / Math.log(1024))), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

export function capitalize(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the capitalized words back into a single string
  const capitalizedStr = capitalizedWords.join(' ');

  return capitalizedStr;
}

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
      <h1>Dashboard</h1>
      <Link
        href="/dashboard/customers/"
        className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
      >
        <span>Customers</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
      <Link
        href="/dashboard/invoices/"
        className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
      >
        <span>Invoices</span> <ArrowRightIcon className="w-5 md:w-6" />
      </Link>
    </div>
  );
}

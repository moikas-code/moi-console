import Link from 'next/link';
import { useState } from 'react';

const nav_items = [
  { label: 'Home', href: '/', icon: '/house.svg' }
];

export default function Sidebar_Component() {
  const [is_minimized, set_is_minimized] = useState(false);

  return (
    <aside
      className={`h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4 transition-all duration-200 ${is_minimized ? 'w-20' : 'w-56'}`}
    >
      <div className={`mb-8 flex items-center justify-between ${is_minimized ? 'justify-center' : ''}`}>
        {!is_minimized && (
          <span className="text-2xl font-bold text-gray-900 dark:text-white">MOI Console</span>
        )}
        <button
          aria-label={is_minimized ? 'Expand sidebar' : 'Minimize sidebar'}
          onClick={() => set_is_minimized((prev) => !prev)}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {nav_items.map((nav_item) => (
          <Link
            key={nav_item.href}
            href={nav_item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${is_minimized ? 'justify-center px-2' : ''}`}
          >
            <img src={nav_item.icon} alt="icon" className="w-6 h-6" />
            {!is_minimized && nav_item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 
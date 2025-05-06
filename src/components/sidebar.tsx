import Link from 'next/link';

const nav_items = [
  { label: 'Organizations', href: '/organizations' },
  { label: 'Projects', href: '/projects' },
  { label: 'MCP Config', href: '/mcp-config' },
  { label: 'API Keys', href: '/api-keys' },
];

export default function sidebar_component() {
  return (
    <aside className="w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col p-4">
      <div className="mb-8">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">MOI Console</span>
      </div>
      <nav className="flex flex-col gap-2">
        {nav_items.map((nav_item) => (
          <Link
            key={nav_item.href}
            href={nav_item.href}
            className="px-4 py-2 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {nav_item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
} 
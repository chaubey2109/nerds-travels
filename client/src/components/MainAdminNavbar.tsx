import { Link, useLocation } from "wouter";
import { LayoutDashboard, FileText, LogOut, HomeIcon } from "lucide-react";

export function AdminNavbar() {
  const [location] = useLocation();

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Home",
      href: "/",
      icon: <HomeIcon size={18} />,
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* LOGO / TITLE */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
              title="Go to Home"
            >
              <span className="text-xl font-bold text-orange-600">
                Nerds Travel
              </span>
            </Link>

            <span className="px-2 py-2 text-xs rounded bg-orange-100 text-orange-600">
              Admin
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium transition ${
                    active
                      ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}

            {/* LOGOUT */}
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition"
            >
              <LogOut size={18} />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { ShoppingBag, User } from "lucide-react";


export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-yellow-500">
                PrimeEats
              </span>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-8">
              <a
                href="#login"
                className="flex items-center gap-2 text-white hover:text-yellow-500"
              >
                <User className="w-5 h-5 " />
                <span className="hidden sm:inline">Login</span>
              </a>
              <button className="flex items-center gap-2 text-yellow-500">
                <ShoppingBag className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

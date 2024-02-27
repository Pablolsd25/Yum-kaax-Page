const Navbar = () => {
  return (
    <nav className="bg-black shadow-md mb-1 mt-1 ml-1 mr-1 mls rounded">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-semibold">
              YUM KAAX
            </a>
          </div>
          {/* Toggler para pantallas pequeñas */}
          <div className="flex md:hidden items-center">
            <button className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:bg-gray-700">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Links */}
          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Acerca
            </a>
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Servicios
            </a>
            <a
              href="#"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
      {/* Menú desplegable para pantallas pequeñas */}
      <div className="md:hidden bg-black">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Acerca
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

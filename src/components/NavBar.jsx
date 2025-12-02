function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
      {/* fixed = position fixed; top-0 = topo da pagina; w-full = width full; /80 = transparencia de 80%; 
      backdrop[...] = efeito fumaçado; z-50 = sobrepõe todas as coisas*/}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <a href="#design" className="hover:text-gray-300">
          Design
        </a>
        <a href="#Câmera" className="hover:text-gray-300">
          Câmera
        </a>
        <a href="#Performance" className="hover:text-gray-300">
          Performance
        </a>
        <a href="#Cores" className="hover:text-gray-300">
          Cores
        </a>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

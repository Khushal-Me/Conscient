import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-cream/80 backdrop-blur-sm z-50 border-b border-beige">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/ed8d4d38-dd9b-4174-957a-d79b3e8f4bcd.png" alt="Adiuvo Logo" className="h-10" />
            <span className="text-2xl font-bold text-deep-red">Adiuvo</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/chat" className="text-brown hover:text-deep-red transition-colors">AI Chat</Link>
            <Link to="/connect" className="text-brown hover:text-deep-red transition-colors">Connect</Link>
            <Link to="/about" className="text-brown hover:text-deep-red transition-colors">About</Link>
          </div>
          <button className="md:hidden text-brown">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 py-16">
          <img 
            src="/lovable-uploads/ed8d4d38-dd9b-4174-957a-d79b3e8f4bcd.png" 
            alt="Adiuvo Logo" 
            className="w-32 h-32 animate-float"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-deep-red">
            Welcome to Adiuvo
          </h1>
          <p className="text-xl text-brown max-w-2xl">
            Your AI-powered wellness companion. Connect, share, and grow with our supportive community and intelligent chat system.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/chat">
              <Button className="bg-deep-red hover:bg-brown text-cream px-8 py-6 text-lg">
                Start Chat
              </Button>
            </Link>
            <Link to="/connect">
              <Button variant="outline" className="border-deep-red text-deep-red hover:bg-deep-red hover:text-cream px-8 py-6 text-lg">
                Connect Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-deep-red mb-4">AI Chat Support</h3>
            <p className="text-brown">Get immediate support and guidance from our AI-powered chat system.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-deep-red mb-4">Connect with Others</h3>
            <p className="text-brown">Find and connect with people who understand your journey.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-deep-red mb-4">Safe Space</h3>
            <p className="text-brown">A secure and supportive environment for sharing and healing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
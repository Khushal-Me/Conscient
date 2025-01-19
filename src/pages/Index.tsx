import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-8 py-16">
          <img 
            src="/lovable-uploads/0345c930-2de1-49b9-a127-a598a3e1dd06.png" 
            alt="Conscient Logo" 
            className="w-64 h-48 object-contain"
            loading="eager"
            fetchPriority="high"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-deep-red">
            Welcome to Conscient
          </h1>
          <p className="text-xl text-brown max-w-2xl">
            Your AI-powered wellness companion. Connect, share, and grow with our supportive community and intelligent chat system.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-8">
          <Link to="/chat">
          <Button className="bg-white hover:bg-white/90 text-deep-red border border-deep-red px-12 py-8 text-xl w-64">
                Start Chat
              </Button>
            </Link>
            <Link to="/diary">
            <Button className="bg-deep-red hover:bg-deep-red/80 text-cream px-12 py-8 text-xl w-64">
                Open Diary
              </Button>
            </Link>
            <Link to="/connect">
            <Button className="bg-white hover:bg-white/90 text-deep-red border border-deep-red px-12 py-8 text-xl w-64">
                Connect
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-4 gap-8 py-16">
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-deep-red mb-4">AI Chat Support</h3>
            <p className="text-brown">Get immediate support and guidance from our AI-powered chat system.</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-deep-red mb-4">Personal Diary</h3>
            <p className="text-brown">Keep track of your thoughts and feelings with our private diary feature.</p>
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
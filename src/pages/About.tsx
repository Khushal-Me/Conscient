import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <h1 className="text-4xl font-bold text-brown mb-8">About Adiuvo</h1>
      <div className="space-y-6">
        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-brown mb-4">Our Mission</h2>
          <div className="space-y-4 text-brown">
            <p>
              Adiuvo is an AI-powered wellness platform created during uOttaHack 7, designed to revolutionize 
              how people connect, share, and support each other through their mental health journeys. Our mission 
              is to make mental wellness support accessible to everyone through the innovative combination of 
              technology and human connection.
            </p>
            <p>
              We believe that no one should face their challenges alone, and that shared experiences can be 
              powerful catalysts for healing and growth.
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-brown mb-4">How We Help</h2>
          <div className="space-y-4 text-brown">
            <p>
              Through our platform, we offer two primary ways of support:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">AI-Guided Support:</span> Our AI companion provides 24/7 
                emotional support, guidance, and resources tailored to your unique situation.
              </li>
              <li>
                <span className="font-semibold">Peer Connections:</span> We intelligently match you with others 
                who understand your specific challenges, creating a supportive community where meaningful 
                connections can flourish.
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-brown mb-4">Our Impact</h2>
          <div className="space-y-4 text-brown">
            <p>
              By combining artificial intelligence with human empathy, we're creating a safe space where:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>People can find understanding and support at any time</li>
              <li>Meaningful connections are formed based on shared experiences</li>
              <li>Mental health resources are accessible and personalized</li>
              <li>Stigma around mental health is reduced through open dialogue</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-brown mb-4">Our Story</h2>
          <div className="space-y-4 text-brown">
            <p>
              Born at uOttaHack 7, Adiuvo emerged from a shared vision to leverage technology for mental 
              wellness support. Our team recognized the growing need for accessible mental health resources 
              and the power of community support, leading to the creation of this innovative platform.
            </p>
            <p>
              We're committed to continuously evolving and improving our platform to better serve our 
              community and make a lasting positive impact on mental health support accessibility.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
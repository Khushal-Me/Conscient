import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { send } from "process";

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<{sender: string; text: string}[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [previousChats] = useState([
    { id: '1', title: 'Wellness Discussion', date: '2024-03-10' },
    { id: '2', title: 'Meditation Tips', date: '2024-03-09' },
    { id: '3', title: 'Stress Management', date: '2024-03-08' },
  ]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    try{
      const response = await fetch('/diary', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ 
        message: {
          role: 'user',
          content: inputMessage 
        }
        }]),
      })
      const data = await response.json();
      const aiMessage = { sender: 'ai', text: data[0].message.content };
      setMessages((prev) => [...prev, aiMessage]);
    }  
    catch (error: any) {
      console.error('Error fetching AI response:', error);
    };
    
    
    // TODO: Implement AI response logic here
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        {/* Previous Chats Sidebar */}
        <div className="col-span-3">
          <Card className="h-full bg-white/50 backdrop-blur-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-brown">Previous Chats</h2>
            </div>
            <ScrollArea className="h-[calc(100%-4rem)]">
              <div className="p-4 space-y-2">
                {previousChats.map((chat) => (
                  <button
                    key={chat.id}
                    className="w-full p-3 text-left rounded-lg hover:bg-beige/20 transition-colors"
                  >
                    <p className="font-medium text-brown truncate">{chat.title}</p>
                    <p className="text-sm text-brown/60">{chat.date}</p>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Main Chat Area */}
        <div className="col-span-9">
          <Card className="h-full bg-white/50 backdrop-blur-sm flex flex-col">
            {/* Chat Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-deep-red text-white'
                          : 'bg-beige text-brown'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" className="bg-deep-red hover:bg-brown">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
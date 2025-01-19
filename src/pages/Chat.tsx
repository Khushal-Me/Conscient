import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return; // Prevent empty messages

    // Add the user's message to the chat
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Clear the input field
    setInput("");

    try {
      // Send the user's message to the AI backend
      const response = await fetch("http://localhost:5000/input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ role: "user", content: input }),
      });
      console.log(response);
      const data = await response.json();
      console.log(data);

      // Add the AI's response to the chat
      const aiMessage = { sender: "ai", text: data[0].response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error communicating with AI:", error);
      const errorMessage = {
        sender: "ai",
        text: "Sorry, there was an issue connecting to the AI. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen bg-cream">
      <div className="grid grid-cols-12 gap-4 h-[calc(100vh-8rem)]">
        {/* Previous Chats Sidebar */}
        {/* <div className="col-span-3">
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
        </div> */}

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
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-deep-red text-white"
                          : "bg-beige text-brown"
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
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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

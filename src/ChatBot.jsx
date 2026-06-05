import { useState } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Welcome to Anjali Art Decor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const replies = [
    {
      keys: ["class", "classes", "kids", "workshop"],
      reply: "We offer Mandala, Dot Mandala, Lippan Art, and kids art workshops. Please share your preferred date and age group."
    },
    {
      keys: ["birthday", "party", "event", "decoration"],
      reply: "Yes, we provide handmade decor for birthdays, parties, festivals, and special events. Please share event date, location, and theme."
    },
    {
      keys: ["mandala", "painting", "art"],
      reply: "We create customized Mandala and handmade decor artwork. You can request color, size, and design style."
    },
    {
      keys: ["price", "cost", "charges"],
      reply: "Pricing depends on artwork size, workshop duration, or event decoration needs. Please share details so we can provide a quote."
    },
    {
      keys: ["contact", "phone", "whatsapp"],
      reply: "You can contact us through WhatsApp or the contact form on this website."
    }
  ];

  const getBotReply = (text) => {
    const lower = text.toLowerCase();

    const match = replies.find((item) =>
      item.keys.some((key) => lower.includes(key))
    );

    return match
      ? match.reply
      : "Thanks for your message. Please share more details, and we will get back to you soon.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotReply(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {open && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            Anjali Art Decor
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

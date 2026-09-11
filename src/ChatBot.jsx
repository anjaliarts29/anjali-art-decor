import React, { useEffect, useState } from "react";
const [showQuickOptions, setShowQuickOptions] = useState(false);

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showQuickOptions, setShowQuickOptions] = useState(false);
  useEffect(() => {
  const timer = setTimeout(() => {
    setIsOpen(true);
  }, 3000);

  return () => clearTimeout(timer);
}, []);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Welcome to Anjali Art Decor. How can I help you today?"
    }
  ]);

  const whatsappNumber = "19725890808";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      "Hi Anjali Art Decor, I would like more information."
    );

  const quickQuestions = [
    {
      label: "🎨 Art Classes",
      key: "classes"
    },
    {
      label: "🎈 Event Decoration",
      key: "events"
    },
    {
      label: "🪔 Festival Decor",
      key: "festival"
    },
    {
      label: "🎁 Custom Artwork",
      key: "custom"
    },
    {
      label: "💰 Pricing",
      key: "pricing"
    },
    {
      label: "📍 Location",
      key: "location"
    },
    {
      label: "📷 View Gallery",
      key: "gallery"
    },
    {
      label: "📱 Contact Us",
      key: "contact"
    }
  ];

  const answers = {
    classes:
      "Yes! We offer creative art and craft classes and workshops for kids and adults, including Mandala art, painting, Lippan art and handmade crafts. Please contact us for current schedules and availability.",

    events:
      "Yes! We provide birthday and small-event decoration including themed setups, balloons, backdrops, table styling and customized artistic decor.",

    festival:
      "We offer Indian festival decoration including Ganpati decor, Diwali decoration, Rangoli-inspired styling and other festive setups. Please share your event date, location and preferred theme.",

    custom:
      "Yes! We create personalized Mandala art, Lippan art, handmade crafts and custom artwork for homes, gifts and celebrations.",

    pricing:
      "Pricing depends on the service, event size, theme, location and level of customization. Please contact us on WhatsApp or submit the inquiry form for a personalized quote.",

    location:
      "We serve Frisco, Dallas, Plano, McKinney and nearby North Texas areas.",

    gallery:
      "You can view examples of our Mandala art, Lippan art, festival decor, birthday decoration and workshops in the Gallery section of this website.",

    contact:
      "You can contact us through WhatsApp or use the inquiry form on this website. We’ll be happy to discuss your art class, artwork or decoration requirements."
  };

  const getAnswer = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("class") ||
      text.includes("workshop") ||
      text.includes("learn")
    ) {
      return answers.classes;
    }

    if (
      text.includes("birthday") ||
      text.includes("party") ||
      text.includes("event")
    ) {
      return answers.events;
    }

    if (
      text.includes("ganpati") ||
      text.includes("ganesh") ||
      text.includes("diwali") ||
      text.includes("rangoli") ||
      text.includes("festival")
    ) {
      return answers.festival;
    }

    if (
      text.includes("mandala") ||
      text.includes("lippan") ||
      text.includes("custom") ||
      text.includes("artwork")
    ) {
      return answers.custom;
    }

    if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("charge") ||
      text.includes("quote")
    ) {
      return answers.pricing;
    }

    if (
      text.includes("location") ||
      text.includes("where") ||
      text.includes("frisco") ||
      text.includes("dallas") ||
      text.includes("plano") ||
      text.includes("mckinney")
    ) {
      return answers.location;
    }

    if (
      text.includes("gallery") ||
      text.includes("picture") ||
      text.includes("photo") ||
      text.includes("work")
    ) {
      return answers.gallery;
    }

    if (
      text.includes("contact") ||
      text.includes("phone") ||
      text.includes("whatsapp") ||
      text.includes("book")
    ) {
      return answers.contact;
    }

    return "I can help you with Art Classes, Event Decoration, Festival Decor, Custom Artwork, Pricing, Location, Gallery and Booking. Please select one of the options below.";
  };

  const handleQuickQuestion = (question) => {
    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: question.label
      },
      {
        sender: "bot",
        text: answers[question.key]
      }
    ]);

    if (question.key === "gallery") {
      setTimeout(() => {
        document
          .getElementById("gallery")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((previous) => [
      ...previous,
      {
        sender: "user",
        text: userText
      },
      {
        sender: "bot",
        text: getAnswer(userText)
      }
    ]);

    setInput("");
  };

  return (
    <>
      {isOpen && (
        <div className="chatWindow">

          <div className="chatHeader">
            <div>
              <strong>Anjali Art Decor</strong>
              <span className="chatOnline">● Online</span>
            </div>

            <button
              className="chatClose"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="chatBody">

            <div className="chatWelcome">
              👋 How can we help?
            </div>

            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "bot"
                    ? "chatMessage botMessage"
                    : "chatMessage userMessage"
                }
              >
                {message.text}
              </div>
            ))}

           <div className="quickOptionsSection">

  <button
    className="quickOptionsToggle"
    onClick={() => setShowQuickOptions(!showQuickOptions)}
  >
    <span>Quick Options</span>
    <span>{showQuickOptions ? "▲" : "▼"}</span>
  </button>

  {showQuickOptions && (
    <div className="quickQuestions">
      {quickQuestions.map((question) => (
        <button
          key={question.key}
          onClick={() => handleQuickQuestion(question)}
        >
          {question.label}
        </button>
      ))}
    </div>
  )}

</div>

            <a
              className="chatWhatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              ☎ Continue on WhatsApp
            </a>

          </div>

          <div className="chatInputArea">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button onClick={handleSend}>
              Send
            </button>
          </div>

        </div>
      )}

      <button
        className="chatLauncher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with Anjali Art Decor"
      >
        💬
      </button>
    </>
  );
}

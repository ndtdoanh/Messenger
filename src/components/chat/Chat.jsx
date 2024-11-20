import { useEffect, useRef, useState } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>ndtdoanh</span>
            <p>This is my profile.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>
              Dating & Meet is a dating and social app designed to connect users
              through features such as swipe, matches, messaging, random video
              calls, and an AI-powered chatbot.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};
export default Chat;

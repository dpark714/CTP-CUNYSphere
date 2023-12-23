import React, { useState, useEffect, useRef } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { app } from '../firebase'; 
import { useAuth } from '../context/AuthContext'; 
import './ChatRoom.css';

const database = getDatabase(app);
const messagesRef = ref(database, 'messages');

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const { user } = useAuth(); 
  const bottomRef = useRef();

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const loadedMessages = Object.entries(data).map(([key, val]) => ({
        key,
        ...val,
      }));
      setMessages(loadedMessages);
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (user && formValue.trim()) { // Check if the user exists and the message is not just whitespace
      await push(messagesRef, {
        text: formValue.trim(),
        createdAt: Date.now(),
        userFirstName: user.firstName, // Assuming the user object has a firstName property
      });

      setFormValue('');
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="chat-room">
      <div className="messages-container">
        {messages.map(({ key, uid, text, userFirstName }) => (
          <div key={key} className={`message ${uid === user.uid ? 'sent' : 'received'}`}>
            <div className="message-content">
              <p>{text}</p>
            </div>
            <div className="message-name">{userFirstName}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="message-input-area">
        <input
          className="message-input"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message here..."
        />
        <button type="submit" className="send-button" disabled={!formValue.trim()}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatRoom;
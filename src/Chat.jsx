import chill from "./imgs/logo.png"
import React, { useState, useEffect, useRef } from "react";
import { db, auth } from "./firebase";
import SendMessage from "./SendMessage";


function Chat() {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <div className="logo">
      <a href="choosing.shop">
        <img src={chill} alt="" />
        <p>Shop</p>
      </a>
      </div>
      <div className="msgs">
        {messages.map(({ id, text }) => (
          <div>
            <div key={id} className={`msg received`}>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
}

export default Chat;
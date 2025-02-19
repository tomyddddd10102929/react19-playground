import { useState } from 'react'
import './App.css'
import { Message, Threads } from './features/message/Threads'
import { deliverMessage } from './features/message/action';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello!', sending: false },
  ]);

  async function sendMessage(formData: FormData) {
    const sendMessage = await deliverMessage(formData.get("message") as string);
    setMessages(messages => [...messages, { text: sendMessage, sending: false }]);
  }

  return <Threads messages={messages} sendMessage={sendMessage} />

}

export default App

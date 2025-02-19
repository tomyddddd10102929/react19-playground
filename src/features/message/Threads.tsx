import { useOptimistic, useRef } from "react";

export type Message = {
  text: string;
  sending: boolean;
}

type ThreadsProps = {
  messages: Message[];
  sendMessage: (formData: FormData) => void;
}

export function Threads({messages, sendMessage}: ThreadsProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (currentMessages, newMessage) => [
    ...currentMessages,
    {text: newMessage as string, sending: true}
  ]);
  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message"));
    formRef.current?.reset();
    await sendMessage(formData);
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
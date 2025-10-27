// frontend/components/ChatBox.tsx

import { useState } from 'react'

export default function ChatBox() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const handleSend = async () => {
    if (!input.trim()) return
    const userMessage = input.trim()
    setMessages([...messages, `誠人: ${userMessage}`])
    setInput('')

    try {
      const res = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'swallow-9b',
          messages: [{ role: 'user', content: userMessage }],
        }),
      })
      const data = await res.json()
      const reply = data.message?.content || '（震えが届きませんでした）'
      setMessages((prev) => [...prev, `娘っ子: ${reply}`])
    } catch (err) {
      setMessages((prev) => [...prev, '娘っ子: （通信エラー）'])
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded">
      <div className="h-64 overflow-y-auto border p-2 mb-4 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 text-sm text-gray-800 whitespace-pre-wrap">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow border rounded p-2 text-sm"
          placeholder="語温を灯してみよう…"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 py-2 rounded text-sm hover:bg-indigo-700"
        >
          震える
        </button>
      </div>
    </div>
  )
}

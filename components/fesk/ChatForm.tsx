'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { chatMessages } from '@/components/fesk/ChatMessageWrapper'

const ChatForm = () => {
  const [content, setContent] = useState('')
  const { addChatMessage } = chatMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addChatMessage(content)
    setContent('')
    // const reply = await sendSpringMessage([])
    // setContent(reply.data.result.output.text)
    // addChatMessage(reply)
  }

  return (
    <div className='chat-text-area-wrapper'>
      <form onSubmit={handleSubmit}>
        <div>
          <TextArea
            id="my-text-area"
            name="content"
            placeholder="Enter your message here..."
            rows={3}
            value={content}
            autoFocus
            className="!p-3 text-gray-300 focus:outline-none focus:ring-1"
            onChange={(e: any) => setContent(e.target.value)}
          />
        </div>
        <div className='chat-submit'>
          <div>
            {/* <button className="btn btn-xs btn-primary">Send</button> */}
            <button className="btn btn-sm btn-outline btn-primary">
              send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatForm

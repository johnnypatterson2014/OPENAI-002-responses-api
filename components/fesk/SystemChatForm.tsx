'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { chatMessages } from '@/components/fesk/ChatMessageWrapper'


const SystemChatForm = ({ prompt }) => {
  const [content, setContent] = useState('')
  const { addChatMessage } = chatMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addChatMessage(content, "developer")
    setContent('')
    // const reply = await sendSpringMessage([])
    // setContent(reply.data.result.output.text)
    // addChatMessage(reply)
  }

  const loadTemplate = async (e?: any) => {
    e?.preventDefault()
    setContent(prompt)
    const el = document.querySelector('#promptTemplateDropdown');
    // el.style.display = 'none';
    document.activeElement.blur();
  }

  return (
    <>

      <div className='mt-[10px] mb-[10px]'>

        <div className="dropdown dropdown-right">
          <div tabIndex={0} role="button" className="btn btn-sm btn-primary m-[2px]">load template</div>
          <ul id="promptTemplateDropdown" tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-grey-500 z-1 w-50 p-[5px] m-[5px] shadow-sm">

            <li><a onClick={loadTemplate}>generic</a></li>
            <li><a>code generation</a></li>
            <li><a>agentic</a></li>

          </ul>
        </div>

      </div>

      <div className='chat-text-area-wrapper'>
        <form onSubmit={handleSubmit}>
          <div>
            <TextArea
              id="my-text-area"
              name="content"
              placeholder="Enter your message here..."
              rows={10}
              value={content}
              autoFocus
              className="!p-3 text-gray-300 focus:outline-none focus:ring-1"
              onChange={(e: any) => setContent(e.target.value)}
            />
          </div>
          <div className='float-right'>
            <div className='m-[8px]'>
              {/* <button className="btn btn-xs btn-primary">Send</button> */}
              <button className="btn btn-sm btn-primary">
                send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default SystemChatForm

'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { chatMessages } from '@/components/fesk/ChatMessageWrapper'

const ChatForm = () => {
  const [content, setContent] = useState('')
  const { addChatMessage } = chatMessages()

  const handleSubmit = async (formData: FormData, e?: any) => {
    e?.preventDefault()

    console.log('role: ' + formData.get('role'))
    console.log('model: ' + formData.get('model'))

    // const model = formData.get('model') as string;
    // const temperature = formData.get('temperature') as string;
    const mapOfFormData = {
      content: content,
      role: formData.get('role'),
      model: 'gpt-4.1',
      temperature: '1'
    }

    addChatMessage(mapOfFormData)
    setContent('')

  }

  return (
    <>

      <div className='chat-text-area-wrapper'>
        <form id='basic-chat-form' action={handleSubmit}>

          <div className='m-[8px]'>

            <div>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">role</legend>
                <select id='role' name='role' defaultValue='user' className="select">
                  <option value="developer">developer</option>
                  <option value="user">user</option>
                </select>
              </fieldset>

            </div>

            <div>
              <TextArea
                id="my-text-area-basic"
                name="content"
                placeholder="Enter your message here..."
                rows={10}
                value={content}
                autoFocus
                className="!p-3 text-gray-300 focus:outline-none focus:ring-1"
                onChange={(e: any) => setContent(e.target.value)}
              />
            </div>
            <div>
              <div className='grid grid-flow-col justify-items-end'>
                <div className='m-[2px]'>
                  {/* <button className="btn btn-xs btn-primary">Send</button> */}
                  <button className="btn btn-sm btn-primary">
                    send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ChatForm

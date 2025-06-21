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

    const roleValueBasic = document.getElementById('role-display-text-basic').innerHTML;

    console.log('role-field-basic: ' + roleValueBasic)

    // const model = formData.get('model') as string;
    // const temperature = formData.get('temperature') as string;
    const mapOfFormDataBasic = {
      content: content,
      role: roleValueBasic,
      model: 'gpt-4.1',
      temperature: '1'
    }

    console.log(JSON.stringify(mapOfFormDataBasic))

    addChatMessage(mapOfFormDataBasic)
    setContent('')

  }

  const updateHiddenInputBasic = (id: string, value: string) => {
    const myDiv = document.getElementById(id + '-display-text-basic');
    myDiv.innerHTML = value;
    // alert('id: ' + id + ', value: ' + value)
    document.activeElement.blur();
  }

  return (
    <>

      <div className='chat-text-area-wrapper'>
        <form id='basic-chat-form' action={handleSubmit}>

          <div className='m-[8px]'>

            <div className='flex ml-[10px]'>
              <div className='shrink'>

                <div className='flex fesk-fieldset p-[2px]'>
                  <div className='flex-1 fesk-fieldset-label content-center justify-items-end mr-[2px]'><div>role</div></div>
                  <div id='role-display-text-basic' className='flex-1 fesk-fieldset-input content-center'>user</div>
                  <div className='flex-none fesk-fieldset content-center'>

                    <div className="dropdown dropdown-bottom dropdown-start">
                      <div tabIndex={0} role="button" className="btn btn-xs btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z" /><path fill="currentColor" d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" /></svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-grey-500 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                        <li><a onClick={() => updateHiddenInputBasic('role', 'user')}>user</a></li>
                        <li><a onClick={() => updateHiddenInputBasic('role', 'developer')}>developer</a></li>

                      </ul>
                    </div>

                  </div>
                </div>

              </div>
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

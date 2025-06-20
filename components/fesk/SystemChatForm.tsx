'use client';

import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
// import { sendSpringMessage } from 'utils/sendSpringMessage'
import { chatMessages } from '@/components/fesk/ChatMessageWrapper'


const SystemChatForm = ({ prompt }) => {
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
      model: formData.get('model'),
      temperature: formData.get('temperature')
    }

    addChatMessage(mapOfFormData)
    setContent('')

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

      <div className='chat-text-area-wrapper'>
        <form id='chat-form' action={handleSubmit}>

          <div className='m-[8px]'>

            <div className='grid grid-cols-4 gap-[10px] ml-[10px] mr-[10px]'>

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

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">model</legend>
                  <select id='model' name='model' defaultValue='gpt-4.1' className="select">
                    <option>gpt-4.1</option>
                  </select>
                </fieldset>

              </div>
              <div>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">temperature</legend>
                  <select id='temperature' name='temperature' defaultValue='1' className="select">
                    <option>1</option>
                  </select>
                </fieldset>

              </div>
              <div>

                <div className='mt-[35px] ml-[10px] mb-[10px]'>

                  <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-primary btn-soft m-[2px]">load template</div>
                    <ul id="promptTemplateDropdown" tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-grey-500 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                      <li><a onClick={loadTemplate}>generic</a></li>
                      <li><a>code generation</a></li>
                      <li><a>agentic</a></li>

                    </ul>
                  </div>

                </div>

              </div>


            </div>

            <div className='m-[10px] p-[8px] my-card-outline-2 w-[200px]'>

              <div className='flex'>
                <div className='flex-none'><input type="checkbox" id="websearch-enabled" name="websearch-enabled" className="checkbox checkbox-xs" /></div>
                <div className='flex-1 ml-[10px]'>enable web search tool</div>

              </div>

            </div>

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

export default SystemChatForm

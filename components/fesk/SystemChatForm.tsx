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
    const roleValue = document.getElementById('role-display-text').innerHTML;
    const modelValue = document.getElementById('model-field').value;
    const temperatureValue = document.getElementById('temperature-field').value;

    const websearchEnabled = document.getElementById("websearch-enabled").checked;

    console.log('role: ' + roleValue)
    console.log('model: ' + modelValue)
    console.log('temperature: ' + temperatureValue)
    console.log('websearchEnabled: ' + websearchEnabled)

    // const model = formData.get('model') as string;
    // const temperature = formData.get('temperature') as string;
    const mapOfFormData = {
      content: content,
      role: roleValue,
      model: modelValue,
      temperature: temperatureValue,
      websearchEnabled: websearchEnabled
    }

    console.log(JSON.stringify(mapOfFormData))

    addChatMessage(mapOfFormData)
    setContent('')

  }

  const loadTemplate = async (e?: any) => {
    e?.preventDefault()
    setContent(prompt)
    // const el = document.querySelector('#promptTemplateDropdown');
    // el.style.display = 'none';
    document.activeElement.blur();
  }

  const updateHiddenInput = (id: string, value: string) => {
    const myDiv = document.getElementById(id + '-display-text');
    myDiv.innerHTML = value;
    // alert('id: ' + id + ', value: ' + value)
    document.activeElement.blur();
  }

  return (
    <>

      <div className='chat-text-area-wrapper'>
        <form id='chat-form' action={handleSubmit}>

          <div className='m-[8px]'>


            <div className='grid grid-cols-4 gap-[10px] ml-[10px] mr-[10px]'>
              <div>

                <div className='flex fesk-fieldset p-[2px]'>
                  <div className='flex-1 fesk-fieldset-label content-center justify-items-end mr-[2px]'><div>role</div></div>
                  <div id='role-display-text' className='flex-1 fesk-fieldset-input content-center'>user</div>
                  <div className='flex-none fesk-fieldset content-center'>

                    <div className="dropdown dropdown-bottom dropdown-start">
                      <div tabIndex={0} role="button" className="btn btn-xs btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z" /><path fill="currentColor" d="M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z" /></svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-blue-200 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                        <li><a onClick={() => updateHiddenInput('role', 'user')}>user</a></li>
                        <li><a onClick={() => updateHiddenInput('role', 'developer')}>developer</a></li>

                      </ul>
                    </div>

                  </div>
                </div>

              </div>


              <div>

                <div className='flex fesk-fieldset p-[2px]'>
                  <div className='flex-1 fesk-fieldset-label content-center justify-items-end mr-[2px]'><div>model</div></div>
                  <div id='model-display-text' className='flex-1 fesk-fieldset-input content-center'>gpt-4.1</div>
                  <div className='flex-none fesk-fieldset content-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" /></svg>


                    <input type="hidden" id="model-field" name="model-field" value="gpt-4.1"></input>

                  </div>
                </div>


              </div>
              <div>

                <div className='flex fesk-fieldset p-[2px]'>
                  <div className='flex-1 fesk-fieldset-label content-center justify-items-end mr-[2px]'><div>temperature</div></div>
                  <div id='temperature-display-text' className='flex-1 fesk-fieldset-input content-center'>1</div>
                  <div className='flex-none fesk-fieldset content-center'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 1024 1024"><path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" /></svg>

                    <input type="hidden" id="temperature-field" name="temperature-field" value="1"></input>

                  </div>
                </div>

              </div>
              <div>

                <div className='content-center'>

                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-primary btn-soft m-[2px]">load template</div>
                    <ul id="promptTemplateDropdown" tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-blue-200 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                      <li><a onClick={loadTemplate}>generic</a></li>
                      <li><a>code generation</a></li>
                      <li><a>agentic</a></li>

                    </ul>
                  </div>

                </div>


              </div>
            </div>


            <div className='m-[10px] p-[5px] my-card-outline-2 w-[200px]'>

              <div className='flex items-center'>
                <div className='flex-none mt-[5px] ml-[5px]'>
                  <input type="checkbox" id="websearch-enabled" name="websearch-enabled" value='false' className="" />
                </div>
                <div className='flex-1 mt-[1px] ml-[10px]'>enable web search</div>

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

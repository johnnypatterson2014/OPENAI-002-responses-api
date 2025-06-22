'use client';

import { chatMessages } from '@/components/fesk/ChatMessageWrapper'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import ChatRequestResponseObject from '@/components/fesk/ChatRequestResponseObject'
import { useState } from 'react'
import { remark } from 'remark';
import html from 'remark-html';

const ChatHistory = () => {
  const { messages, isLoadingAnswer, setActiveResponseId, getChatHistory, llmResponseList } = chatMessages()
  const [markdownHtml, setMarkdownHtml] = useState('')

  const handleActiveId = async (id: string, e?: any) => {
    e?.preventDefault()
    setActiveResponseId(id)
    document.getElementById('my_modal_4').showModal()
  }

  const handleSources = async (id: string) => {

    console.log('id: ' + id);

    const foundItem = llmResponseList.find(item => item.id === id);
    const sourcesArray = JSON.stringify(foundItem.output[1].content[0].annotations, null, 2);

    const myDiv = document.getElementById('sources')
    myDiv.innerHTML = sourcesArray;

    document.getElementById('my_modal_7').showModal()
  }

  const handleUserRequestId = async (id: string, e?: any) => {
    e?.preventDefault()
    getChatHistory(id)
    document.getElementById('my_modal_5').showModal()
  }

  const convertMarkdownToHtml = async (markdown: string) => {
    const processedContent = await remark()
      .use(html)
      .process(markdown);

    const parsedContent = processedContent.toString().replaceAll('\\n\\n', '<br /><br />');
    setMarkdownHtml(parsedContent);
    document.getElementById('my_modal_6').showModal()
  }

  const isExistingChatMessages = (messages != null && messages.length > 0);

  return (
    <>

      <div className='fesk-h2'>chat history</div>
      {
        !isExistingChatMessages && (
          <div
            className='p-[5px]'
            style={{ color: "#999999" }}
          >(no chat messages)
          </div>
        )
      }
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        const isDeveloper = message.role === 'developer'
        const isAssistant = message.role === 'assistant'
        const nextIndex = i + 1
        let nextMessageId = null;
        if (isUser && (nextIndex < messages.length)) {
          nextMessageId = messages[nextIndex].responseMessageId
        }

        return (
          <div id={`message-${i}`} className='my-card-chat' key={`message-${i}`}>
            <div className={`flex chat-message w-auto`} >
              {isAssistant && (
                <>
                  <div className='flex-none min-width-[20px] max-width-[20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8ec5ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                  </div>
                  <div className='grow ml-4 text-blue-300'>{message.content}</div>

                </>
              )
              }
              {isDeveloper && (
                <>
                  <div className='flex-none min-width-[20px] max-width-[20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7bf1a8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                  </div>

                  <div className='grow ml-4 text-green-300'>{message.content}</div>

                </>
              )}
              {isUser && (
                <>
                  <div className='flex-none min-width-[20px] max-width-[20px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffdf20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
                  </div>
                  <div className='grow ml-4 text-yellow-300'>{message.content}</div>

                  {message.websearchEnabled && (
                    <div className='flex-none min-width-[20px] max-width-[20px] content-center mr-[12px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" stroke="#ffdf20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13" /><path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7" /></g></svg>
                    </div>
                  )
                  }

                  {message.vectorStoreId && (
                    <div className='flex-none min-width-[20px] max-width-[20px] content-center mr-[10px]'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffdf20" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20z" /></svg>
                    </div>
                  )
                  }

                </>
              )
              }


              {
                isAssistant && (
                  <div className='float-right grow'>
                    {/* <button className='btn btn-xs mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>view raw json</button>
                  <button className='btn btn-xs mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>render markkup</button> */}
                    <div className="dropdown dropdown-bottom dropdown-end float-right">
                      <div tabIndex={0} role="button" className="btn btn-xs mt-[3px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#89aaf0" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-blue-200 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                        <li><a onClick={() => handleActiveId(message.responseMessageId)}>view json</a></li>
                        <li><a onClick={() => handleUserRequestId(message.responseMessageId)}>view input request json</a></li>
                        <li><a onClick={() => convertMarkdownToHtml(message.content)}>view rendered markdown</a></li>

                        {message.websearchEnabled && (
                          <li><a onClick={() => handleSources(message.responseMessageId)}>view sources</a></li>
                        )}

                        {message.vectorStoreId && (
                          <li><a onClick={() => handleSources(message.responseMessageId)}>view citations</a></li>
                        )}

                      </ul>
                    </div>

                    {message.websearchEnabled && (

                      <div role="button" className="btn btn-xs m-[3px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 14"><g fill="none" stroke="#b1c6f3" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13M.5 7h13" /><path d="M9.5 7A11.22 11.22 0 0 1 7 13.5A11.22 11.22 0 0 1 4.5 7A11.22 11.22 0 0 1 7 .5A11.22 11.22 0 0 1 9.5 7" /></g></svg>
                      </div>

                    )
                    }

                    {message.vectorStoreId && (

                      <div role="button" className="btn btn-xs mr-[3px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#89aaf0" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20z" /></svg>
                      </div>

                    )
                    }

                  </div>

                )
              }

              <dialog id="my_modal_4" className="modal">

                <div className="modal-box w-11/12 max-w-5xl h-11/12">

                  <div className='pre-scrollable overflow-auto'>
                    <ChatResponseObject />

                  </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <dialog id="my_modal_5" className="modal">

                <div className="modal-box w-11/12 max-w-5xl h-11/12">

                  <div className='pre-scrollable overflow-auto'>
                    <ChatRequestResponseObject />

                  </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <dialog id="my_modal_6" className="modal">

                <div className="modal-box w-11/12 max-w-5xl h-11/12">

                  <div dangerouslySetInnerHTML={{ __html: markdownHtml }} />

                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

              <dialog id="my_modal_7" className="modal">

                <div className="modal-box w-11/12 max-w-5xl h-11/12">

                  <div className='pre-scrollable overflow-auto'>

                    <span>
                      <pre id='sources' className='text-xs'></pre>
                    </span>

                  </div>

                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>

            </div >
          </div >
        )
      })}

      {
        isLoadingAnswer && (
          <div className='flex my-card-chat'>
            <div className="flex chat-message" >
              <div className='flex-none'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e9fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
              </div>

              <div className="loader-line-1">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>
          </div>
        )
      }

      {/* {llmResponseList?.map((llmResponse, i) => {
        return (
          <div id={`llmResponse-${i}`} className='my-card-chat' key={`llmResponse-${i}`}>
            {JSON.stringify(llmResponse)}

          </div>
        )
      })} */}
    </>
  )
}

export default ChatHistory

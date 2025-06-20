'use client';

import { chatMessages } from '@/components/fesk/ChatMessageWrapper'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import ChatRequestResponseObject from '@/components/fesk/ChatRequestResponseObject'

const ChatHistory = () => {
  const { messages, isLoadingAnswer, setActiveResponseId, getChatHistory } = chatMessages()

  const handleActiveId = async (id: string, e?: any) => {
    e?.preventDefault()
    setActiveResponseId(id)
    document.getElementById('my_modal_4').showModal()
  }

  const handleUserRequestId = async (id: string, e?: any) => {
    e?.preventDefault()
    getChatHistory(id)
    document.getElementById('my_modal_5').showModal()
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

                </>
              )
              }


              {
                isAssistant && (
                  <div className='float-right grow'>
                    {/* <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>view raw json</button>
                  <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>render markkup</button> */}
                    <div className="dropdown dropdown-bottom dropdown-end float-right">
                      <div tabIndex={0} role="button" className="btn btn-xs btn-ghost mt-[3px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                      </div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box outline-[1px] outline-grey-500 z-1 w-50 p-[5px] m-[5px] shadow-sm">

                        <li><a onClick={() => handleActiveId(message.responseMessageId)}>view json</a></li>
                        <li><a onClick={() => handleUserRequestId(message.responseMessageId)}>view input request json</a></li>
                        <li><a href=''>todo - view rendered markup</a></li>

                      </ul>
                    </div>
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

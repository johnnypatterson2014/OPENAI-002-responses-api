'use client';

import { chatMessages } from '@/components/fesk/ChatMessageWrapper'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'

const ChatHistory = () => {
  const { messages, isLoadingAnswer, setActiveResponseId } = chatMessages()

  const handleActiveId = async (id: string, e?: any) => {
    e?.preventDefault()
    setActiveResponseId(id)
    document.getElementById('my_modal_4').showModal()
  }

  const isExistingChatMessages = messages.length > 0;

  return (
    <>

      <div className='text-grey-100'>chat history</div>
      {
        !isExistingChatMessages && (
          <div
            className='text-grey-800 m-[10px]'
            style={{ color: "#999999" }}
          >(no chat messages)
          </div>
        )
      }
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        const isDeveloper = message.role === 'developer'
        const isAssistant = message.role === 'assistant'

        return (
          <div id={`message-${i}`} className='my-card-chat' key={`message-${i}`}>
            <div className={`flex chat-message w-auto`} >
              {isAssistant && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e9fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                  <div className='ml-4 text-blue-300'>{message.content}</div>
                </>
              )}
              {isDeveloper && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0aea58" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
                  <div className='ml-2 text-green-300'>{message.content}</div>
                </>
              )}
              {isUser && (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffdf20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
                  <div className='ml-2 text-yellow-300'>{message.content}</div>
                </>
              )}


              {isAssistant && (
                <div className='float-right grow'>
                  {/* <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>view raw json</button>
                  <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>render markkup</button> */}
                  <div className="dropdown dropdown-bottom dropdown-end float-right">
                    <div tabIndex={0} role="button" className="btn btn-xs btn-ghost mt-[3px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box outline-[1px] outline-black z-1 w-30 p-[5px] m-[5px] shadow-sm">

                      <li>
                        <button className='btn btn-sm btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>view json</button>
                      </li>
                    </ul>
                  </div>
                </div>

              )}

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

            </div>
          </div>
        )
      })}

      {isLoadingAnswer && (
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
      )}

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

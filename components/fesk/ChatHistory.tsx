'use client';

import { chatMessages } from '@/components/fesk/ChatMessageWrapper'

const ChatHistory = () => {
  const { messages, isLoadingAnswer, setActiveResponseId } = chatMessages()

  const handleActiveId = async (id: string, e?: any) => {
    e?.preventDefault()
    setActiveResponseId(id)
  }

  return (
    <>

      <div className='text-grey-100'>chat history</div>
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        const isAssistant = message.role === 'assistant'

        return (
          <div id={`message-${i}`} className='my-card-chat' key={`message-${i}`}>
            <div className={`flex chat-message`} >
              {!isUser && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e9fff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5" /></svg>
              )}
              {isUser && (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffdf20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" /></svg>
              )}
              <div
                style={{ maxWidth: 'calc(100% - 45px)' }}
                className={`rounded-sm ${isUser
                  ? 'ml-2 text-yellow-300'
                  : 'ml-2 text-blue-300'
                  }`}
              >
                {message.content}
                {isAssistant && (
                  <div>
                    <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>view raw json</button>
                    <button className='btn btn-xs btn-ghost mt-[3px]' onClick={() => handleActiveId(message.responseMessageId)}>render markkup</button>
                    <div className="dropdown dropdown-right">
                      <div tabIndex={0} role="button" className="btn btn-xs btn-ghost mt-[3px]">click me</div>
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                      </ul>
                    </div>
                  </div>
                )}

              </div>
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

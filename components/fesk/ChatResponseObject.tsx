'use client';

import { chatMessages } from '@/components/fesk/ChatMessageWrapper'

const ChatResponseObject = () => {
  const { activeId, llmResponseList } = chatMessages()

  const isActiveIdProvided = activeId !== ''
  let foundItem = null;
  let displayText = null;

  if (isActiveIdProvided) {
    foundItem = llmResponseList.find(item => item.id === activeId);
    displayText = JSON.stringify(foundItem, null, 2);
  }

  return (
    <>
      <label className='fesk-card-h2'>Chat response object</label>

      {isActiveIdProvided && (
        <span>
          <pre>{displayText}</pre>
        </span>
      )}

      {!isActiveIdProvided && (
        <p>Click the 'raw json' button in the assistant's response to see the raw data.</p>
      )}

    </>
  )
}

export default ChatResponseObject

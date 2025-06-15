'use client';

// import ChatCompletionRequestMessage from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendChatRequest } from '@/lib/sendChatRequest'

export interface ChatMessage {
  role: string
  content: string
  responseMessageId: string
}

interface ContextProps {
  messages: ChatMessage[]
  addChatMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
  llmResponseList: any[]
  activeId: string
  setActiveResponseId: (content: string) => void
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function ChatMessageWrapper({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [llmResponseList, setLlmResponseList] = useState<any[]>([])
  const [activeId, setActiveId] = useState<string>('')

  const setActiveResponseId = async (id: string) => {
    setActiveId(id)
  }

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatMessage = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.',
        responseMessageId: '',
      }
      const welcomeMessage: ChatMessage = {
        role: 'system',
        content: 'Hi, How can I help you today?',
        responseMessageId: '',
      }
      setMessages([systemMessage, welcomeMessage])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI
    if (!messages?.length) {
      initializeChat()
    }
  }, [messages?.length, setMessages])

  const addChatMessage = async (content: string) => {
    setIsLoadingAnswer(true)
    try {
      const newMessage: ChatMessage = {
        role: 'user',
        content: content,
        responseMessageId: '',
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const data = await sendChatRequest(newMessage)
      setLlmResponseList([...llmResponseList, data])
      // console.log('reponse in chatMessageWrapper: ' + JSON.stringify(data));

      const reply = data.output[0].content[0].text
      console.log('reply is: ' + reply)

      const responseMessage: ChatMessage = {
        role: 'assistant',
        content: reply,
        responseMessageId: data.id,
      }

      // Add the assistant message to the state
      setMessages([...newMessages, responseMessage])
    } catch (error) {
      // Show error when something goes wrong
      // addToast({ title: 'An error occurred', type: 'error' })
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  return (
    <ChatsContext.Provider value={{ messages, addChatMessage, isLoadingAnswer, llmResponseList, activeId, setActiveResponseId }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const chatMessages = () => {
  return useContext(ChatsContext) as ContextProps
}


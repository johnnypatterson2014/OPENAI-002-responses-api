'use client';

import { useToast } from '@apideck/components'
import { ChatCompletionRequestMessage } from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendChatRequest } from '@/lib/sendChatRequest'

interface ContextProps {
  messages: ChatCompletionRequestMessage[]
  addChatMessage: (content: string) => Promise<void>
  isLoadingAnswer: boolean
}

const ChatsContext = createContext<Partial<ContextProps>>({})

export function ChatMessageWrapper({ children }: { children: ReactNode }) {
  // const { addToast } = useToast()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatCompletionRequestMessage = {
        role: 'system',
        content: 'You are ChatGPT, a large language model trained by OpenAI.'
      }
      const welcomeMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: 'Hi, How can I help you today?'
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
      const newMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const { data } = await sendChatRequest(newMessage)
      const reply = data.answer

      const responseMessage: ChatCompletionRequestMessage = {
        role: 'assistant',
        content: reply
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
    <ChatsContext.Provider value={{ messages, addChatMessage, isLoadingAnswer }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const chatMessages = () => {
  return useContext(ChatsContext) as ContextProps
}

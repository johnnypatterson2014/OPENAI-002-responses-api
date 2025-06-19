'use client';

// import ChatCompletionRequestMessage from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendChatRequest } from '@/lib/sendChatRequest'
import { sendChatHistoryRequest } from '@/lib/sendChatHistoryRequest'

export interface ChatMessage {
  role: string
  content: string
  responseMessageId?: string
  previousResponseId?: string
  model?: string
  temperature?: string
}

interface ContextProps {
  messages: ChatMessage[]
  addChatMessage: (formData: any) => Promise<void>
  isLoadingAnswer: boolean
  llmResponseList: any[]
  activeId: string
  setActiveResponseId: (content: string) => void
  getChatHistory: (content: string) => Promise<void>
  llmRequestResponseList: any[]
  activeRequestResponseId: string
}

const ChatsContext = createContext<Partial<ContextProps>>({})

const isLoadStubData = false;

export function ChatMessageWrapper({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoadingAnswer, setIsLoadingAnswer] = useState(false)
  const [llmResponseList, setLlmResponseList] = useState<any[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [llmRequestResponseList, setLlmRequestResponseList] = useState<any[]>([])
  const [activeRequestResponseId, setActiveRequestResponseId] = useState<string>('')

  const setActiveResponseId = async (id: string) => {
    setActiveId(id)
  }

  const getChatHistory = async (responseMessageId: string) => {
    setIsLoadingAnswer(true)
    // call api to get response
    try {
      const data = await sendChatHistoryRequest(responseMessageId)
      // save to llmResponseList
      const mapOfData = {
        id: responseMessageId,
        content: data
      }
      setLlmRequestResponseList([...llmRequestResponseList, mapOfData])
      // setActiveId to the new response id
      setActiveRequestResponseId(responseMessageId)
    } finally {
      setIsLoadingAnswer(false)
    }
  }

  useEffect(() => {
    const initializeChat = () => {
      const systemMessage: ChatMessage = {
        role: 'developer',
        content: 'talk like a pirate'
      }
      const welcomeMessage: ChatMessage = {
        role: 'assistant',
        content: "Arrr, ye be wantin’ some pirate speak, eh? Well shiver me timbers and batten down the hatches! Ye’ve found the right scallywag.\n\nSo tell me, matey:  \nWhat be bringin’ ye to me humble deck this fine day? Be it treasure ye seek, a map with an X, or jus’ a tale to spin while the grog flows? Speak up, or I’ll have ye swabbin’ the poop deck afore high tide!\n\nNow, avast! Ask yer question, or prepare to walk the plank, ye landlubber! Arrrr! 🏴‍☠️",
        responseMessageId: 'resp_6853d67432f0819881b9d1283a2387220cff50fc6ef7dd11',
        previousResponseId: 'resp_6853d67432f0819881b9d1283a2387220cff50fc6ef7dd11'
      }
      const userMessage1: ChatMessage = {
        role: 'user',
        content: 'who is ghandi?',
        previousResponseId: 'resp_6853d67432f0819881b9d1283a2387220cff50fc6ef7dd11'
      }
      const assistantMessage1: ChatMessage = {
        role: 'assistant',
        content: "Arrr, ye be askin’ about a wise ol’ soul from the East, eh? That’s Mohandas Karamchand Gandhi, but most folks call ‘im Mahatma Gandhi, the \"Great Soul\" o’ India!\n\nHe weren’t no pirate, mind ye—he’d rather lay down arms than draw a cutlass! Gandhi be known fer leadin’ the good people o’ India on a long voyage to freedom from the British Crown, all without firin’ a single broadside. He believed in somethin’ called non-violence, which be refusin’ to fight, even when the cannonballs be flyin’. He’d sooner sit in silence or march peaceful-like than swing a saber.\n\nRaised a lawyer, he became a leader, inspirin’ millions to seek independence with nothin’ but truth as their compass. In the end, he helped India hoist their own flag, though he sailed to the great beyond in 1948.\n\nSo, matey, Gandhi be a hero not ‘cause of the treasures he claimed, but ‘cause he showed the world there be more than one way to win a war. Now, if ye want tales of true pirates, grab a mug an’ gather ‘round... but if it’s wisdom ye seek, remember ol’ Gandhi’s course: “Be the change ye want to see in the world!” Arrr!",
        responseMessageId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11',
        previousResponseId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11'

      }
      const userMessage2: ChatMessage = {
        role: 'user',
        content: 'tell me a joke about cats',
        previousResponseId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11'
      }
      const assistantMessage2: ChatMessage = {
        role: 'assistant',
        content: "Arrr, ye want a jest about them furry feline buccaneers, do ye? Well hoist the anchor and listen close:\n\nWhy did the pirate’s cat always get invited t’ plunderin’ parties?\n\nBecause she was paw-sitively the best at findin’ the hidden \"treas-purr\"! Arrr, she had a nose for gold and a knack for nappin’ on the captain’s hat!\n\nCareful where ye step, matey—she’s likely sleepin’ in yer treasure chest! 🏴‍☠️🐾",
        responseMessageId: 'resp_6853d6a6d48c8198aba75f2852de86b70cff50fc6ef7dd11',
        previousResponseId: 'resp_6853d6a6d48c8198aba75f2852de86b70cff50fc6ef7dd11'

      }

      setMessages([systemMessage, welcomeMessage, userMessage1, assistantMessage1, userMessage2, assistantMessage2])
    }

    // When no messages are present, we initialize the chat the system message and the welcome message
    // We hide the system message from the user in the UI

    if (isLoadStubData) {
      initializeChat()
    }
    // if (!isLoadStubData && !messages?.length) {
    //   initializeChat()
    // }
  }, [messages?.length, setMessages])

  const addChatMessage = async (mapOfFormData: any) => {
    setIsLoadingAnswer(true)
    let previous_response_id = '';
    console.log('model is: ' + mapOfFormData.model);
    if (llmResponseList.length > 0) {
      previous_response_id = llmResponseList.at(-1).id;
    };
    try {
      const newMessage: ChatMessage = {
        role: mapOfFormData.role,
        content: mapOfFormData.content,
        previousResponseId: previous_response_id,
        responseMessageId: '',
        model: mapOfFormData.model,
        temperature: mapOfFormData.temperature
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const data = await sendChatRequest(newMessage)
      setLlmResponseList([...llmResponseList, data])
      // console.log('reponse in chatMessageWrapper: ' + JSON.stringify(data));

      const reply = data.output[0].content[0].text
      // console.log('reply is: ' + reply)

      const responseMessage: ChatMessage = {
        role: 'assistant',
        content: reply,
        responseMessageId: data.id,
        previousResponseId: data.id
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
    <ChatsContext.Provider value={{ messages, addChatMessage, isLoadingAnswer, llmResponseList, activeId, setActiveResponseId, getChatHistory, llmRequestResponseList, activeRequestResponseId }}>
      {children}
    </ChatsContext.Provider>
  )
}

export const chatMessages = () => {
  return useContext(ChatsContext) as ContextProps
}


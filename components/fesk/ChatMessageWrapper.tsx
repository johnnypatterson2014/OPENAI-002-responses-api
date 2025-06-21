'use client';

// import ChatCompletionRequestMessage from 'openai'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { sendChatRequest } from '@/lib/sendChatRequest'
import { sendChatHistoryRequest } from '@/lib/sendChatHistoryRequest'
import { remark } from 'remark';
import html from 'remark-html';

export interface ChatMessage {
  role: string
  content: string
  responseMessageId?: string
  previousResponseId?: string
  model?: string
  temperature?: string
  websearchEnabled?: boolean
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

const isLoadStubData = true;

const convertMarkdownToHtml = async (markdown: string) => {
  const processedContent = await remark()
    .use(html)
    .process(markdown);
  return processedContent.toString();
}

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
        content: 'who is jfk?',
        previousResponseId: 'resp_6853d67432f0819881b9d1283a2387220cff50fc6ef7dd11'
      }
      const assistantMessage1: ChatMessage = {
        role: 'assistant',
        content: "**JFK** commonly refers to **John Fitzgerald Kennedy**, the 35th President of the United States. Here are some key details:\n\n- **Full Name:** John Fitzgerald Kennedy  \n- **Born:** May 29, 1917  \n- **Died:** November 22, 1963  \n- **Presidency:** 1961–1963  \n- **Political Party:** Democratic  \n- **Famous For:**  \n  - Leading the U.S. during critical Cold War events like the Cuban Missile Crisis  \n  - Launching the Apollo space program effort (“We choose to go to the Moon”)  \n  - Initiating the Peace Corps  \n  - Advocating for civil rights  \n- **Assassination:** He was assassinated in Dallas, Texas, in 1963, a major event in American history.\n\n“JFK” is also used as an abbreviation for:\n- **John F. Kennedy International Airport** in New York City.\n  \nIf you want more detailed info on his life, presidency, or legacy, let me know!",
        responseMessageId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11',
        previousResponseId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11'

      }
      const userMessage2: ChatMessage = {
        role: 'user',
        content: 'who is ghandi?',
        previousResponseId: 'resp_6853d68215a8819887596a6ff31b3e190cff50fc6ef7dd11'
      }
      const assistantMessage2: ChatMessage = {
        role: 'assistant',
        content: "Arrr, so ye be askin’ about a landlubber by the name o’ Gandhi, eh? Sit yerself on a barrel, and let ol’ GPT the Pirate spin the tale!\n\n**Mahatma Gandhi** (properly named Mohandas Karamchand Gandhi, ye see) be a wise and peaceful soul from the far-off land o’ India. Instead o’ takin’ up the sword or the cannon, this clever gent led a battle fer freedom usin’ naught but truth an’ non-violence. He rallied his crew—aye, the people of India—to cast off the British Crown’s rule, not with a broadside, but with protests, marches, an’ a mighty strong will.\n\nFer his efforts, the crew called ‘im the \"Father o’ the Nation,\" and folk ‘cross the seven seas remember his wisdom to this day. No pirate he, but a legend in his own right—fought fer justice with the courage of any pirate king, just without swingin’ a cutlass!\n\nIf ye be wantin’ more about this clever captain of peace, or another tale from the briny deep, just give the word, matey! Arrr!",
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

  const addChatMessage = async (mapData: any) => {
    setIsLoadingAnswer(true)
    let previous_response_id = '';
    console.log('ChatMessageWrapper model is: ' + mapData.model);
    console.log('ChatMessageWrapper role is: ' + mapData.role);
    if (llmResponseList.length > 0) {
      previous_response_id = llmResponseList.at(-1).id;
    };
    try {
      const newMessage: ChatMessage = {
        role: mapData.role,
        content: mapData.content,
        previousResponseId: previous_response_id,
        responseMessageId: '',
        model: mapData.model,
        temperature: mapData.temperature,
        websearchEnabled: mapData.websearchEnabled
      }
      const newMessages = [...messages, newMessage]

      // Add the user message to the state so we can see it immediately
      setMessages(newMessages)

      const data = await sendChatRequest(newMessage)
      setLlmResponseList([...llmResponseList, data])
      // console.log('reponse in chatMessageWrapper: ' + JSON.stringify(data));

      let replyText = '';
      if (mapData.websearchEnabled) {
        // replyText = await convertMarkdownToHtml(JSON.stringify(data.output[1].content[0].text));
        replyText = JSON.stringify(data.output[1].content[0].text);
      } else {
        replyText = data.output[0].content[0].text
      }
      // console.log('reply is: ' + reply)

      const responseMessage: ChatMessage = {
        role: 'assistant',
        content: replyText,
        responseMessageId: data.id,
        previousResponseId: data.id,
        websearchEnabled: mapData.websearchEnabled
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


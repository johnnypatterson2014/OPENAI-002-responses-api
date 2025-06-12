import ChatForm from '@/components/fesk/ChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'

const IndexSpringPage: NextPage = () => {
  return (
    <>
      <div className="article-wrapper">

        <div className="article-body-wrapper">

          <ChatMessageWrapper>
            <div className='flex'>
              <div className='flex-1'>
                <div className="my-card text-sm">
                  <ChatHistory />
                  <ChatForm />
                </div>
              </div>
            </div>
          </ChatMessageWrapper>

        </div>

      </div>
    </>
  )
}

export default IndexSpringPage

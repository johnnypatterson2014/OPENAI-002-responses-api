import ChatForm from '@/components/fesk/ChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'

const IndexSpringPage: NextPage = () => {
  return (
    <>
      <div className="article-wrapper">

        <div className="article-body-wrapper">

          <ChatMessageWrapper>
            <div className='flex'>
              <div className='min-w-[700px] max-w-[700px]'>
                <div className="my-card text-sm">
                  <ChatHistory />
                  <ChatForm />
                </div>
              </div>
              <div className='min-w-[700px] max-w-[700px] pre-scrollable overflow-x-auto'>
                <div className="my-card text-sm">
                  <ChatResponseObject />
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

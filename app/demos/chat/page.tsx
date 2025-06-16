import ChatForm from '@/components/fesk/ChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'
import SideNav from '@/components/fesk/SideNav';

const IndexSpringPage: NextPage = () => {
  return (
    <>

      <div className=''>

        <div className="absolute top-[53px] left-0 my-main-content text-sm w-full">

          <ChatMessageWrapper>

            <div className='flex w-auto'>

              <div className='flex'>


                <SideNav />


              </div>

              <div className='flex-2/3'>

                <div className="my-card text-sm">
                  <ChatHistory />
                </div>

                <div className="my-card text-sm">
                  <ChatForm />
                </div>

              </div>

              <div className='flex-none w-[400px] max-h-full'>

                <div className='my-card pre-scrollable overflow-auto'>
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

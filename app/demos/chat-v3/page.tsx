import ChatForm from '@/components/fesk/ChatForm'
import SystemChatForm from '@/components/fesk/SystemChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'
import SideNav from '@/components/fesk/SideNav';
import SideNavToggle from '@/components/fesk/SideNavToggle';
import SideNavToggle2 from '@/components/fesk/SideNavToggle2';
import { TextArea } from '@apideck/components'
import { promises as fs } from 'fs';

const instructions = await fs.readFile(process.cwd() + '/app/data/prompt.txt', 'utf8');

const ChatPage: NextPage = () => {

  return (
    <>

      <div className=''>

        <div className="absolute top-[53px] left-0 my-main-content text-sm w-full">

          <ChatMessageWrapper>

            <div id="fesk-main-content" className='flex w-auto h-7/10'>


              <nav id="sidebar2">
                <div className='flex-none w-[250px] h-8/10'>



                  <div className='my-card-console h-screen'>

                    <div>
                      <SideNavToggle2 />
                    </div>



                  </div>



                </div>
              </nav>


              <div className='grow ml-[8px]'>




                <div className="tabs tabs-lift">
                  <input type="radio" name="my_tabs_3" className="tab pb-[4px] mb-[0px]" aria-label="system prompt" defaultChecked />
                  <div className="tab-content">

                    <div className='fesk-tab-content'>

                      <SystemChatForm prompt={instructions} />

                    </div>


                  </div>

                  <input type="radio" name="my_tabs_3" className="tab pb-[4px] mb-[0px]" aria-label="user prompt" />
                  <div className="tab-content">

                    <div className='fesk-tab-content'>

                      <ChatForm />

                    </div>

                  </div>

                  <input type="radio" name="my_tabs_3" className="tab pb-[4px] mb-[0px]" aria-label="file input" />
                  <div className="tab-content bg-base-100 border-base-300 p-6 -translate-y-1">

                    Tab content 3

                  </div>

                  <input type="radio" name="my_tabs_3" className="tab pb-[4px] mb-[0px]" aria-label="manual prompt" />
                  <div className="tab-content bg-base-100 border-base-300 p-6 -translate-y-1">

                    Tab content 4

                  </div>
                </div>

                <div className='my-card-history overflow-y-auto'>
                  <ChatHistory />
                </div>




              </div>










              <nav id="sidebar">


                <div className='flex-none w-[450px] h-7/10'>

                  <div className='my-card-console-right h-screen'>

                    <div>
                      <SideNavToggle />
                    </div>



                  </div>

                </div>

              </nav>

            </div>

          </ChatMessageWrapper>

        </div>

      </div>

    </>
  )
}

export default ChatPage

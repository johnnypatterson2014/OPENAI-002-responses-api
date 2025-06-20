import ChatForm from '@/components/fesk/ChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import ChatResponseObject from '@/components/fesk/ChatResponseObject'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'
import SideNav from '@/components/fesk/SideNav';
import SideNavToggle from '@/components/fesk/SideNavToggle';
import SideNavToggle2 from '@/components/fesk/SideNavToggle2';

const IndexSpringPage: NextPage = () => {
  return (
    <>

      <div className=''>

        <div className="absolute top-[53px] left-0 my-main-content text-sm w-full">

          <ChatMessageWrapper>

            <div id="fesk-main-content" className='flex w-auto h-full'>


              <div className='grow'>


                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                  <input type="radio" name="my_tabs_3" className="tab" aria-label="system prompt" defaultChecked />
                  <div className="tab-content">

                    <div className='fesk-tab-content'>
                      <ChatHistory />

                      <ChatForm />
                    </div>


                  </div>

                  <input type="radio" name="my_tabs_3" className="tab" aria-label="basic query" />
                  <div className="tab-content bg-base-100 border-base-300 p-6">

                    Tab content 2

                  </div>

                  <input type="radio" name="my_tabs_3" className="tab" aria-label="file input" />
                  <div className="tab-content bg-base-100 border-base-300 p-6">

                    Tab content 3

                  </div>

                  <input type="radio" name="my_tabs_3" className="tab" aria-label="advanced query" />
                  <div className="tab-content bg-base-100 border-base-300 p-6">

                    Tab content 4

                  </div>
                </div>







              </div>

              <nav id="sidebar2">
                <div className='flex-none w-[450px] max-h-full'>

                  {/* <div className='my-card pre-scrollable overflow-auto'>
                  <ChatResponseObject />

                </div> */}

                  <div className='my-card-console h-screen'>

                    <div>
                      <SideNavToggle2 />
                    </div>

                    <div className='mx-[40px]'>

                      <details className="collapse">
                        <summary className="collapse-title">How do I create an account?</summary>
                        <div className="collapse-content text-sm my-collapse w-[400px]">

                          testing. Click the "Sign Up" button in the top right corner and follow the registration process.

                        </div>
                      </details>




                    </div>

                  </div>



                </div>
              </nav>

              <nav id="sidebar">


                <div className='flex-none w-[450px] max-h-full'>

                  <div className='my-card-console-right h-screen'>

                    <div>
                      <SideNavToggle />
                    </div>

                    <div className='mx-[40px]'>

                      <details className="collapse">
                        <summary className="collapse-title">How do I create an account?</summary>
                        <div className="collapse-content text-sm my-collapse w-[400px]">

                          testing. Click the "Sign Up" button in the top right corner and follow the registration process.

                        </div>
                      </details>




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

export default IndexSpringPage

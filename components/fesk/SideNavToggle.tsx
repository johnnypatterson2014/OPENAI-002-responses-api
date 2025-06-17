'use client';

import ChatResponseObject from '@/components/fesk/ChatResponseObject'

export default function SideNavToggle() {

  const handleClick = () => {
    const toggleButton = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate')
  };

  return (
    <>

      <div className='flex w-auto'>
        <div className='flex-none'>

          <div className="grid grid-flow-col grid-cols-20">

            <div className="col-span-1">
              <button id="toggle-btn"
                className="btn"
                onClick={handleClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 16l4-4l-4-4m-6 8l4-4l-4-4" /></svg>

              </button>

              <div>
                <p className="[writing-mode:vertical-lr] rotate-180">console</p>
              </div>

            </div>



            <div className="col-span-19 mt-[10px] ml-[10px]">


              <div className="collapse">
                <input id='collapse-checkbox' type="checkbox" />
                <div className="collapse-title">How do I create an account?</div>
                <div className="collapse-content overflow-x-auto w-[370px]">
                  Click the "Sign Up" button in the top right corner and follow the registration process.
                </div>
              </div>

              <div className='pre-scrollable overflow-auto'>
                <ChatResponseObject />

              </div>

              {/* <details className="collapse">
                <summary className="collapse-title">How do I create an account?</summary>
                <div className="collapse-content text-sm my-collapse w-[350px]">

                  testing. Click the "Sign Up" button in the top right corner and follow the registration process.

                </div>
              </details> */}
            </div>

          </div>

        </div>

      </div>

    </>
  );
}

'use client';

export default function SideNavToggle() {

  const handleClick = () => {
    const toggleButton2 = document.getElementById('toggle-btn2');
    const sidebar2 = document.getElementById('sidebar2');
    sidebar2.classList.toggle('close');
    toggleButton2.classList.toggle('rotate')
  };

  return (
    <>

      <div className='flex w-auto'>
        <div className='flex-none'>

          <div className="grid grid-flow-col grid-cols-1 grid-rows-2 w-[24px]">

            <div className="row-span-1">
              <button id="toggle-btn2"
                className="btn"
                onClick={handleClick}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 16l4-4l-4-4m-6 8l4-4l-4-4" /></svg>

              </button>
            </div>

            <div className='row-span-1 mt-[8px]'>
              <p className="[writing-mode:vertical-lr] rotate-180">tools</p>
            </div>

          </div>

        </div>

      </div>

    </>
  );
}

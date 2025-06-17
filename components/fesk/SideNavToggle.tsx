'use client';

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

          <button id="toggle-btn"
            className="btn"
            onClick={handleClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13 16l4-4l-4-4m-6 8l4-4l-4-4" /></svg>

          </button>

        </div>
        <p className="[writing-mode:vertical-lr] rotate-180 fesk-card-h1">Lorem, ipsum.</p>
        <div className='grow content-center mx-[10px]'>
          my label
        </div>
      </div>

    </>
  );
}

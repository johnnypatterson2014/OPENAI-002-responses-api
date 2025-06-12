'use client';

import SideNavToggle from '@/components/fesk/SideNavToggle';
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function SideNav() {

    const pathname = usePathname();
    // console.log(pathname);

    return (
        <>

            <nav id="sidebar">
                <ul>
                    <li>
                        <span className="logo">launchpad</span>

                        <SideNavToggle />

                        {/* <button id="toggle-btn" className="btn" onClick={toggleSidebar}>Default</button> */}


                    </li>

                    <li>

                        <ul id="nav-menu-wrapper" className="menu w-full">

                            <li className={pathname === "/" ? "active text-sm flex-1" : "text-sm flex-1"}>
                                <Link id='link-1' href={'/'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" /><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" /></svg>
                                    <span>Home</span>
                                </Link>

                            </li>


                            <li className="text-sm flex-1">
                                <details>
                                    <summary className='menu-dropdown'>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" className="css-1p0t9ol-Icon"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
                                        <span>Demos</span>
                                    </summary>
                                    <ul className='ml-7'>
                                        <li className={pathname === "/demos/chat" ? "active text-sm flex-1" : "text-sm flex-1"}>
                                            <Link id='link-1' href={'/demos/chat'}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                                <span>Chat</span>
                                            </Link>

                                        </li>
                                    </ul>
                                </details>
                            </li>




                            <li className="text-sm flex-1">
                                <details>
                                    <summary className='menu-dropdown'>
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18" className="css-1p0t9ol-Icon"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68a1,1,0,0,0,.4,1,1,1,0,0,0,1.05.07L12,18.76l5.1,2.68a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.89l.72,4.19-3.76-2a1,1,0,0,0-.94,0l-3.76,2,.72-4.19a1,1,0,0,0-.29-.89l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"></path></svg> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" /></svg>
                                        <span>Documentation</span>
                                    </summary>
                                    <ul className='ml-7'>
                                        <li className={pathname === "/documentation/technology-stack" ? "active" : ""}>
                                            <Link id='link-1' href={'/documentation/technology-stack'}>
                                                technology stack
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='ml-7'>
                                        <li className={pathname === "/documentation/architecture" ? "active" : ""}>
                                            <Link id='link-1' href={'/documentation/architecture'}>
                                                architecture
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='ml-7'>
                                        <li>
                                            <Link id='link-2' href={'/documentation/coming-soon'}>
                                                observability
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='ml-7'>
                                        <li>
                                            <Link id='link-2' href={'/documentation/coming-soon'}>
                                                test driven development
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='ml-7'>
                                        <li>
                                            <Link id='link-2' href={'/documentation/coming-soon'}>
                                                software design best practices
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className='ml-7'>
                                        <li>
                                            <Link id='link-2' href={'/documentation/coming-soon'}>
                                                agentic design patterns
                                            </Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>

                    </li>

                </ul>









            </nav >

        </>
    );

}
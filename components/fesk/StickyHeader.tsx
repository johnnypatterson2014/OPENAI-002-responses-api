'use client';

import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function StickyHeader() {

    const pathname = usePathname();
    const pathSegments = pathname.split('/').filter(segment => segment);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const label = segment.charAt(0) + segment.slice(1).replace(/-/g, " ");
        return { label, path };
    });

    return (
        <>

            <div className="fixed inset-x-0 top-0 z-10">

                <div id="myheader" className="flex w-full">

                    <div className="flex-1">

                        <div className="breadcrumbs text-sm">

                            <ul>
                                <li>
                                    <a href="/">home</a>
                                </li>

                                {breadcrumbs.map((item, index) => (
                                    <li key={index}>
                                        {index === breadcrumbs.length - 1 ? (
                                            <span className='bc-active'>{item.label}</span>
                                        ) : (
                                            <Link href={item.path}>{item.label}</Link>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                    <div className="flex-none text-sm">
                        <button className="btn btn-sm btn-outline btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                            grafana
                        </button>
                    </div>

                    <div className="flex-none text-sm">
                        <Link id='link-1' href={'/login'}>
                            <button className="btn btn-sm btn-outline btn-primary">
                                Sign-in
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" /></svg>
                            </button>
                        </Link>
                    </div>

                </div>


            </div>

        </>
    );

}
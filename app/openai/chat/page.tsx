import Image from "next/image";
import ChatForm from '@/components/fesk/ChatForm'
import ChatHistory from '@/components/fesk/ChatHistory'
import SystemChatForm from '@/components/fesk/SystemChatForm'
import { ChatMessageWrapper } from '@/components/fesk/ChatMessageWrapper'
import { promises as fs } from 'fs';

const instructions = await fs.readFile(process.cwd() + '/app/data/prompt.txt', 'utf8');

export default function Home() {
    return (
        <>

            <ChatMessageWrapper>

                <div className="grid grid-cols-2 gap-[10px]">

                    <div className="ml-[10px] fesk-card">

                        <div className='fesk-h2'>chat prompt</div>

                        <div className="m-[10px]">

                            <div className="fesk-card-2">

                                <div className="collapse">
                                    <input id='collapse-checkbox' type="checkbox" />
                                    <div className="collapse-title">

                                        <div className="fesk-collapse-title">
                                            <div className="p-[5px]">
                                                system prompt
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            <SystemChatForm prompt={instructions} />

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="fesk-card-2 mt-[10px]">

                                <div className="collapse">
                                    <input id='collapse-checkbox' type="checkbox" />
                                    <div className="collapse-title">

                                        <div className="fesk-collapse-title">
                                            <div className="p-[5px]">
                                                user prompt
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            <ChatForm />

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="fesk-card-2 mt-[10px]">

                                <div className="collapse">
                                    <input id='collapse-checkbox' type="checkbox" />
                                    <div className="collapse-title">

                                        <div className="fesk-collapse-title">
                                            <div className="p-[5px]">
                                                tools
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            Coming soon.

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="fesk-card-2 mt-[10px]">

                                <div className="collapse">
                                    <input id='collapse-checkbox' type="checkbox" />
                                    <div className="collapse-title">

                                        <div className="fesk-collapse-title">
                                            <div className="p-[5px]">
                                                manual prompt
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            Coming soon.

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>

                    <div className="fesk-card mr-[10px]">
                        <ChatHistory />
                    </div>

                </div>
            </ChatMessageWrapper>
        </>
    );
}

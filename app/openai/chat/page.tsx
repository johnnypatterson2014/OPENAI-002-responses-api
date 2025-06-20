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

                <div className="grid grid-cols-2 gap-[10px] mb-[10px]">



                    <div className="ml-[10px] fesk-card">

                        <div className='fesk-h2'>chat prompt</div>

                        <div className="m-[10px]">

                            <div className="fesk-card-2">

                                <div className="collapse">
                                    <input id='collapse-checkbox' type="checkbox" />
                                    <div className="collapse-title">

                                        <div className="fesk-collapse-title">
                                            <div className="p-[5px]">
                                                basic prompt
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[0px]">

                                            <div className="fesk-collapse-title-2">
                                                <div className="p-[0px]">

                                                    <ChatForm />
                                                </div>

                                            </div>

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
                                                advanced prompt
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[0px]">

                                            <div className="fesk-collapse-title-2">
                                                <div className="p-[0px]">

                                                    <SystemChatForm prompt={instructions} />

                                                </div>

                                            </div>

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
                                                RAG
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            <div className="fesk-collapse-title-2">
                                                <div className="p-[10px]">

                                                    coming soon.

                                                </div>

                                            </div>

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
                                                MCP
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            <div className="fesk-collapse-title-2">
                                                <div className="p-[10px]">

                                                    coming soon.

                                                </div>

                                            </div>

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
                                                image analysis
                                                <div className="float-right pr-[10px]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#ffffff" d="M12 6a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm-8 8a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4zm8 0a1.999 1.999 0 1 0 0 4a1.999 1.999 0 1 0 0-4z" /></svg>
                                                </div>
                                            </div>

                                        </div>




                                    </div>
                                    <div className="collapse-content">
                                        <div className="p-[1px] m-[2px]">

                                            <div className="fesk-collapse-title-2">
                                                <div className="p-[10px]">

                                                    coming soon.

                                                </div>

                                            </div>

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

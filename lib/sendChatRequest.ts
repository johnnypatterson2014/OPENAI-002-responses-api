import { ChatMessage } from '@/components/fesk/ChatMessageWrapper'

export const sendChatRequest = async (chatMessage: ChatMessage) => {
  try {

    const content = chatMessage.content
    console.log('content: ' + content)
    console.log('role: ' + chatMessage.role)
    console.log('previousResponseId: ' + chatMessage.previousResponseId)

    // example GET
    // const response = await fetch('/api/test', {
    //   method: 'GET'
    // })
    // return await response.json()

    // example POST
    const mapBody = { 'content': content, 'role': chatMessage.role, 'previousResponseId': chatMessage.previousResponseId };
    const response = await fetch('/api/test', {
      method: 'POST',
      body: JSON.stringify(mapBody),
    });

    const responseData = await response.json();
    // console.log('reponse in sendChatRequest: ' + JSON.stringify(responseData));

    return responseData;
  } catch (error) {
    console.log(error)
  }
}

import { ChatMessage } from '@/components/fesk/ChatMessageWrapper'

export const sendChatRequest = async (chatMessage: ChatMessage) => {
  try {

    const myQuery = chatMessage.content
    console.log('myQuery: ' + myQuery)

    // example GET
    // const response = await fetch('/api/test', {
    //   method: 'GET'
    // })
    // return await response.json()

    // example POST
    const mapBody = { 'question': myQuery };
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

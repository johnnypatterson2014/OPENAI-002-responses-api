import ChatCompletionRequestMessage from 'openai'

export const sendChatRequest = async (chatMessage: ChatCompletionRequestMessage) => {
  try {

    const myQuery = chatMessage.content
    console.log('myQuery: ' + myQuery)

    // example GET
    // const response = await fetch('/api/springIntegration?message=' + myQuery, {
    //   method: 'GET'
    // })
    // return await response.json()

    // example POST
    const mapBody = { 'question': myQuery };
    const response = await fetch('/api/turn_response', {
      method: 'POST',
      body: JSON.stringify(mapBody),
    });

    return await response.json();
  } catch (error) {
    console.log(error)
  }
}


export const loginRequest = async () => {
  try {

    // example GET
    const response = await fetch('/api/login', {
      method: 'GET'
    })
    return await response.json()

  } catch (error) {
    console.log(error)
    return error.message;
  }
}

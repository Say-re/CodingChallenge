// @flow

//Simple POST API (Returns response object)
export const sampleAPI = async (url: string = "", data) => {
  try {
    const plainFormData = Object.fromEntries(data.entries());
    const response = await fetch(url, {
      method: 'POST',
      header: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(plainFormData)
    });
    if (response.status >= 400) {
      return new Error('Post Request Unsuccessful')
    }
    return response.json();
  } catch (error) {
    console.log(error);
    return new Error('Post Request Failed to Submit')
  }
}

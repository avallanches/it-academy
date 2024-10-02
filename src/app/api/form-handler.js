import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Your PHP script's logic goes here

    const youplatformUrl = 'https://youplatform.ru/admin/_integration/site-form/forms';
    
    // Assuming you're getting cookies and form data from the request
    const cookieData = req.cookies.youplatform_cookie ? JSON.parse(req.cookies.youplatform_cookie) : {};
    const formData = req.body; // assuming the form data is in the request body

    const data = {
      api_key: '62EzRANEEnZrzQrKz6r8EtyHs53TDR9G',
      code: 'youplatform_forms',
      ...cookieData,
      ...formData
    };

    try {
      // Sending a POST request to YouPlatform API
      const response = await axios.post(youplatformUrl, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Respond back to the client with the response from the API
      res.json(response.data);
    } catch (error) {
      console.error('Error sending data to YouPlatform:', error);
      res.status(500).send('Error processing form submission');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}

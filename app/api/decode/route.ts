import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // Extract the encoded data from the request body
      const { encodedData } = req.body;
  
      if (!encodedData) {
        res.status(400).json({ error: 'Encoded data is required.' });
        return;
      }
  
      // Decode the data
      const decodedData = decodeEnvironmentalData(encodedData);
  
      // Respond with the decoded data
      res.status(200).json(decodedData);
    } else {
      // Handle any requests that aren't POST
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  
function decodeEnvironmentalData(encodedData: string) {
    // Convert the hex string to bytes
    const bytes = Buffer.from(encodedData, 'hex');
  
    // Decode water height (2 bytes)
    const waterHeight = (bytes[0] << 8) | bytes[1];
  
    // Decode temperature (1 byte)
    const temperature = ((bytes[2] / 2.0) - 40.0).toFixed(1); // Keep one decimal place
  
    // Decode humidity (1 byte)
    const humidity = bytes[3];
  
    // Decode pressure (2 bytes)
    const pressure = ((bytes[4] << 8) | bytes[5]) + 300;
  
    return {
      waterHeight,
      temperature: parseFloat(temperature), // Convert string back to float
      humidity,
      pressure,
    };
  }
  
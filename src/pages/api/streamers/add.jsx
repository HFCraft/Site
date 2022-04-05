import { app } from '../../../lib/firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Handler = async (req, res) => {
  res.setHeader('Allow', ['POST'])
  try {
    switch (req.method) {
      case 'POST':
        // Add document
        const Add = async () => {
          const { username, image, link } = req.query

          // Delete the doc, if passed the tests
          await addDoc(collection(getFirestore(), 'streamers'), {
            username: username,
            image: image,
            link: link,
          })

          // Response
          res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            sponsor: {
              username: username,
              image: image,
              link: link
            },
          })

          return true
        }

        // Tests
        const Response = async () => {
          const { username, image, link, key } = req.query
          // Verify the key

          if (username === undefined ||
            username === false ||
            image === undefined ||
            image === false ||
            link === undefined ||
            link === false ||
            key !== process.env.ADD_SPONSORS_SECRET_KEY
          ) {
            // Response
            await res.status(400).json({
              statusCode: 400,
              statusText: 'Bad Request',
              success: false,
              method: req.method,
            })

            // Break the Response
            return false
          }

          Add()
        }

        Response()
        break
      default:
        res.status(405).json({
          statusCode: 405,
          statusText: `Method Not Allowed`,
          success: false,
          method: req.method,
        })
        
        return false
    }
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      statusText: 'Internal Server Error',
      success: false,
      method: req.method,
      error: err.message,
    })
    return false
  }
}

export default Handler

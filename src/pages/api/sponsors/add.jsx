import { app } from '../../../lib/firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Handler = async (req, res) => {
  res.setHeader('Allow', ['POST'])
  try {
    switch (req.method) {
      case 'POST':
        // Add document
        const Add = async () => {
          const { id } = req.query

          // Delete the doc, if passed the tests
          await addDoc(collection(getFirestore(), 'sponsors'), {
            username: query.username,
            image: query.image,
            link: query.link,
          })

          // Response
          res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            message: `Deleted document ${id} with success!`,
          })
          return true
        }

        // Tests
        const Response = () => {
          const { id, key } = req.query
          // Verify the key
          if (key !== process.env.ADD_SPONSORS_SECRET_KEY) {
            res.status(401).json({
              statusCode: 401,
              statusText: `Unauthorized`,
              success: false,
              method: req.method,
            })
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

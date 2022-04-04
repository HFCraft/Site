import { app } from '../../../lib/firebase'
import { doc, collection, deleteDoc, getFirestore } from 'firebase/firestore'

const Handler = (req, res) => {
  res.setHeader('Allow', ['DELETE'])
  try {
    switch (req.method) {
      case 'DELETE':
        // Delete the document
        const Delete = async () => {
          const { id } = req.query

          // Delete the doc, if passed the tests
          await deleteDoc(doc(getFirestore(), 'streamers', id))

          // Response
          return res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            message: `Deleted document ${id} with success!`,
          })
          return true
        }

        // Tests
        const Response = async () => {
          const { id, key } = req.query
          // Verify the key
          if (key !== process.env.DEL_STREAMERS_SECRET_KEY) {
            await res.status(401).json({
              statusCode: 401,
              statusText: `Unauthorized`,
              success: false,
              method: req.method,
            })
            return false
          }

          // Verify the id
          if (id === undefined || id === false) {
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

          Delete()
        }

        // Calling functions
        Response()

        // End
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

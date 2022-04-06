// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { doc, deleteDoc, getFirestore } from 'firebase/firestore'

// Api Handler
const DeleteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'DELETE':
        // Set the 'Allow' header
        res.setHeader('Allow', ['DELETE'])

        // Tests functions
        /// Unauthorized
        const Unauthorized: any = (): boolean => {
          // Response
          res.status(401).send({
            statusCode: 401,
            statusText: `Unauthorized`,
            success: false,
            method: req.method,
          })

          // Break the request
          return false
        }

        /// Bad Request
        const BadRequest: any = (): boolean => {
          // Response
          res.status(400).send({
            statusCode: 400,
            statusText: 'Bad Request',
            success: false,
            method: req.method,
          })

          // Break the request
          return false
        }

        // Tests
        const Verify: any = (): null => {
          const { id, key } = req.query
          // Verify the key
          if (req.headers.authorization !== `DELETE ${process.env.DEL_STREAMERS_SECRET_KEY}`) {
            Unauthorized()
          }

          // Verify the id
          if (id === undefined) {
            BadRequest()
          }

          // Break the request
          return null
        }

        // Delete the document
        const Delete: any = async () => {
          // Get the query
          const { id } = req.query

          // Delete the doc, if passed the tests
          await deleteDoc(doc(getFirestore(), 'streamers', `${id}`))

          // Response
          res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            message: `Deleted document ${id} with success!`,
          })

          // Break the request
          return true
        }

        // Calling functions
        await Verify()
        await Delete()

      // End
      break
      default:
        // Set the 'Allow' header
        res.setHeader('Allow', ['DELETE'])

        // Response
        res.status(405).send({
          statusCode: 405,
          statusText: `Method Not Allowed`,
          success: false,
          method: req.method,
        })

        // Break the request
        return false
    }
  } /* Catch error */ catch (err: any) {
    // Set the 'Allow' header
    res.setHeader('Allow', ['DELETE'])
    
    // Response
    res.status(500).send({
      statusCode: 500,
      statusText: 'Internal Server Error',
      success: false,
      method: req.method,
      error: err.message,
    })

    // Break the request
    return false
  }
}

// Export
export default DeleteHandler

// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { doc, deleteDoc, getFirestore } from 'firebase/firestore'
import { isNullOrUndefined } from 'node:util'

// Api Handler
const DeleteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'DELETE':
        // Tests functions
        /// Unauthorized function
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

        /// Bad Request function
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

        // Verify function
        const Verify: any = (): null => {
          const { id } = req.query
          // Verify the key
          if (req.headers.authorization !== `DELETE ${process.env.DEL_STREAMERS_SECRET_KEY}`) {
            Unauthorized()
          } else if (isNullOrUndefined(id)) {
            BadRequest()
          }

          // Break the function
          return null
        }

        // Delete function
        const Delete: any = (): null => {
          // Get the query
          const { id } = req.query

          // Delete the doc, if passed the tests
          deleteDoc(doc(getFirestore(), 'streamers', `${id}`))

          // Break the function
          return null
        }

        // Response function
        const Response: any = (): boolean => {
          // Get the query
          const { id } = req.query
          
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
        await Response()

      // End
      break
      default:
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

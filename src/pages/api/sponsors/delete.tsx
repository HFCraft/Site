// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { doc, deleteDoc, getFirestore } from 'firebase/firestore'
import { isNullOrUndefined } from 'node:util'

// Api Handler
const DeleteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Set the 'Allow' header
  res.setHeader('Allow', ['DELETE'])

  ///
  try {
    switch (req.method) {
      case 'DELETE':
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

        // Verify function
        const Verify: any = (): any => {
          // Request query
          const { id } = req.query

          // Test's
          if (req.headers.authorization !== `DELETE ${process.env.DEL_SPONSORS_SECRET_KEY}`) {
            Unauthorized()
          } else if (isNullOrUndefined(id)) {
            BadRequest()
          }
        }

        // Delete function
        const Delete: any = async () => {
          // Request query
          const { id } = req.query

          // Delete the doc, if passed the tests
          await deleteDoc(doc(getFirestore(), 'sponsors', `${id}`))
          
          // Break the function
          return false
        }

        // Response function
        const Response: any = (): boolean => {
          // Request query
          const { id } = req.query

          // Response
          res.status(200).send({
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

export default DeleteHandler

// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { isNullOrUndefined } from 'node:util'

// Api Handler
const AddHandler: any = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'POST':
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
          // Get the query
          const { username, image, link } = req.query

          // Test's
          if (req.headers.authorization !== `ADD ${process.env.ADD_STREAMERS_SECRET_KEY}`) {
            Unauthorized()
          } else if (isNullOrUndefined(username)) {
            BadRequest()
          } else if (isNullOrUndefined(image)) {
            BadRequest()
          } else if (isNullOrUndefined(link)) {
            BadRequest()
          }

          // Break the function
          return null
        }

        // Add function
        const Add: any = (): null => {
          // Get the query
          const { username, image, link } = req.query

          // Delete the doc, if passed the tests
          addDoc(collection(getFirestore(), 'streamers'), {
            username: username,
            image: image,
            link: link,
          })

          // Break the function
          return null
        }
        
        // Response function
        const Response: any = (): boolean => {
          // Get the query
          const { username, image, link } = req.query

          // Response
          res.status(200).send({
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

          // Break the request
          return true
        }

        // Calling functions  
        await Verify()
        await Add()
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
export default AddHandler

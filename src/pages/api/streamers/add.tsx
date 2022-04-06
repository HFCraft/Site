// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

// Api Handler
const AddHandler: any = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'POST':
        // Set the 'Allow' header
        res.setHeader('Allow', ['POST'])

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
          // Get the query
          const { username, image, link } = req.query

          // Test's
          if (req.headers.authorization !== `ADD ${process.env.ADD_STREAMERS_SECRET_KEY}`) {
            Unauthorized()
          } else if (username === undefined) {
            BadRequest()
          } else if (image === undefined) {
            BadRequest()
          } else if (link === undefined) {
            BadRequest()
          }

          return null
        }

        // Add document function
        const Add: any = async () => {
          // Get the query
          const { username, image, link } = req.query

          // Delete the doc, if passed the tests
          await addDoc(collection(getFirestore(), 'streamers'), {
            username: username,
            image: image,
            link: link,
          })

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

          return true
        }

        // Calling functions  
        await Verify()
        await Add()

      // End
      break
      default:
        // Set the 'Allow' header
        res.setHeader('Allow', ['POST'])

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
    res.setHeader('Allow', ['POST'])
    
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

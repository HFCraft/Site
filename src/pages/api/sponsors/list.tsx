// Import's
import '../../../lib/firebase'
import { NextApiRequest, NextApiResponse } from 'next'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

// Api Handler
const ListHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  ///
  try {
    switch (req.method) {
      case 'GET': {
        // Initialize the array
        const sponsorsArray: Array<any> = []

        // Query function
        const Query: any = async () => {
          // Get on Database
          const querySnapshot = await getDocs(collection(getFirestore(), 'sponsors'))

          // Query the Database
          querySnapshot.forEach((doc) => {
            sponsorsArray.push({
              id: doc.id,
              username: doc.data().username,
              image: doc.data().image,
            })
          })

          // Break the function
          return null
        }

        // Response function
        const Response: any = (): boolean => {
          // Response
          res.status(200).send({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            sponsors: sponsorsArray,
          })

          // Break the request
          return true
        }

        // Calling functions
        await Query()
        await Response()

        // Break
        break
      }
      default: {
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
    }
  } /* Catch error */ catch (err: any) {
    // Set the 'Allow' header
    res.setHeader('Allow', ['GET'])
    
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
export default ListHandler

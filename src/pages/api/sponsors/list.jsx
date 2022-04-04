import { app } from '../../../lib/firebase'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const Handler = (req, res) => {
  res.setHeader('Allow', ['GET'])
  try {
    switch (req.method) {
      case 'GET':
        // Query
        const Query = async () => {
          const querySnapshot = await getDocs(
            collection(getFirestore(), 'sponsors'),
          )

          const sponsorsArray = new Array()

          querySnapshot.forEach((doc) => {
            sponsorsArray.push({
              id: doc.id,
              username: doc.data().username,
              image: doc.data().image,
            })
          })

          res.status(200).json({
            statusCode: 200,
            statusText: 'OK',
            success: true,
            method: req.method,
            sponsors: sponsorsArray,
          })
          return true
        }

        // Calling functions
        Query()
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

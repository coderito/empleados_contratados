const MONGO_URL_DATABASE = process.env.MONGO_URI
import mongoose, { Connection } from "mongoose"

const connectMongoDB = async () => {
    try {
        const {connection} = await mongoose.connect(MONGO_URL_DATABASE)
        
        if(connection.readyState == 1){
            console.log("Database connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}

export default connectMongoDB
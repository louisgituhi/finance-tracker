import { db } from "./db"
import { userTable } from "./schema"


async function insertData() {
    try {
        await db.insert(userTable).values({
            name: "Aurelius",
            age: 99
        })
    } catch (error) {
        console.log("Unable to insert data", error)
    }
} 

insertData()
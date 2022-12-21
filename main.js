import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore"

const usersColRef = collection(db, "users")

const data = []
console.log("data", data)
async function getUsers() {
  const res = await getDocs(usersColRef)
  data.push(res.docs.map((e) => ({ ...e.data(), id: e.id })))

  console.log(data)
}
getUsers()

console.log("data", data)

document.querySelector("#app").innerHTML = `
  <div>
    hi
  </div>
`

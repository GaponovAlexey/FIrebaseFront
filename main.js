import { db } from "./firebase"
import { getDocs, collection } from "firebase/firestore"

const usersColRef = collection(db, "users")

const getUsers = async () => {
  const res = await getDocs(usersColRef)
  return res.docs.map((e) => ({ ...e.data(), id: e.id }))
}
getUsers().then((e) => {
  document.querySelector("#app").innerHTML = `
  <div>
    hi ${e[0].name}
  </div>`
})

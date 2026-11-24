import { homepage } from "./panges/home"
import { adminpage } from "./panges/admin"
const router = {

  '/': homepage,
  '/admin': adminpage,
}

function ABA() {
const path = location.hash.slice(1) || '/'
const page = router[path] || homepage
document.querySelector('#app').innerHTML=page()
}
window.addEventListener('hashchange',ABA)
ABA()
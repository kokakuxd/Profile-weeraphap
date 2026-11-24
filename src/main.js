import { homepage } from "./panges/home"
import { adminpage } from "./panges/admin"
import { contactpage } from "./panges/contact"
import { aboutpage } from "./panges/about"

const router = {

  '/': homepage,
  '/admin': adminpage,
   '/contact': contactpage,
  '/about': aboutpage,
} 


function ABA() {
const path = location.hash.slice(1) || '/'
const page = router[path] || homepage
document.querySelector('#app').innerHTML=page()
}
window.addEventListener('hashchange',ABA)
ABA()
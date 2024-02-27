import Navbar from "../components/Navbar"
import LogInForm from "../components/LogInForm"
import Footer from "../components/Footer"

const LogIn = () => {
  return (
    <>
        <Navbar activePage="log in" />
        <LogInForm />
        <Footer />
    </>
  )
}

export default LogIn
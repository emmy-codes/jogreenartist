import  Header from "./components/Header"
import Footer from "./components/Footer"

function App() {


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Header />
      </div>
      <Footer />
    </div>
  )
}

export default App

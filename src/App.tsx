import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Form from './components/layout/Form'

function App() {

  return (
    <>
      <Header/>
      <main className="main-container">
        <h1>O que você gostaria de fazer?</h1>
        <Form/>
      </main>
      <Footer/>
    </>
  )
}

export default App

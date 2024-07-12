import React ,{lazy}from 'react'
import {BrowserRouter as Router, Routes,Route, BrowserRouter} from 'react-router-dom'

const Home = lazy(()=> import('./Pages/Home'))
const Login = lazy(()=> import('./Pages/Login'))
const Chat= lazy(()=> import('./Pages/Chat'))
const Groupes= lazy(()=> import('./Pages/Groups'))



function App() {
  return (
<BrowserRouter> 
<Routes>
  <Route path = '/' element ={<Home/>}/>
  <Route path = '/login' element ={<Login/>}/>
  <Route path = '/groupes' element ={<Groupes/>}/>
  <Route path = '/chat/:chatId' element ={<Chat/>}/>
<Route/>
  
</Routes>



</BrowserRouter>
  )
}

export default App
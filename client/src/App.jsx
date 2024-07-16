
import React ,{lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './Componentss/Auth/ProtectedRoute'
const Home = lazy(()=>import("./pages/Home"))
const Login = lazy(()=> import("./pages/login"))
const Chat = lazy(()=> import("./pages/Chat"))
const Groups = lazy(()=> import("./pages/Groups"))
const NotFound = lazy(()=> import("./pages/NotFound"))
 let user= true;

function App() {


  return (
<BrowserRouter>
<Routes>
<Route element={<ProtectedRoute user={user}/> }>
<Route path='/'element={<Home/>}/>
<Route path='/chat/:chatId'element={<Chat/>}/>
<Route path='/groups'element={<Groups/>}/>
</Route>
<Route path='/login'element={
  <ProtectedRoute user={!user} redirect="/">
  <Login/>
</ProtectedRoute>}/>
<Route path='*'element={<NotFound/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App
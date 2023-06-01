import HeaderLayout from "./components/Layout/Header/HeaderLayout"
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom' 
import Home from "./pages/Home/Home"
import Playlist from "./pages/Playlist/Playlist"


const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />} >
      <Route index element={<Home />} />
      <Route path="*" element={<h1>Page not found</h1>} />
      <Route path="home" element={<Home />} />
      <Route path="playlist" element={<Playlist />} />
    </Route>
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

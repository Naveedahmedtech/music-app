import HeaderLayout from "./components/Layout/Header/HeaderLayout"
import { RouterProvider, createBrowserRouter, createRoutesFromElements , Route } from 'react-router-dom' 

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />} />
  ))
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

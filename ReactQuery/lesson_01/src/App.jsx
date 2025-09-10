import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Traditional from './pages/Traditional';
import ReactQuery from './pages/ReactQuery';
import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/traditional",
        element: <Traditional />,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      }
    ]
  }
]);
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} >


        </RouterProvider>
      </QueryClientProvider>

    </>
  )
}

export default App

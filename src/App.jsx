import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Root } from "./Components/routes/Root"
import { MainPage } from "./Components/MainPage/MainPage"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchNavigation } from "./features/navigationSlice"



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route index element={<MainPage/>}></Route>
            <Route path='women' element={<MainPage gender='women'/>}></Route>
            <Route path='men' element={<MainPage gender='men'/>}></Route>
            <Route path = 'men' element = {<MainPage gender='kids'/>} > </Route>

            <Route path='women/:category' element={<MainPage gender='women'/>}></Route>
            <Route path='men/:category' element={<MainPage gender='men'/>}></Route>
            {/* <Route path='*' element={<ErrorPage />}></Route> */}
        </Route>
    )
)

export const App = () => {

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch( fetchNavigation() )
    }, [dispatch] )


    return (
    <RouterProvider RouterProvider router = {router} > </RouterProvider>
    )
}


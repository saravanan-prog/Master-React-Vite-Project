import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import HeaderLayout from "./components/HeaderLayout"

import HomePage from "./pages/home/Home.page"
import AboutPage from './pages/about/About.page'
import ContactPage from './pages/contact/Contact.page'
import GalleryPage from './pages/gallery/Gallery.page'
import BlogPage from './pages/Blog/Blog.page'
import PageNotFound from "./pages/page.notfound"
import Dashboard from "./features/Dashboard/Dashboard.page"


export default function Router(){

    return (
        <Container>
            <BrowserRouter>
                <HeaderLayout />
                <Routes>
                    <Route index element = { <Dashboard /> } />
                    <Route path="home" element= { <HomePage /> } />
                    <Route path="about" element= { <AboutPage /> } />
                    <Route path="contact" element= { <ContactPage /> } />
                    <Route path="gallery" element= { <GalleryPage /> } />
                    <Route path="blog" element= { <BlogPage /> } />
                     <Route path="gallery" element= { <GalleryPage /> } />
                    <Route path="*" element= { <PageNotFound /> } />
                </Routes>
            </BrowserRouter>
        </Container>
    )
}
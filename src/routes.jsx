import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import HeaderLayout from "./layout/HeaderLayout"

import HomePage from "./pages/Home.page"
import AboutPage from './pages/About.page'
import ContactPage from './pages/Contact.page'
import GalleryPage from './pages/Gallery.page'
import BlogPage from './pages/Blog.page'
import PageNotFound from "./pages/page.notfound"
import ButtonLayout from "./layout/ButtonLayout"


export default function Router(){


    return (
        <Container>
            <BrowserRouter>
                <HeaderLayout />
                <Routes>
                    <Route index element = { <HomePage /> } />
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
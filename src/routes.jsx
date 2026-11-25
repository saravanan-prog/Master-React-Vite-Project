import { Container } from "react-bootstrap"
import { BrowserRouter,Routes,Route } from "react-router-dom"

import { lazy,Suspense } from "react"

const HeaderLayout  = lazy(()=>import("./layout/HeaderLayout"))
const HomePage      = lazy(()=>import("./pages/Home.page"))
const AboutPage     = lazy(()=>import('./pages/About.page'))
const ContactPage   = lazy(()=>import('./pages/Contact.page'))
const GalleryPage   = lazy(()=>import('./pages/Gallery.page'))
const BlogPage      = lazy(()=>import('./pages/Blog.page'))
const PageNotFound  = lazy(()=>import("./pages/page.notfound"))



export default function Router(){

    return (
        <Container>
           
                <BrowserRouter>
                    <Suspense fallback = {<h1>Loading....</h1>}>
                        <HeaderLayout />
                        <Routes>
                            <Route path="/" element = { <HomePage /> } />
                            <Route path="home" element= { <HomePage /> } />
                            <Route path="about" element= { <AboutPage /> } />
                            <Route path="contact" element= { <ContactPage /> } />
                            <Route path="gallery" element= { <GalleryPage /> } />
                            <Route path="blog" element= { <BlogPage /> } />
                            <Route path="*" element= { <PageNotFound /> } />
                        </Routes>
                     </Suspense>
                </BrowserRouter>
        </Container>
    )
}

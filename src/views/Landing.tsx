import { Menu, Banner, Features, Solutions, About, Testimonials, Contact, Footer } from '@/components/Landing'

export const Landing = () => {
  return (

    <div className='flex min-h-screen flex-col bg-black text-white'>
      <Menu />
      <main className="flex-1">
        <Banner />
        <Features />
        <Solutions />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import Swal from 'sweetalert2'
import { ContactData } from '../Data/ContactData'
import ContactCard from './ContactCard'

export default function ContactSection() {

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const form = e.target

        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xgvylzgn', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent !',
                    text: 'Thank you for contacting us. We will get back to you soon',
                    confirmButtonColor: '#1B5998'
                })
                form.reset()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong !',
                    text: 'Failed to send message. Please try again later',
                    confirmButtonColor: '#F15D8E'
                })
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Connection Error',
                text: 'Please check your internet connection and try again',
                confirmButtonColor: '#F15D8E'
            })
        }
    }
    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg flex justify-between items-start flex-wrap gap-y-6 overflow-hidden'>
            <div className='w-48 max-768:w-full flex flex-col gap-6 max-w-[700px]'>
                {ContactData.map((e, index) => {
                    return (
                        <ContactCard
                            key={index}
                            link={e.link}
                            href={e.href}
                            desc={e.desc}
                            delay={(index * 100) + 250}
                        />
                    )
                })}
            </div>
            <form onSubmit={handleSubmit} data-aos="fade-left" className='w-48 max-768:w-full flex flex-col items-center gap-4 max-w-[700px] rounded-lg bg-white p-5'>
                <input required className='w-full px-4 py-3 bg-mybg border rounded-lg' type="text" name="name" placeholder='Your Name' />
                <input required className='w-full px-4 py-3 bg-mybg border rounded-lg' type="email" name="email" placeholder='Your Email' />
                <input required className='w-full px-4 py-3 bg-mybg border rounded-lg' type="tel" name="number" placeholder='Your Number' />
                <textarea required name="message" className='w-full px-4 py-3 bg-mybg border rounded-lg h-56' placeholder='Your Message here...'></textarea>
                <input required className='w-max px-6 py-3 bg-myPrimary text-white border rounded-lg' type="submit" value="Send" />
            </form>
        </section>
    )
}

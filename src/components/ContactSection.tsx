import Swal from 'sweetalert2'
import { ContactData } from '../Data/ContactData'
import ContactCard from './ContactCard'
import { useRef } from "react"
import emailjs from "emailjs-com"

export default function ContactSection() {

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        emailjs
            .sendForm(
                "service_phsf3ev",
                "template_5w2t05m",
                formRef.current,
                "NQTkFr7FKdsyZCIVy" 
            )
            .then(
                () => {
                    Swal.fire({
                        icon: "success",
                        title: "Message Sent!",
                        text: "Thank you for contacting us. We'll get back to you soon.",
                        confirmButtonColor: "#1B5998",
                    })
                    formRef.current?.reset()
                },
                () => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Failed to send message. Please try again later.",
                        confirmButtonColor: "#F15D8E",
                    })
                }
            )
    }

    // const handleSubmit = async (e: any) => {
    //     e.preventDefault()

    //     const form = e.target

    //     const formData = new FormData(form)

    //     try {
    //         const response = await fetch('https://formspree.io/f/xnnvbora', {
    //             method: 'POST',
    //             body: formData,
    //             headers: {
    //                 'Accept': 'application/json'
    //             }
    //         })

    //         if (response.ok) {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Message Sent !',
    //                 text: 'Thank you for contacting us. We will get back to you soon',
    //                 confirmButtonColor: '#1B5998'
    //             })
    //             form.reset()
    //         } else {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Something went wrong !',
    //                 text: 'Failed to send message. Please try again later',
    //                 confirmButtonColor: '#F15D8E'
    //             })
    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Connection Error',
    //             text: 'Please check your internet connection and try again',
    //             confirmButtonColor: '#F15D8E'
    //         })
    //     }
    // }

    return (
        <section className='4xl:px-[10%] py-16 max-768:py-10 max-992:px-10 max-768:px-5 px-20 bg-mybg flex justify-between items-start flex-wrap gap-y-6 overflow-hidden dark:bg-slate-800 transition-all duration-700 ease-in-out'>
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
            <form ref={formRef} onSubmit={handleSubmit} data-aos="fade-left" className='w-48 max-768:w-full flex flex-col items-center gap-4 max-w-[700px] rounded-lg bg-white p-5 dark:border dark:border-mybg dark:bg-slate-800 transition-all duration-700 ease-in-out'>
                <input required className='w-full dark:text-mybg px-4 py-3 bg-mybg border rounded-lg dark:bg-zinc-600 dark:border-none transition-all duration-700 ease-in-out' type="text" name="name" placeholder='Your Name' />
                <input required className='w-full dark:text-mybg px-4 py-3 bg-mybg border rounded-lg dark:bg-zinc-600 dark:border-none transition-all duration-700 ease-in-out' type="email" name="email" placeholder='Your Email' />
                <input required className='w-full dark:text-mybg px-4 py-3 bg-mybg border rounded-lg dark:bg-zinc-600 dark:border-none transition-all duration-700 ease-in-out' type="tel" name="number" placeholder='Your Number' />
                <textarea required name="message" className='w-full dark:text-mybg px-4 py-3 bg-mybg border rounded-lg h-56 dark:bg-zinc-600 dark:border-none transition-all duration-700 ease-in-out ' placeholder='Your Message here...'></textarea>
                <input required className='w-max px-6 py-3 bg-myPrimary text-white dark:bg-zinc-600 dark:text-mybg font-semibold rounded-lg transition-all duration-700 ease-in-out' type="submit" value="Send" />
            </form>
        </section>
    )
}

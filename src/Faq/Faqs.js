import React from 'react'
import FaqQuestion from './FaqQuestion'

const Faqs = () => {
    const faqs_list = [
        {
            question: "How to get started",
            answer: "Create an account using the 'Get Start' button. Once logged in, create a school and follow the on-screen instructions to set up your school profile, add students, teachers, and courses, and customize your school's settings."
        },
        {
            question: "What are the benefits of using Tiidel?",
            answer: "Some benefits of using Tiidel include streamlined administrative processes, improved communication between stakeholders, accurate and accessible student records, efficient timetable and resource management, automated grading and reporting, and enhanced data security."
        },
        {
            question: "How can Tiidel help with student enrollment?",
            answer: " Tiidel can simplify the student enrollment process by providing online registration forms, document uploads, and automated data entry. It can also track the progress of enrollment applications, manage waiting lists, and generate enrollment reports."
        },
        {
            question: "How does Tiidel assist with grade management?",
            answer: "Tiidel enables teachers to enter grades electronically, calculate averages, and generate report cards. It also allows students and parents to access grades online, enabling them to monitor progress and identify areas for improvement"
        },
    ]
  return (
    <section className='advertise_n faq'>
        <h2 className='section_title '>Frequently asked questions</h2>
        <h3 className='hero_sub_title'>Here are some questions Frequently asked by our clients. If you have any worries feel free to contact us</h3>
        <div className='faq_wrapper'>
            {
                faqs_list.map((faq, index) => (
                    <FaqQuestion key={index} faq={faq} />

                ))
            }
        </div>
    </section>
  )
}

export default Faqs
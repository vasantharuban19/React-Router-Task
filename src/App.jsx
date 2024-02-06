import React from 'react'
import Navbar from './components/Navbar'
import Fullstackdevelopment from './components/Fullstackdevelopment'
import Datascience from './components/Datascience'
import Cybersecurity from './components/Cybersecurity'
import Career from './components/Career'
import Cards from './components/Card'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
function App() {
  let fsd = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp",
      title:"Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      discription:"As a full-stack developer, have you ever got bored of using the same HTML, CSS,",
      date:"22 January 2024",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
      title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
      discription:"When you’re hiring a full-stack developer, what are the most important things you look for?",
      date:"15 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
      title:"Top Differences: Full Stack Developer vs Software Engineer 2024",
      discription:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
      date:"5 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp",
      title:"Horizontal vs Vertical Scaling for Efficient System Design",
      discription:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
      date:"10 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
      title:"Best Books to Learn Full-Stack Development",
      discription:"Are you interested in becoming a full-stack developer but not sure where to start? In",
      date:"9 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp",
      title:"Top 10 Product-Based Companies for Full-Stack Developers [2024]",
      discription:"In the dynamic landscape of technology, full-stack developers are the architects of the digital world,",
      date:"8 November 2023",
      comments:"No Comments"
    },
  ]
  let ds = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      discription:"Are you someone who’s not interested in coding, but wants to get placed in tech",
      date:"28 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      title:"Impact of Certification Programs on Hiring Data Scientists",
      discription:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date:"15 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      title:"Top Product-Based Companies for Data Science Freshers",
      discription:"In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date:"10 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      title:"What is the Difference between Data Science and Data Engineering?",
      discription:"India has been making some serious waves in the world of data. Just like the",
      date:"8 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-2048x1072.png",
      title:"Top 10 Data Science Tools in 2024",
      discription:"Data Science is an in-demand profession and will continue growing in the coming years. From",
      date:"1 November 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      title:"Best Data Science Books to Learn in 2024",
      discription:"Today, we’re going to talk about something really cool: data science. It’s all about using",
      date:"26 October 2023",
      comments:"No Comments"
    },
  ]
  let cs = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      discription:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date:"4 December 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title:"What Is Hacking? Types of Hacking & More",
      discription:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date:"25 September 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner.png",
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      discription:"Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date:"27 December 2022",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      discription:"Look around today, you will witness that we are more reliant on technology and devices",
      date:"20 December 2022",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1.png",
      title:"8 Different Types of Cybersecurity and Threats Involved",
      discription:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      date:"9 November 2022",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      title:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      discription:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      date:"22 June 2022",
      comments:"No Comments"
    },
  ]
  let cr = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image.jpg",
      title:"Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      discription:"Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      date:"2 February 2024",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      discription:"If your New Year resolution consists of building a successful tech career in 2024, then",
      date:"19 January 2024",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      title:"UI/UX Designer Job Description and Roles & Responsibilities",
      discription:"UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date:"13 December 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      title:"Top 5 IT Jobs for Economics Students",
      discription:"In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date:"4 December 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title:"Top IT Jobs for Commerce Students: A Lucrative Career Path",
      discription:"With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date:"2 December 2023",
      comments:"No Comments"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      title:"Automation Test Engineer Resume: 10 Important Things To Consider",
      discription:"The world is moving towards automating the testing of products in order to increase work",
      date:"1 December 2023",
      comments:"No Comments"
    },
  ]
  let course = [...fsd,...ds,...cs,...cr]
  return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/card' element={<Cards all={course}/>}/>
      <Route path='/fsd' element={<Fullstackdevelopment full={fsd}/>}/>
      <Route path='/datascience' element={<Datascience science={ds}/>}/>
      <Route path='/cybersecurity' element={<Cybersecurity cyber={cs}/>}/>
      <Route path='/career' element={<Career carr={cr}/>}/>
      <Route path='*' element={<Navigate to='/card'/>}/>
    </Routes>
    </BrowserRouter>
    </>
}

export default App
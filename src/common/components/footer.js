import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-[#248de4] text-white-10  py-10">
        
    <div class="container mx-auto px-4">
    <Link to={"/"} className="mr-6 flex items-center" prefetch={false}>
          <img loading="lazy" src={"https://teclearns.com/images/logo.png"} alt="logo" />
        </Link>
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-16 mt-10">
        <div class="flex flex-col space-y-4">
          <h4 class="text-xl font-bold">Trending Certification Courses</h4>
          <ul class="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
            <li>Microsoft Project</li>
            <li>Microsoft Excel</li>
            <li>PRINCE2 Foundation</li>
            <li>PRINCE2 Practitioner</li>
            <li>PMI RMP</li>
            <li>PMP Certification</li>
            <li>CBAP</li>
            <li>PMI-ACP</li>
          </ul>
        </div>
  
        <div class="flex flex-col space-y-4">
          <h4 class="text-xl font-bold">Trending Master Courses</h4>
          <ul class="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
            <li>Leading SAFe 5.1</li>
            <li>Agile Scrum Master</li>
            <li>Six Sigma Yellow</li>
            <li>Six Sigma Green</li>
            <li>Six Sigma Black</li>
            <li>Business Case Writing</li>
          </ul>
        </div>
  
        <div class="flex flex-col space-y-4">
          <h4 class="text-xl font-bold">Company</h4>
          <ul class="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
            <li>About us</li>
            <li>Reviews</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>
  
        <div class="flex flex-col space-y-4">
          <h4 class="text-xl font-bold">Categories</h4>
          <ul class="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
            <li>PMI PBA</li>
            <li>Financial Modeling</li>
            <li>ITIL 4 Foundation</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
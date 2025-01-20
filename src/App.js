import React from "react";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#141414] px-4">
      <div className="space-y-6 w-full max-w-4xl">
        {/* Name */}
        <div className="px-8 py-6 bg-[#2B2B2B] text-white text-center text-3xl max-md:text-2xl font-black rounded-md">
          Vaibhav Pandey
        </div>

        {/* Row with three columns */}
        <div className="flex flex-wrap gap-6 justify-between">
          <div className="flex-1 min-w-[30%] px-8 py-6 bg-[#2B2B2B] text-white text-center text-2xl max-md:text-lg font-extrabold rounded-md">
            Cybersecurity
          </div>
          <div className="flex-1 min-w-[30%] px-8 py-6 bg-[#2B2B2B] text-white text-center text-2xl max-md:text-lg font-extrabold rounded-md">
            Semester 5
          </div>
          <div className="flex-1 min-w-[30%] px-8 py-6 bg-[#2B2B2B] text-white text-center text-2xl max-md:text-lg font-extrabold rounded-md">
          27631722005
          </div>
        </div>

        {/* Current Ongoing Project */}
        <div onClick={()=>{window.location.href="https://github.com/Vaibhavlove1/resume"}} className="px-8 py-6 max-md:text-lg cursor-pointer bg-[#2B2B2B] border-2 border-[#70fdff] text-[#70fdff] text-center text-2xl font-extrabold rounded-md">
          Current Ongoing Project <i class="fa-solid fa-link"></i>
        </div>

        {/* Operating System Links */}
        <div className="flex flex-wrap gap-6 justify-between">
          <div onClick={()=>{window.location.href="https://www.youtube.com/watch?v=xw_OuOhjauw&pp=ygUQb3BlcmF0aW5nIHN5c3RlbQ%3D%3D"}} className="flex-1 max-md:text-lg border-2 border-[#70fdff] cursor-pointer min-w-[45%] px-8 py-6 bg-[#2B2B2B] text-[#70fdff] text-center text-2xl font-extrabold rounded-md">
            Operating System Link 1 <i class="fa-solid fa-link"></i>
          </div>
          <div onClick={()=>{window.location.href="https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"}} className="flex-1 max-md:text-lg border-2 border-[#70fdff] cursor-pointer min-w-[45%] px-8 py-6 bg-[#2B2B2B] text-[#70fdff] text-center text-2xl font-extrabold rounded-md">
            Operating System Link 2 <i class="fa-solid fa-link"></i>
          </div>
        </div>

        {/* Charts */}
        <div className="px-8 py-6 bg-[#2B2B2B] text-white text-center text-2xl font-extrabold rounded-md">
          <div className="pb-8 max-md:text-lg">Skill Charts</div>

          <div className="flex gap-6 py-4">
            <div className="max-md:text-lg">HTML</div>
            <div className="w-1/2 h-6 bg-white rounded-md overflow-hidden">
              <div
                className="h-full bg-[#63FF52]"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          <div className="flex gap-6 py-4">
            <div className="max-md:text-lg">CSS</div>
            <div className="w-1/2 h-6 bg-white rounded-md overflow-hidden">
              <div
                className="h-full bg-[#63FF52]"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="flex gap-6 py-4">
            <div className="max-md:text-lg">JAVASCRIPT</div>
            <div className="w-1/2 h-6 bg-white rounded-md overflow-hidden">
              <div
                className="h-full bg-[#63FF52]"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>

          <div className="flex gap-6 py-4">
            <div className="max-md:text-lg">REACT</div>
            <div className="w-1/2 h-6 bg-white rounded-md overflow-hidden">
              <div
                className="h-full bg-[#63FF52]"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

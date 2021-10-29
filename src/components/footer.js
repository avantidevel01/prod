import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-sm p-3 font-semibold text-gray-800 bottom-0 text-center w-full">
      <p>
        24007 Ventura Blvd. Suite 120, Calabasas, CA 91302
        <span className="whitespace-nowrap"> | </span>
        <span className="whitespace-nowrap">Phone: (747) 444-9179</span>
      </p>
      <p>All Rights Reserved 3 West Medical, © {new Date().getFullYear()}</p>
    </footer>
  )
}
export default Footer

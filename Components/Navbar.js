import React from 'react'
export default function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4>Niskala</h4>
        </div>
        <div>
          <a>Home</a>
          <a>Team</a>
          <a>Project</a>
          <a>About</a>
        </div>
      </div>
    </div>
  )
}
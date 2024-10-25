import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Represents the Home component of the Workout App.
 * It displays a welcome message and a navigation menu.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Workout App</h1>
      <NavigationMenu />
    </div>
  )
}

/**
 * Represents a navigation menu component.
 * The NavigationMenu component displays a list of menu items within a navigation bar.
 *
 * @returns {JSX.Element} The rendered navigation menu component.
 */
const NavigationMenu = () => (
  <nav className="flex justify-center">
    <ul className="space-y-4 text-lg font-semibold">
      {menuItems.map(({ path, label }) => (
        <li className="flex justify-center" key={label}>
          <Link
            className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg"
            to={path}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

/**
 * Represents a list of menu items with their paths and labels.
 *
 * @type {Array<object>}
 */
const menuItems = [
  { path: '/exercise', label: 'Generate Exercises' },
  { path: '/workout', label: 'Create Workout' },
  { path: '/workout-split', label: 'Create Workout Split' }
]

export default Home

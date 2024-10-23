import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Represents a component that renders navigation links.
 * @returns {JSX.Element} - The generated JSX element.
 */
const NavLinks = () => (
  <div className="px-18">
    <NavLink className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg" to="/">Home</NavLink>
    <NavLink className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg" to="/exercise">Generate exercises</NavLink>
    <NavLink className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg" to="/workout">Create workouts</NavLink>
    <NavLink className="px-5 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-lg" to="/workout-split">Create Workout Splits</NavLink>
  </div>
);

/**
 * The Nav component represents a navigation bar that can be toggled between open and closed states.
 * It renders a responsive navigation menu with navigation links.
 *
 * @returns {React.Component} The rendered navigation bar.
 */
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the state of the navigation bar.
   *
   * @function toggleNavBar
   * @returns {void}
   */
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="">
        <div className="hidden w-full md:flex justify-end">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button type="button" onClick={toggleNavBar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center ">
          <NavLinks />
        </div>
      )}
    </>
  );
}

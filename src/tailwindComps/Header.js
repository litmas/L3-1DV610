import Nav from './Nav'

/**
 * Returns the header component.
 *
 * @returns {React.ReactElement} The header component.
 */
export default function Header () {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-lg shadow-md p-4">
    <Nav />
  </header>

  )
}

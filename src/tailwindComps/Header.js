import Nav from './Nav';

/**
 * Returns the header component.
 *
 * @returns {React.ReactElement} The header component.
 */
export default function Header() {
  return (
    <header className="sticky top-0 backdrop-blur bg-white/50 mx-auto flex flex-wrap items-center justify-between border-b bg-background p-[2em] font-sans font-bold uppercase text-text-primary dark:border-gray-800 dark:bg-d-background bg-color-white">
      <Nav />
    </header>
  );
}

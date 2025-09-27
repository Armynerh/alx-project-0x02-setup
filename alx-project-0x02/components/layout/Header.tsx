import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application Header</h1>
      <nav>
      <Link href="/home">Home</Link>| <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
export default Header;
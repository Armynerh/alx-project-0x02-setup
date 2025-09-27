import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application Header</h1>
      <nav>
      <Link href="/home" className="bg-blue-600 text-white">Home</Link>| <Link href="/about" className="bg-blue-600 text-white">About</Link> | <Link href="/posts" className="bg-blue-600 text-white">Posts</Link>
      </nav>
    </header>
  );
}
export default Header;
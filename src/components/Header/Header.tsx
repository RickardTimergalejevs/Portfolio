import Link from "next/link";
import "./header.scss";

type Props = {
  className: string;
};

const Header = ({ className }: Props) => {
  return (
    <header className={className}>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/projects">-Projects-</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

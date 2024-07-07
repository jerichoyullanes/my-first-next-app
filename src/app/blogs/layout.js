import Link from "next/link";
import './style.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <ul className="layout-menu">
            <li><Link href="/blogs">Blog Page</Link></li>
            <li><Link href="/blogs/Article">Articles</Link></li>
            <li><Link href="/blogs/NewsBlog">News Blog</Link></li>
            <li><Link href="/blogs/SportsBlog">Sports Blog</Link></li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}

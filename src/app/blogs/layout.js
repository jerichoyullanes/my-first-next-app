'use client'
import Link from "next/link";
import './style.css';
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const usePath = usePathname();
  return (
    <html lang="en">
      <body>
        <div>
            {
              usePath !== '/blogs/SportsBlog' ?
                <ul className="layout-menu">
                  <li><Link href="/blogs">Blog Page</Link></li>
                  <li><Link href="/blogs/Article">Articles</Link></li>
                  <li><Link href="/blogs/NewsBlog">News Blog</Link></li>
                  <li><Link href="/blogs/SportsBlog">Sports Blog</Link></li>
                </ul>
              : null
            }

        </div>
        {children}
      </body>
    </html>
  );
}

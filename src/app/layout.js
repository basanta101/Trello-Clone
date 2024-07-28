import "./globals.css";
import styles from './layout.module.scss'
import Navbar from "@/components/Navbar/Navbar"

export default function RootLayout({ children }) {
  console.log('RootLayout', children);
  return (
    <html lang="en">
      <body className={styles.wrap}><Navbar /><div className={styles.children}>{children}</div></body>
    </html>
  );
}

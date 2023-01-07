import styles from "/app/src/styles/navigation.module.css";
import type React from "react";

type Item = {
  text: string;
  href: string;
};

function linkItem(item: Item) {
  return (
    <li className={styles.li}>
      <a href={item.href} className={styles.link}>
        {item.text}
      </a>
    </li>
  );
}

export const Navigation: React.FC = () => {
  const items: Item[] = [
    { text: "TOP", href: "/" },
    { text: "ABOUT", href: "/about" },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul} role="list">
        {items.map(linkItem)}
      </ul>
    </nav>
  );
};

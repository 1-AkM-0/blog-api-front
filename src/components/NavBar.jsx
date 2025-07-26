import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className={styles.blogName}>P Y</div>
          <ul>
            <li>Blog</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

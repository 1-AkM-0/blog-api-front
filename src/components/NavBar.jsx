import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav>
        <div className={styles.navLeft}>
          <div className={styles.blogName}>PedroBlog</div>
        </div>
        {/* <div className={styles.navMiddle}>
          <li>Home</li>
          <li>About</li>
        </div> */}
        <div className={styles.navRight}>
          <a href="/admin">
            <button>Manage my blogs</button>
          </a>
          <a href="/login">
            <button>Login</button>
          </a>
          <a href="/signup">
            <button>Sign up</button>
          </a>
        </div>
      </nav>
    </div>
  );
}

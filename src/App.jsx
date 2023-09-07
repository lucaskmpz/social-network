import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consectetur inventore veritatis excepturi illo? Dolorem nesciunt odit porro! Debitis dolorem, fuga ullam laboriosam minima voluptatibus commodi repellendus nobis impedit aliquam."
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consectetur inventore veritatis excepturi illo? Dolorem nesciunt odit porro! Debitis dolorem, fuga ullam laboriosam minima voluptatibus commodi repellendus nobis impedit aliquam."
          />
        </main>
      </div>
    </div>
  );
}

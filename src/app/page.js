import Navigation  from "@/components/navigation/page"
import Hero from "@/components/hero/page"
import styles from "@/app/page.module.css"
const Home = () => {
  return (
    <main className={styles.main}>
      <Navigation/>
      <Hero/>
      <h2 className={styles.heading2}> Great Meeting You</h2>

    </main>
  )
}

export default Home;
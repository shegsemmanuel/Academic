import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Tabs from './components/Courses/Courses'
import Mentor from "./components/Mentor/Mentor";
import Newsletter from "./components/Newsletter.tsx/Newsletter";
import Students from "./components/Students/Students";


export default function Home() {
  return (
   <main>
      <Banner />
      <Companies />
      <Tabs/>
      <Mentor/>
      <Students/>
      <Newsletter/>
   </main>
  );
}


import { Helmet } from "react-helmet-async";
import Profile from "./Profile.jsx"
export default function Home(){
    return(
        <section id="home" className=" pt-24 w-full text-2xl flex flex-col">
          <Helmet>
            <title>Chakresh - Founder of KLED and Developer of GoSynk</title>
            <meta name="description" content="Chakresh, the founder of KLED and developer of GoSynk. A passionate software developer with a drive for innovation." />
          </Helmet>
          <Profile/>
        </section>
    )
}
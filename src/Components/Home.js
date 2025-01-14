import React from "react";
import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import RowPost from "./RowPost/RowPost";
import { originals ,action,comedy,horror,romanc,documentaries,adventure, drama, family, thriller, animation, crime, fantasy, history, mystery, sciencefiction, war, western} from "./urls";

function Home(props){

    const array = [
        "hello", "hi", "afnan"
    ]
    return(
        <div className="homeparentDiv" style={{backgroundColor:"#111"}}>
            <NavBar/>
            <Banner/>
            {array.map((item, index) =>
                (
                    <p>{item}</p>
                )
            )}
            <RowPost url={originals} title='Netflix Originals'/>
                  <RowPost url={action} title='Action' isSmall/>
                  <RowPost url={comedy} title='Comedy' isSmall/>
                  <RowPost url={drama} title='Drama' isSmall/>
                  <RowPost url={horror} title='Horror' isSmall/>
                  <RowPost url={romanc} title='Romanc' isSmall/>
                  <RowPost url={family} title='Family' isSmall />
                  <RowPost url={thriller} title='Thriller' isSmall/>
                  <RowPost url={crime} title='Crime' isSmall/>
                  <RowPost url={adventure} title='Adventure' isSmall/>
                  <RowPost url={animation} title='Animation' isSmall/>
                  <RowPost url={documentaries} title='Documentaries' isSmall/>
                  <RowPost url={fantasy} title='Fantasy' isSmall/>
                  <RowPost url={history} title='History' isSmall/>
                  <RowPost url={mystery} title='Mystery' isSmall/>
                  <RowPost url={sciencefiction} title='Science Fiction' isSmall/>
                  <RowPost url={war} title='War' isSmall/>
                  <RowPost url={western} title='Western' isSmall/>
        </div>
    )
}
export default Home;
import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {

  const [profiles] = useState([
    {
      name: "Channendler Bing :)",
      img_src: "https://i.pinimg.com/originals/6a/6e/6d/6a6e6de6e91b28c132d593ea726e4edb.jpg"
    },
    {
        name: "Rachel Green",
        img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
    },
    {
      name: "Rachel Green",
      img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
  },
  {
    name: "Rachel Green",
    img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
{
  name: "Rachel Green",
  img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
{
  name: "Rachel Green",
  img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
{
  name: "Rachel Green",
  img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
{
  name: "Rachel Green",
  img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
{
  name: "Rachel Green",
  img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2014%2F12%2Ffriends-countdown-is-rachel-green-jewish.html&psig=AOvVaw0Y2n4RuPLG1oOfTWIsmFvg&ust=1637435875219000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjB8ZKSpfQCFQAAAAAdAAAAABAD"
},
    {
        name: "Monica Geller",
        img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMonica_Geller&psig=AOvVaw3b68gLIPnog2nI2pbQbjjK&ust=1637435908804000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjymKWSpfQCFQAAAAAdAAAAABAa"
    },
    { 
        name: "Phoebe Buffay",
        img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popsugar.com%2Fentertainment%2FPhoebe-Buffay-Quotes-From-Friends-43785815&psig=AOvVaw3d91jLjjHq1G4vySqhoEjz&ust=1637435988436000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC0wceSpfQCFQAAAAAdAAAAABAJ"
    },
    {
        name: "Joey Tribbiani",
        img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffriends.fandom.com%2Fwiki%2FJoey_Tribbiani&psig=AOvVaw0XnfkqA5i7W9xdE_ie7qmN&ust=1637436027537000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiF9duSpfQCFQAAAAAdAAAAABAD"
    },
    {
        name:"Ross Geller",
        img_src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonsoffriends.tumblr.com%2Fpost%2F182227730092%2Fembed&psig=AOvVaw1Twt4SOQ1gDZKWjkG34HI6&ust=1637436051366000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNC4s-eSpfQCFQAAAAAdAAAAABAc"
        
    }

  ])

  const profilesFooter = [200, 300, 400]

  return <div className="App">
      {profiles.map(profiles => (
        <Profile profiles={profiles} />
      ))}
    </div>

}

export default App;

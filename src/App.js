import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {

  const [profiles] = useState([
    {
      name: "Channendler Bing :)",
      img_src: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F6a%2F6e%2F6d%2F6a6e6de6e91b28c132d593ea726e4edb.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F758434393479410960%2F&tbnid=BdtxFwxyLHdVyM&vet=10CAsQxiAoAWoXChMI4NC5zMmk9AIVAAAAAB0AAAAAEGY..i&docid=OqJ_4ldtrOK_zM&w=423&h=750&itg=1&q=friends%20carachters%20chandler&ved=0CAsQxiAoAWoXChMI4NC5zMmk9AIVAAAAAB0AAAAAEGY"
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

  return <div className="App">
      {profiles.map(profiles => (
        <Profile />
      ))}
    </div>
  
}

export default App;

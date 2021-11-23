import React, { useState } from "react";
import Profile from "./components/Profile";

function App() {

  const [profiles] = useState([

    {
      name: "Phoebe Buffay",
      img_src: "https://i.pinimg.com/originals/12/a5/38/12a538c8b4778d8574838d8480367c9e.jpg"
  },
  {
      name: "Monica Geller",
      img_src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Courteney_Cox_as_Monica_Geller.jpg"
  },
  {
      name: "Phoebe Buffay",
      img_src: "https://i.pinimg.com/originals/54/fb/56/54fb56cd967a95e587973da2833cf540.jpg"
  },
    {
      name: "Chandler Bing",
      img_src: "https://i.pinimg.com/originals/b5/51/a6/b551a678cf459272a4d39d917d9f3e63.png"
    },
    {
        name: "Rachel Green",
        img_src: "https://www.cheatsheet.com/wp-content/uploads/2020/07/jennifer-aniston-friends-1994-1024x797.jpg"
    },
    {
      name: "Chandler Bing",
      img_src: "https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png"
    },
    {
      name: "Ross Geller",
      img_src: "https://i.pinimg.com/originals/a7/1e/c4/a71ec44bef244c67612351c305dcd466.jpg"
    },
    {
      name: "Joey Tribbiani",
      img_src: "https://upload.wikimedia.org/wikipedia/en/d/da/Matt_LeBlanc_as_Joey_Tribbiani.jpg"
  },
    {
      name: "Monica Geller",
      img_src: "https://assets.mycast.io/characters/monica-geller-bing-29216-normal.jpg?1578007930"
    },
    {
      name: "Chandler Bing",
      img_src: "https://upload.wikimedia.org/wikipedia/en/6/66/Matthew_Perry_as_Chandler_Bing.png"
    },
    {
      name: "Pheobe Buffay",
      img_src: "https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
    },
    {
        name: "Joey Tribbiani",
        img_src: "https://i.pinimg.com/originals/cb/3b/1e/cb3b1eb00208fed6de805ffe05d0fcaf.jpg"
    },

  


  ])

  const profilesFooter = [200, 300, 400]

  return <div className="App">
      {profiles.map(profiles => (
        <Profile profiles={profiles} />
      ))}
    </div>

}

export default App;

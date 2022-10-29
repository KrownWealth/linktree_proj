

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button'


function App() {
  const colors={
    youtube:"red",
    twitter:"blue",
    github:"green",
  }


  const data ={
    name: "Adeola Abdulramon",
    image:"https://github.com/KrownWealth.png",
    bio: "I am a Web Developer",
    links:[
      {
        name:"My open source github",
        url:"https://github.com/KrownWealth/",
        icon:"github",
      },
      {
        name:"Follow me on Twitter",
        url:"https://twitter.com/AdeolaAbdulram",
        icon:"youtube",
      },
      {
        name:"Subsribe to my channey on Youtube",
        url:"https://twitter.com/AdeolaAbdulram",
        icon:"twitter",
      },
    ]
  }
  // This will return all the function created above
  return (
    // styling the image,bio section
    <div className="p-m-6"> 
      <div className="p-d-flex p-jc-center p-ai-center">
      <Avatar
      image={data.image} size="xlarge" shape="circle">  
     
      </Avatar>
      </div>

      <div className="p-d-flex p-jc-center p-ai-center">
      <h1 className="p-m-2">{data.name}</h1>
      </div>

      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
        </div>

        <div className="p-d-flex p-jc-center p-ai-center">
          <div className="p-d-flex p-flex-column">
            {data.links.map((link) => (
          <Button className="p-m-2 p-button-outlined" style={{color:colors[link.icon]}}>
           <i className={ `pi pi-${link.icon} p-px-3`}></i> 
            
          {link.name}
          </Button>))}
        </div>
       
        </div>
        
    </div>
  );
}

export default App;

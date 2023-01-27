import "./App.css";
import Profile from "./profile/Profile" ;
import ProfilePic from "./profile/ProfilePic";


const handlclick= (name)=>{
  return alert("Hello from the profile usr"+name);
}

function App() {
  const fullName=" Jawher Rjab"
  const Bio=" Hello from jawher's bio sorry for the delay"
  const Profession= " full stack developer and data scientist kan 7ab rabi"

  return (
    <div style={{
      height: "500px",
      backgroundSize: "cover",
      marginTop: "20px",
      padding: "50px",
      justifyContent:"center",
      borderRadius:"5"
      
      


    }}>
      
 
 
      <Profile  fullName={fullName} Bio={Bio} Profession={Profession} handlclick={handlclick} >

      <ProfilePic/>

      </Profile>
      
    </div>
  );
}

export default App;

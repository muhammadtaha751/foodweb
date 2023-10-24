import Navbar from "../views/Navbar"
import ArenaCard from "../views/ArenaCard"
function Dashboard(){
    return(
        <div>
            <Navbar/>
<input style={{width:1020 , height:35}} placeholder="search for restaurants"/>

<div style={{display:"flex"}}>
    <ArenaCard/>
    <ArenaCard/>
    <ArenaCard/>
    <ArenaCard/>
    
</div>
<div style={{display:"flex"}}>
    <ArenaCard/>
    <ArenaCard/>
    <ArenaCard/>
    <ArenaCard/>
    
</div>
        </div>
        
    )
}
export default Dashboard
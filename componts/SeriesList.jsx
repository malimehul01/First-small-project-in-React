import Series from "../api/series.json";

export default function SeriesCard() {


return(

<>


  
   
    {
      Series.map((currel)=>{

       return(
       <li key={currel.id}>
        

        <img src={currel.img_url} alt=""  width={600} height={300}/>
        <h1>{currel.name}</h1>
        <p>{currel.rating}</p>
        <p>1{currel.cast}</p>
        <p>{currel.description}</p>
        <p>{currel.genre}</p>
        <a href={currel.watch_url}><button>Watch now</button></a>
       </li>




       )
      })
    }
</>
)};



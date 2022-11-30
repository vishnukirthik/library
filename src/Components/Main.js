import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const[search,setSearch]=useState("");
    const[bookData,setData]=useState([]);

    
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDBC3zAGKpIzU6XCIaZy40RG9iSPHCdaS8'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
            <div className="row1">
                <h1>E-Library</h1>
            </div>
            <div className="row2">
                <h2>
                    Find your book
                </h2>
            
                <div className="search">
                    <input type="text" placeholder="Enter your book name" value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button> <i class="fa-brands fa-searchengin"></i></button>
                    <select className="search"defaultValue="Sort" >
                        <option disabled value="Sort">Sort</option>
                        <option valu="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </select>
                </div>
                
            <img src="./images/36865.jpg" alt="background image"/>
            </div>
        </div>
        <h1 className="row1">Total books Found:{Math.floor(Math.random()*15)}</h1>
        <div className="container">
        {  
    
            <Card book={bookData} />
        }   
        </div>
        </>
    )
}

export default Main;
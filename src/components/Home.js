import React, { Fragment, useCallback, useRef, useState } from 'react'
import rose from '../images/rose.jpeg'
import daisy from '../images/daisy.webp'
import lavender from '../images/lavender.jpeg'
import lilly from '../images/lilly.jpeg'
import sunflower from '../images/sunflower.jpeg'
import tulip from '../images/tulip.jpeg'

export default function Home() {

const imageCollection = [
        {
            id : 0,
            url : rose,
            title : 'rose',
        },
        {
            id : 1,
            url : daisy,
            title : 'daisy',
        },
        {
            id : 2,
            url : lavender,
            title : 'lavender',
        },
        {
            id : 3,
            url : lilly,
            title : 'lilly',
        },
        {
            id : 4,
            url : sunflower,
            title : 'sunflower',
        },
        {
            id : 5,
            url : tulip,
            title : 'tulip',
        },     
        {
            id : 6,
            url : rose,
            title : 'rose',
        },
        {
            id : 7,
            url : daisy,
            title : 'daisy',
        },
        {
            id : 8,
            url : lavender,
            title : 'lavender',
        },
        {
            id : 9,
            url : lilly,
            title : 'lilly',
        },
        {
            id : 10,
            url : sunflower,
            title : 'sunflower',
        },
        {
            id : 11,
            url : tulip,
            title : 'tulip',
        },     
];

const [count, setCount] = useState(0);
const [clickedIndex, setClickedIndex] = useState();
const [clickedTitle,setClickedTitle] = useState();
const [matchFound, setMatchFound] = useState([]);
const countRef = useRef(0);

let [score, setScore] = useState(0);

let prevClickedTitle = '';
let currentTitile = '';


const handleCount = () =>{
    countRef.current += 1;
    setCount(countRef.current)
}

const handleClick = useCallback((item) => {
    console.log('item.id',item.id);
    setClickedIndex(item.id);
    if(item.id !== clickedIndex){
        currentTitile = item.title;
        prevClickedTitle = clickedTitle;
        setClickedTitle(currentTitile)
        if(prevClickedTitle === currentTitile){
            score +=1;
            const newArray = [...matchFound, currentTitile];
            setMatchFound(newArray);
            setScore(score);
        }
    }

});
 

  return (
    <Fragment>
        <div className='mt-[20px]'>
            <span className='mt-5 mb-5 inline-flex justify-end mr-[15px] md:mr-[50px] p-3 border-2 border-black rounded-xl'>Click Counter : {count}</span>
            <span className='mt-5 mb-5 inline-flex justify-end mr-[15px] md:mr-[50px] p-3 border-2  border-black rounded-xl'>score : {score}</span>
            <a href='' className='mt-5 mb-5 inline-flex justify-end mr-[15px] md:mr-[50px] p-3 border-2  border-black rounded-xl pointer'>Reset</a>
        </div>
        <div className={`${score === 6 && count <= 15 ? 'block font-bold text-green-600 py-[20px] text-[30px]' : 'hidden'}`}>WINNER !!!!</div>
        <div className='black grid imageGrid m-[50px] mt-[30px] gap-5' onClick={handleCount}>
            {
                        imageCollection.map((item,index) =>{
                            return(
                                <div 
                                className={`box flex justify-center border rounded-sm p-5 cursor-pointer ${index === clickedIndex || matchFound.find(title => title === item.title) ? 'bg-white' : 'bg-zinc-400'} md:h-[200px] h-[100px]`} 
                                key={index} 
                                onClick={() => handleClick(item)}>     
                                    <img 
                                        className={`md:h-[150px] h-auto ${index === clickedIndex || matchFound.find(title => title === item.title) ? 'block' : 'hidden'} `} 
                                        src={item.url} 
                                        alt={item.title}>
                                    </img>               
                                </div>
                            )
                         })
            }
        </div>
    </Fragment>
  )
}
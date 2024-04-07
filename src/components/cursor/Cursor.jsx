import { useEffect, useState } from "react"
import "./cursor.scss"
import { motion } from "framer-motion";
export default function Cursor(){
    const [pos,setPos]=useState({x:0,y:0})
    
    
    useEffect(()=>{
        const mouseMove=(e)=>{
            setPos({x:e.clientX,y:e.clientY})
        };

        window.addEventListener("mousemove",mouseMove);
        return()=>{
            window.removeEventListener("mousemove",mouseMove);
        }
    })
    return(
        <motion.div className="cursor" animate={{x:pos.x,y:pos.y}}></motion.div>
    )
}
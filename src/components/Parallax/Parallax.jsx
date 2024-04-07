
import { useRef } from "react"
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";


export default function Parallax({ type }) {


    const parallaxRef = useRef();

    const { scrollYProgress } = useScroll({
        target: parallaxRef,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    
    
    
     return (
        <div className="parallax" 
        ref={parallaxRef} 
        style={{
            background:"linear-gradient(180deg, #111132,#505064 )"
        }}>
            <motion.h1 style={{ y: yText }}>{"What We Did?"}</motion.h1>
            <motion.div  className="mountains"></motion.div>
            <motion.div  className="planets" style={{y:yBg,
                backgroundImage:`url("/sun.png"})`
            }}></motion.div>
            <motion.div  style={{ x: yBg}}className="stars"></motion.div>
        </div>
    )
}
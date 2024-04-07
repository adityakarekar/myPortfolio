import "./hero.scss"
import {motion} from"framer-motion"

const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        },
    }
}

export default function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2  variants={textVariants}>
                        ADITYA KAREKAR
                    </motion.h2>
                    <motion.h1  variants={textVariants}>Web Developer</motion.h1>
                    <motion.div className="buttons"  variants={textVariants}>
                        <motion.button  variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button  variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    {/* <motion.img src="/scroll.png" alt="scroll png"   variants={textVariants} animate="scrollBtn"/> */}
                </motion.div>

            </div>

    
            <div className="imgContainer">
                <img src="/hero.png" alt="my photo" />
            </div>



        </div>
    )
}
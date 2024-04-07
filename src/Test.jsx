import {useState} from "react"
import {motion} from "framer-motion"
export default function Test(){
    const[open,setOpen]=useState(false)

    const variants={
        visible:(i)=>({opacity:1,
            x:50,
            transition:{delay:i*0.2}
        }),
        hidden:{opacity:0},
        
    }

    const items=["item1","item2","item3"];
    return(
        <div className="course">
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item,index)=>{
                return(
                    <motion.li  variants={variants} key={item} custom={index}>{item}</motion.li>
                )
            })}
        </motion.ul>
    </div>
    )
    

}
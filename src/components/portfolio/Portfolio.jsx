import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZaSa7Gt0qn75CLkDDCdnDecpqJH7wwVyJ4lMhQDf6A&s",
        description: "This is project description"
    },
    {
        id: 2,
        title: "React Commerce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZaSa7Gt0qn75CLkDDCdnDecpqJH7wwVyJ4lMhQDf6A&s",
        description: "This is project description"
    },
    {
        id: 3,
        title: "React Commerce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZaSa7Gt0qn75CLkDDCdnDecpqJH7wwVyJ4lMhQDf6A&s",
        description: "This is project description"
    },
    {
        id: 4,
        title: "React Commerce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThZaSa7Gt0qn75CLkDDCdnDecpqJH7wwVyJ4lMhQDf6A&s",
        description: "This is project description"
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset:["start start","end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.description}</p>
                        <button>See Demo</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    });


    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map((item) => {
                    return (
                        <Single item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}
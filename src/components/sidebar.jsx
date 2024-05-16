import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: .5,
            staggerChildren: .2
        }
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: .5,
            staggerChildren: .4
        }
    }
}

const itemVarient = {
    close: { opacity: 0, x: -10, width: 0 },
    open: { opacity: 1, x: 0, width: "auto" }
}

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);
    const containerControls = useAnimationControls();

    useEffect(() => {

        if (isOpen) {
            containerControls.start("open");
        } else {
            containerControls.start("close");
        }

    }, [isOpen])

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <motion.div variants={containerVariants} initial="close" animate={containerControls} className="bg-neutral-950 flex flex-col gap-10 p-5 h-full shadow shadow-neutral-600 items-start">
            <button className="p-2 bg-neutral-900 rounded-full flex justify-center text-2xl items-center" onClick={() => toggleSidebar()}>
                <IoIosMenu />
            </button>

            <div>
                <motion.button className={`rounded-full bg-neutral-900 flex gap-2 p-2 items-center justify-center`}>
                    <IoIosAdd className="text-2xl" />
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.span
                                variants={itemVarient}
                                initial="close"
                                animate="open"
                                exit="close"
                                className="whitespace-nowrap text-xs">New Chat</motion.span>
                        }
                    </AnimatePresence>
                </motion.button>
            </div>

            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div variants={itemVarient} initial="close" animate="open" exit="close" className="flex flex-col gap-5">

                        <motion.div className="whitespace-nowrap text-lg px-1">Recent Chats</motion.div>

                        <motion.div className="whitespace-nowrap overflow-y-auto max-h-[300px]">
                            <div className="h-10 hover:bg-neutral-800/70 rounded-lg p-2">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                            <div className="h-8 p-1">ja;slkdfjaflajifodsfjas;kdf</div>
                        </motion.div>

                    </motion.div>
                }
            </AnimatePresence>
            <button className="text-3xl absolute bottom-8 p-1 w-10 h-10 rounded-full flex justify-center items-center hover:bg-neutral-800/50">
                <CiSettings />
            </button>
        </motion.div>
    )
}

export default Sidebar;
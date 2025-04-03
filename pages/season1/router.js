import { useRouter } from "next/router";
import { FaHome, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };

  const buttonClasses =
    "w-full sm:w-[300px] h-[200px] bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-4 border border-gray-600 overflow-hidden";

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white flex flex-col p-6 space-y-6 shadow-xl border-r border-gray-600">
        <div className="text-center text-xl font-bold text-gray-200">Ochir-Erdene</div>
        <p className="text-center text-gray-400 text-sm">Nest High School Student, 11a</p>
        <nav className="flex flex-col space-y-4">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => router.push("/")} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-600 transition-all">
            <FaHome /> <span>All</span>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => router.push("/season1/router")} className="bg-gray-600 flex items-center space-x-3 p-3 rounded-lg">
            <FaCogs /> <span>Season1</span>
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => router.push("/season2/router")} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-600">
            <FaCogs /> <span>Season2</span>
          </motion.button>
        </nav>
      </aside>

      <main className="flex-1 p-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-300 mb-8 tracking-wider uppercase">
        Season1 all My Tasks
        </h1>
        <motion.div 
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {["cv", "weather", "filter", "grid", "bieDaalt"].map((task) => (
            <motion.button 
              key={task}
              onClick={() => navigateTo(`/season1/${task}`)} 
              className={buttonClasses}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.img
                src={`/${task}.png`}
                width="400"
                height="250"
                alt={task}
                className="object-cover rounded-xl m-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-semibold capitalize">{task.replace("bieDaalt", "Bie Daalt")}</span>
            </motion.button>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
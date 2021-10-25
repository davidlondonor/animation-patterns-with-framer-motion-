import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import React from "react";

const AnimationLeft = () => {
	return (
		<>
			<motion.div
				animate={{
					x: 100,
					with: 50,
					boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
				}}
				// initial={{ width: 100 }}
				// exit={{ width: 0 }}
				// onHoverStart={{ width: 0 }}
				// onHoverEnd={{ width: 100 }}
				whileHover={{
					width: 200,
					transition: { duration: 0.4 },
				}}
				whileTap={{ scaleX: 1 }}
				className={styles.animationLeft}
			>
				Wifi
			</motion.div>
		</>
	);
};

export default AnimationLeft;

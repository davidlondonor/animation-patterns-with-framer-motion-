import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import React from "react";

const Title = () => {
	return (
		<>
			<motion.h1
				className={styles.title}
				animate={{ fontSize: 10, color: "#74cba9", x: 100 }}
			>
				Framer Motion for React
			</motion.h1>
		</>
	);
};

export default Title;

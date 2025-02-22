import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "hidden",
				height: {
					sx: "auto",
					md: "95%",
				},
				flexDirection: {
					md: "column",
				},
			}}
		>
			{categories.map((category) => (
				<button
					key={category.name}
					className="category-btn"
					onClick={() => setselectedCategory(category.name)}
					// attention SX est uniquemnet pour les composants MUI !!! Sinon utiliser Style
					style={{
						background: category.name === selectedCategory && "#ff6f61",
						color: "#fff",
					}}
				>
					<span
						style={{
							color: category.name === selectedCategory ? "#fff" : "#ff6f61",
							marginRight: "15px",
						}}
					>
						{category.icon}
					</span>
					<span
						style={{
							opacity: category.name === selectedCategory ? "1" : "0.8",
						}}
					>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
};

export default Sidebar;

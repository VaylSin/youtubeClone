import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
	const [selectedCategory, setselectedCategory] = useState("Accueil");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
			setVideos(data.items)
		);
	}, [selectedCategory]);

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: {
						sx: "auto",
						md: "92vh",
					},
					borderRight: "1px solid #3d3d3d",
					px: {
						sx: 0,
						md: 2,
					},
				}}
			>
				<Sidebar
					selectedCategory={selectedCategory}
					setselectedCategory={setselectedCategory}
				/>
				<Typography
					className="copyright"
					variant="body2"
					sx={{
						mt: 1.5,
						color: "#fff",
					}}
				>
					© 2025 SKDigit
				</Typography>
			</Box>
			<Box
				p={2}
				sx={{
					overflowX: "auto",
					height: "90vh",
					flex: 2,
				}}
			>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{
						color: "#fff",
					}}
				>
					{selectedCategory} <span style={{ color: "#ff6f61" }}> videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;

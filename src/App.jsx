import {Box, Container} from "@mui/material";

import NavBar from "@navigation/NavBar";
import SideList from "@navigation/SideList";
import TrendingVideos from "@components/TrendingVideos";
import PopularPosts from "@components/PopularPosts";
import "@styles/main.css";

const AppWrapper = Box;
const Main = Box;
const SideListWrapper = Box;

function App() {
  return (
    <>
      <AppWrapper
        sx={{display: "flex", flexDirection: "column"}}
      >
        <NavBar />
        <Box sx={{display: "flex", flexGrow: 1}}>
          <SideListWrapper
            sx={{
              height: "100%",
              maxWidth: "16rem",
              display: {xs: "none", md: "block"},
            }}
          >
            <SideList />
          </SideListWrapper>

          <Main sx={{flexGrow: 1}}>
            <Container maxWidth="xl">
              <TrendingVideos />
            </Container>
            <Container maxWidth="lg" sx={{height: "100%", p: 2}}>
              <PopularPosts />
            </Container>
          </Main>
        </Box>
      </AppWrapper>
    </>
  );
}

export default App;

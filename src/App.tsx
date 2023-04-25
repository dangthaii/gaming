import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="gray">
          sidebar
        </GridItem>
      </Show>

      <GridItem area="main" bg="pink">
        main website
      </GridItem>
    </Grid>
  );
}

export default App;

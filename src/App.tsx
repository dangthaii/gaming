import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        navbar
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

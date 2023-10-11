import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import Typography from "carbon-react/lib/components/typography";

const App = () => {
  return (
    <Box margin="25px">
      <Button>Hello Carbon</Button>
      <Typography color="--colorsSemanticNegative500">
        Please remember to select the correct version of Carbon and
        @sage/design-tokens. You might need to change package.json manually if
        you can't see the version in the dropdown.
      </Typography>
    </Box>
  );
};

export default App;

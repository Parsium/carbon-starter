import Box from "carbon-react/esm/components/box";
import Typography from "carbon-react/esm/components/typography";
import Message from "carbon-react/esm/components/message";

const App = () => {
  return (
    <Box
      padding="25px"
      display="flex"
      flexDirection="column"
      gap="var(--spacing200)"
      minWidth="320px"
      maxWidth="1024px"
      boxSizing="border-box"
    >
      <Typography variant="h1">Hello Carbon 👋</Typography>
      <Message variant="warning">
        <Typography variant="b" m={0}>
          Edit the <code>package.json</code> file manually to update the
          versions of carbon-react and @sage/design-tokens as needed.
        </Typography>
      </Message>
    </Box>
  );
};
export default App;

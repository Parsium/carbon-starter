import Box from "carbon-react/lib/components/box";
import Button from "carbon-react/lib/components/button";
import Typography from "carbon-react/lib/components/typography";
import Textbox from "carbon-react/lib/components/textbox";
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
} from "carbon-react/lib/components/flat-table";

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
      <Typography variant="big">
        Please remember to use the correct version of Carbon and
        @sage/design-tokens as part of your demo. You can change this by
        manually editing the <code>package.json</code>.
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="var(--spacing200)">
        <Button buttonType="primary">Primary</Button>
        <Button buttonType="secondary">Secondary</Button>
        <Button buttonType="tertiary">Tertiary</Button>
        <Button destructive>Destructive</Button>
      </Box>
      <Textbox
        label="Textbox"
        inputHint="Hint text"
        value="Jane Doe"
        onChange={() => {}}
      />
      <FlatTable>
        <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>First Name</FlatTableHeader>
            <FlatTableHeader>Surname</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow>
            <FlatTableCell>John</FlatTableCell>
            <FlatTableCell>Doe</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Paul</FlatTableCell>
            <FlatTableCell>Smith</FlatTableCell>
          </FlatTableRow>
        </FlatTableBody>
      </FlatTable>
    </Box>
  );
};
export default App;

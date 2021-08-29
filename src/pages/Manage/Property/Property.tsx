import Button from "@material-ui/core/Button";
import ManageLayout from "../../../components/UI/Layout/Manage/ManageLayout";
import PropertyContent from "./PropertyContent";
import classes from "./Property.module.css";
import Box from "@material-ui/core/Box";

const Property = () => (
  <ManageLayout>
    <Box display={"flex"}>
      <Button
        color={"primary"}
        variant={"contained"}
        className={classes.button}
        href={"/manage/property/create"}
      >
        Add New Property
      </Button>
    </Box>
    <PropertyContent />
  </ManageLayout>
);

export default Property;

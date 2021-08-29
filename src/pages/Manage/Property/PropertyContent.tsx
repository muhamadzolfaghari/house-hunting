import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { propertySelector } from "../../../app/hooks";

const PropertyContent = () => {
  const propertyList = useSelector(propertySelector);

  if (!propertyList.length) {
    return <Typography>There is no property created at the moment!</Typography>;
  }

  return <>some result found here</>;
};

export default PropertyContent;

import { useHistory } from "react-router-dom";

const useActiveRoute = (excludePath: string) => {
  const history = useHistory();
  return history.location.pathname.replace(excludePath, "");
};

export default useActiveRoute;

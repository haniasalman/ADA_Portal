import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  dashedBorder: {
    border: "1px solid",
    borderRadius: "12px",
    borderColor: "#979797",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  EditStatus: {
    border: "1px solid",
    borderRadius: "12px",
    borderColor: "#979797",
    padding: "10px",
    marginTop: "2px",
    marginLeft: "5px",
    marginBottom: "15px",
  },
  heading: {
    // marginBottom: theme.spacing(2),
    marginLeft: "20px",
    marginRight: "20px",
  },
  text: {
    // marginBottom: theme.spacing(2),
    marginLeft: "20px",
    marginRight: "20px",
    fontSize: "8px",
  },

  editButton: {
    marginTop: "20px",
    marginLeft: "20px",
    marginRight: "20px",
    fontSize: "8px",
    color: "#ffff",
    backgroundColor: "black",
    borderRadius: "20px",
    width: "80px",
    height: "30px",
  },
}));

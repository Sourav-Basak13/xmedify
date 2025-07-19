import { InputBase, styled } from "@mui/material";

export const MobileInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    background: theme.palette.text.primary,
    fontSize: 16,
    width: "25vw",
    padding: "10px 12px",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
    "@media(max-width:900px)": {
      width: "100%",
    },
  },
}));

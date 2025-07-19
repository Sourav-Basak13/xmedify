import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { BookingContext } from "../../layout/WebWrapper/WebWrapper";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
  const { _bookings, _filteredBookings } = useContext(BookingContext);
  // Memoizing the filtered list
  const filteredList = useMemo(() => {
    if (!inputText.trim()) return _bookings[0];
    return _bookings[0].filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, _bookings[0]]);

  const handleSubmit = (e) => {
    e.preventDefault();
    _filteredBookings[1](filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="row" spacing={2}>
        <TextField
          type="text"
          label="Search By Hospital"
          variant="outlined"
          fullWidth
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{
            ".MuiInputBase-root": {
              color: "#000000",
            },
          }}
          inputProps={{ maxLength: 100 }} // Limiting input to 100 characters
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<SearchIcon />}
          sx={{ py: "15px", px: 8, flexShrink: 0 }}
          disableElevation
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}

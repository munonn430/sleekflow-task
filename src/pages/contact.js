import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Option,
  Select,
  TextField,
  Typography,
} from "@mui/joy";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useEffect, useState } from "react";
import { action } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { ContactListing } from "../components";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { isLoading, info, data } = useSelector(
    (state) => state.contact.listing
  );
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    status: null,
    gender: null,
  });

  useEffect(() => {
    dispatch(
      action.fetchContacts({
        name: search,
        ...filter,
      })
    );
  }, [dispatch, search, filter]);

  const onFilterClear = () => {
    setFilter({
      status: null,
      gender: null,
    });
  };

  return (
    <Box className="p-4 w-screen h-screen">
      <Box className="flex flex-col gap-4 mb-10 max-w-2xl">
        <Typography level="h2" className="text-left">
          Contact
        </Typography>
        <Input
          size="sm"
          startDecorator={<SearchRoundedIcon />}
          placeholder="Search contact"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Grid
          container
          spacing={2}
          sx={{ flexGrow: 1 }}
          justifyContent="end"
          alignItems="end"
        >
          <Grid xs={4}>
            <FormControl size="sm">
              <FormLabel>Status</FormLabel>
              <Select
                value={filter.status}
                size="sm"
                placeholder="Filter by status"
                slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                onChange={(event, newValue) =>
                  setFilter((filter) => {
                    return {
                      ...filter,
                      status: newValue,
                    };
                  })
                }
              >
                <Option value="alive">Alive</Option>
                <Option value="dead">Dead</Option>
                <Option value="unknown">Unknown</Option>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={4}>
            <FormControl size="sm">
              <FormLabel>Gender</FormLabel>
              <Select
                value={filter.gender}
                size="sm"
                placeholder="Filter by gender"
                slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                onChange={(event, newValue) =>
                  setFilter((filter) => ({
                    ...filter,
                    gender: newValue,
                  }))
                }
              >
                <Option value="female">Female</Option>
                <Option value="male">Male</Option>
                <Option value="genderless">Genderless</Option>
                <Option value="unknown">Unknown</Option>
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={4}>
            <Button onClick={onFilterClear}>Clear Filters</Button>
          </Grid>
        </Grid>
      </Box>
      <ContactListing data={data} />
    </Box>
  );
};

export default ContactPage;

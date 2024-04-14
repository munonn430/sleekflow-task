import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Option,
  Select,
  Typography,
} from "@mui/joy";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useCallback, useEffect, useState } from "react";
import { action } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { ContactListing } from "../components";

const ContactPage = () => {
  const dispatch = useDispatch();
  const { isLoading, info, data } = useSelector(
    (state) => state.contact.listing
  );
  const [filter, setFilter] = useState({
    name: null,
    status: null,
    gender: null,
  });
  const [nextPage, setNextPage] = useState(2);
  const [hasMoreToFetch, setHasMoreToFetch] = useState(true);

  useEffect(() => {
    dispatch(
      action.fetchContacts({
        page: 1,
        ...filter,
      })
    )
      .unwrap()
      .then((res) => {
        if (res.info.pages === 1) {
          setHasMoreToFetch(false);
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch, filter]);

  const resetData = useCallback(() => {
    dispatch(action.reset());
    setHasMoreToFetch(true);
    setNextPage(2);
  }, [dispatch]);

  const onFilterClear = () => {
    setFilter((filter) => ({
      ...filter,
      status: null,
      gender: null,
    }));
    resetData();
  };

  const fetchMoreData = useCallback(() => {
    dispatch(
      action.fetchContacts({
        page: nextPage,
        ...filter,
      })
    );
    setNextPage((page) => page + 1);
    if (info?.pages && nextPage >= info.pages) {
      setHasMoreToFetch(false);
    }
  }, [dispatch, nextPage, filter, info?.pages]);

  const onFilter = (filteredValue) => {
    resetData();
    setFilter(filteredValue);
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
          value={filter.name}
          onChange={(event) =>
            onFilter((filter) => {
              return {
                ...filter,
                name: event.target.value,
              };
            })
          }
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
                  onFilter((filter) => {
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
                  onFilter((filter) => ({
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
            {(filter.status || filter.gender) && (
              <Button onClick={onFilterClear}>Clear Filters</Button>
            )}
          </Grid>
        </Grid>
      </Box>
      <ContactListing
        isLoading={isLoading}
        data={data}
        fetchMoreData={fetchMoreData}
        hasMoreToFetch={hasMoreToFetch}
      />
    </Box>
  );
};

export default ContactPage;

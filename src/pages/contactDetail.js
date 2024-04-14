import { Avatar, Box, Divider, Sheet, Typography } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { EpisodeListing } from "../components";
import { action } from "../slice";

const ContactDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.contact.detail);

  useEffect(() => {
    dispatch(action.fetchContactById({ id }));
  }, [dispatch, id]);

  return (
    <Box className="w-screen">
      {data && (
        <>
          <Box className="px-10 py-5">
            <Box className="flex flex-row items-center gap-5">
              <Avatar
                alt="character-image"
                src={data.image}
                sx={{
                  "--Avatar-size": "100px",
                }}
              />
              <Typography level="h2">{data.name}</Typography>
            </Box>
          </Box>
          <Divider />
          <Box className="px-10 py-6 text-left">
            <Typography level="title-lg">Personal Info</Typography>
            <Sheet
              className="p-4 mt-2 rounded-md"
              color="neutral"
              variant="soft"
            >
              <Typography>Gender: {data.gender}</Typography>
              <Typography>Species: {data.species}</Typography>
              <Typography>Status: {data.status}</Typography>
              <Typography>Origin: {data.origin.name}</Typography>
              <Typography>Location: {data.location.name}</Typography>
              <Typography>
                Created Date: {moment(data.created).format("D MMMM YYYY h:mma")}
              </Typography>
            </Sheet>
            <Box className="mt-10 flex flex-col gap-2">
              <Typography level="title-lg">Episodes</Typography>
              <EpisodeListing
                ids={data.episode.map((url) => {
                  const parts = url.split("/");
                  const id = parts.pop();
                  return id;
                })}
              />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContactDetailPage;

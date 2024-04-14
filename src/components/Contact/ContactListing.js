import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Link,
  Typography,
} from "@mui/joy";
import InfiniteScroll from "react-infinite-scroll-component";

const ContactListing = ({ isLoading, data, fetchMoreData, hasMoreToFetch }) => {
  return (
    <Box className="max-w-2xl">
      {isLoading && data.length === 0 ? (
        <CircularProgress />
      ) : data.length > 0 ? (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMoreToFetch}
          loader={<CircularProgress />}
          endMessage={<Divider>End</Divider>}
          scrollThreshold={0.95}
        >
          <Box className="flex flex-col gap-5 mb-4">
            {data.map((item) => (
              <Card
                key={item.id}
                size="md"
                invertedColors
                sx={{
                  "&:hover": {
                    boxShadow: "md",
                    borderColor: "neutral.outlinedHoverBorder",
                  },
                }}
              >
                <CardContent>
                  <Link href={`/contact/${item.id}`} overlay />
                  <Box className="flex flex-row gap-5">
                    <Avatar
                      sx={{
                        "--Avatar-size": "60px",
                      }}
                      size="lg"
                      src={item.image}
                      alt="character-image"
                    />
                    <Box className="flex flex-col text-left justify-center">
                      <Typography level="title-lg">{item.name}</Typography>
                      <Typography level="body-sm">{item.species}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </InfiniteScroll>
      ) : (
        <Typography>No character found.</Typography>
      )}
    </Box>
  );
};

export default ContactListing;

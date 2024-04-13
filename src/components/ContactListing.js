import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";

const ContactListing = ({ data }) => {
  return (
    <Box className="flex flex-col gap-5">
      {data.map((item) => (
        <Card
          key={item.id}
          size="md"
          className="max-w-2xl"
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
  );
};

export default ContactListing;

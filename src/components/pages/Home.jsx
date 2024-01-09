import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
export default function Home() {
  return (
    <>
      <Container
        maxWidth="xlg"
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          height:'100%',
          p: 10,
        }}
      >
        <Card sx={{  maxWidth: { xs: 500, md: 800 },  }}>
          <CardMedia
            component="img"
            alt="In a raucous tavern, an adventuring party cheers with mugs of ale"
            height="400"
            image="/art/setting-up-a-base-of-operations.jpg"
          />
          {/* <img src="/art/setting-up-a-base-of-operations.jpg" alt="" /> */}
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Visualize your D&D scenes for free!
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              New to D&D? Not ready to sink mountains of gold into enough maps
              and miniatures to impress Vecna? Never fear, resourceful
              adventurer! This frugal site helps kickstart your roleplaying
              dreams without breaking the bank.
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Browse Sketchfab's massive treasure trove of 3D models and
              FreeSound's ambient audio clips to conjure taverns, caves, weapons
              - whatever your budding campaign craves! Become an instant Dungeon
              Master and build vivid scenes to draw wandering players into your
              budget-friendly world.
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
              Once crafted, your creations persist between sessions thanks to
              handy browser cache magic. So intricately design to your heart's
              content, just don't clear that cache lest your works vanish like a
              failed Polymorph spell!
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
              Join the roleplaying revolution, one thrifty digital scene at a
              time. Quest on without blowing your life savings on enough fancy
              maps and minis to make Strahd jealous. Adventure awaits! amateur
              bard sound effects
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

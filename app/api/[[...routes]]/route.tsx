/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/** @jsxImportSource frog/jsx */
import { handle } from "frog/vercel";
import { Frog } from "frog";

export const revalidate = 0;

const app = new Frog({
  basePath: "/api",
  imageOptions: { headers: { "cache-control": "max-age=0, must-revalidate" } },
});

app.frame("/", (c) => {
  const date = new Date().toLocaleTimeString();
  return c.res({
    image: (
      <div
        style={{
          color: "black",
          backgroundColor: "white",
          display: "flex",
          fontSize: 60,
        }}
      >
        <img
          style={{ height: 100, width: 100 }}
          src="https://events.xyz/logo.png"
        />
        <span>The time is: {date}</span>
      </div>
    ),
  });
});

export const GET = handle(app);
export const POST = handle(app);

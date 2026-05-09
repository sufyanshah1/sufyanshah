import { createFileRoute } from "@tanstack/react-router";
import { HomeScreen } from "@/components/local-connect/HomeScreen";

export const Route = createFileRoute("/")({
  component: HomeScreen,
  head: () => ({
    meta: [
      { title: "Local Connect — Smart Caller ID & Local Discovery" },
      {
        name: "description",
        content:
          "Local Connect: caller ID, dual-SIM call history, spam detection, messaging and local business discovery in one app.",
      },
    ],
  }),
});

"use client";
import MeetingTypeList from "@/components/MeetingTypeList";
import { useGetCalls } from "@/hooks/useGetCall";
import { Call } from "@stream-io/video-react-sdk";
import React from "react";

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now);
  const { upcomingCalls } = useGetCalls();
  const call = upcomingCalls;
  console.log("🚀 ~ Home ~ call:", call[0]);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 md:p-5">
          {call.length > 0 ? (
            <h2 className="glassmorphism max-w-[400px] rounded py-2 text-center text-base font-normal whitespace-nowrap">
              Upcoming Meeting: {call[0].state?.startsAt?.toLocaleString()}
            </h2>
          ) : (
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
              No Upcoming Meeting
            </h2>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;

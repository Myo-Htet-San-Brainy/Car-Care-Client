import React from "react";
import Lottie from "lottie-react";
import ApiMessageLoading from "../assets/apiMessageLoading.json";

const ApiMessage = ({ message }) => {
  if (typeof message === "string") {
    return (
      <div className="py-10 px-10 flex items-start gap-5  ">
        <div className="min-w-[5%] h-14 rounded-full bg-green-400 "></div>
        <div className="max-w-[95%] grow ">
          <Lottie
            animationData={ApiMessageLoading}
            loop={true}
            style={{
              width: "6rem",
              height: "6rem",
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="py-10 px-10 flex items-start gap-5  ">
      <div className="min-w-[5%] h-14 rounded-full bg-green-400 "></div>
      <div className="max-w-[95%] grow text-5xl text-white">
        {message.map((item) => {
          const { type, content } = item;
          if (type === "header") {
            return (
              <h1 key={item.id} className="mb-7 uppercase font-bold">
                {content}
              </h1>
            );
          } else if (type === "paragraph") {
            return (
              <p key={item.id} className="mb-7 capitalize">
                {content}
              </p>
            );
          } else if (type === "bullet") {
            return (
              <ul key={item.id} className="mb-7 list-disc list-inside">
                {content.map((listItem) => {
                  return <li key={listItem}>{listItem}</li>;
                })}
              </ul>
            );
          } else if (type === "numbered list") {
            return (
              <ol key={item.id} className="mb-7 list-decimal list-inside">
                {content.map((listItem) => {
                  return <li key={listItem}>{listItem}</li>;
                })}
              </ol>
            );
          } else if (type === "suggestion") {
            if (item["sub-type"] === "image-and-text") {
              return (
                <div
                  key={item.id}
                  className="mb-7 flex  px-8  border border-white"
                >
                  <div className="flex items-center w-[30%]  ">
                    <img
                      src={content.image}
                      alt={content.header}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="w-[70%] py-10 px-6   text-white">
                    <h1 className="mb-5 font-bold text-6xl capitalize">
                      {content.header}
                    </h1>
                    <p className="text-4xl capitalize">{content.text}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className="mb-7 px-8 py-10  grid grid-cols-3 gap-5 place-items-center border border-white"
                >
                  {content.images.map((image) => {
                    return (
                      <img
                        src={image}
                        alt=""
                        className="rounded-lg"
                        key={image}
                      />
                    );
                  })}
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default ApiMessage;

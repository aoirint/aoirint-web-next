import React from "react";
import { NicoliveProgram } from "@/api/useLiveinfoApiMiddlewareNicolive";

interface LiveinfoApiMiddlewareNicoliveCardProps {
  program: NicoliveProgram;
}

const LiveinfoApiMiddlewareNicoliveCard: React.FC<
  LiveinfoApiMiddlewareNicoliveCardProps
> = ({ program }) => {
  return program.isOnair ? (
    <>
      <div
        className="card mb-6"
        style={
          program.isOnair && program.thumbnailUrl != null
            ? {
                backgroundImage: `url(${program.thumbnailUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "whitesmoke",
              }
            : {}
        }
      >
        <div
          className="card-content py-4"
          style={
            program.isOnair && program.thumbnailUrl != null
              ? {
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                }
              : {}
          }
        >
          <div className="media">
            <div className="media-content">
              {program.isOnair ? (
                <>
                  <p className="title is-5">
                    <a
                      href={program.programUrl ?? "#"}
                      style={{ color: "inherit" }}
                    >
                      {program.programTitle}
                    </a>
                  </p>
                  <p className="subtitle is-7 mb-2">
                    <a
                      href={program.communityUrl ?? "#"}
                      style={{ color: "inherit" }}
                    >
                      {program.communityName}
                    </a>
                    {" - "}
                    <a
                      href={program.userUrl ?? "#"}
                      style={{ color: "inherit" }}
                    >
                      {program.userName}
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <p className="title is-5">放送中の番組はありません</p>
                  <p className="subtitle is-7 mb-2">-</p>
                </>
              )}
              <p className="is-size-7 has-text-right has-text-grey">
                Powered by{" "}
                <a href="https://com.nicovideo.jp/community/co5633084">
                  ニコニコ生放送
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default LiveinfoApiMiddlewareNicoliveCard;

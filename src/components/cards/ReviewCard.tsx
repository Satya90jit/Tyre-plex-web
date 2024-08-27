import { Avatar } from "@mui/material";
import { Fragment } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <article className="flex flex-col gap-4 p-4 border rounded-md">
      <div className="flex items-center gap-4">
        <Avatar
          style={{ width: "3rem", height: "3rem" }}
          className="!bg-stone-700"
        />
        <div className="flex flex-col gap-1">
          <span className="font-semibold">{item?.userId?.name}</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Fragment key={index}>
                  {item?.rating >= index + 1 ? (
                    <AiFillStar className="text-amber-400 text-sm" />
                  ) : (
                    <AiOutlineStar className="text-amber-400 text-sm" />
                  )}
                </Fragment>
              ))}
            </div>
            <span className="font-medium text-sm">
              {new Date(item?.createdAt).toLocaleDateString("en-US")}
            </span>
          </div>
        </div>
      </div>
      <p className="tracking-wide text-small text-gray-600">{item?.review}</p>
    </article>
  );
};
export default ReviewCard;

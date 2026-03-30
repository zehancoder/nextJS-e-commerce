import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <SkeletonTheme baseColor="#D9CFC7">
      <div className="h-[300px]">
        <Skeleton width={"100%"} height={"100%"} />
      </div>
      <div className="mt-0.5 flex items-center justify-between gap-3">
        <p className="h-10 mt-1.5 w-full">
          <Skeleton height={"100%"} />
        </p>
        <p className="h-9 mt-1 w-full">
          <Skeleton height={"100%"} />
        </p>
      </div>
    </SkeletonTheme>
  );
}

export default CardSkeleton;

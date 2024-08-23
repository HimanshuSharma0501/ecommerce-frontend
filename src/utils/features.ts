import { MessageResponse } from "../types/api-types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

type ResType =
  | {
    data: MessageResponse;
  }
  | {
    error: FetchBaseQueryError | SerializedError;
  };

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
) => {
  if ("data" in res) {
    toast.success(res.data.message);
    if (navigate) navigate(url);
  } else {
    const error = res.error as FetchBaseQueryError;
    const messageResponse = error.data as MessageResponse;
    toast.error(messageResponse.message);
  }
};

export const getLastMonths = () => {
  const currentDate = moment();

  currentDate.date(1);

  const last6Months: string[] = [];
  const last12Months: string[] = [];

  for (let i = 0; i < 6; i++) {
    const monthDate = currentDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    last6Months.unshift(monthName);
  }

  for (let i = 0; i < 12; i++) {
    const monthDate = currentDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    last12Months.unshift(monthName);
  }

  return {
    last12Months,
    last6Months,
  };
};

export const transformImage = (url: string, width = 200): string => {
  // Check if the URL is valid and contains 'upload/'
  if (!url || !url.includes("upload/")) {
    return url; // Return the original URL if it's not valid or doesn't need transformation
  }

  // Split the URL into two parts: before and after 'upload/'
  const [beforeUpload, afterUpload] = url.split("upload/");

  // Construct the new URL with the transformation parameters
  const newUrl = `${beforeUpload}upload/dpr_auto,w_${width}/${afterUpload}`;

  return newUrl;
};

import React, { createContext, useContext } from "react";

interface stateType {
  [key: string]: string;
}

const contentCopy: stateType = Object.freeze({
  "comments.beFirst": "Nothing yet, be the first!",
  "comments.loadMore": "load more...",
  "message.broken": "Potentially, things are broken. Yell at your screen and try again.",
  "site.navigation.read": "read",
  "site.navigation.write": "write",
  "site.title": "bulletin board",
  "sort.newestFirst": "sort: newest first",
  "sort.oldestFirst": "sort: oldest first",
});

const ContentContext = createContext<stateType>(contentCopy);

export const useContentCopy = (messageId: string): string => {
  const copy = useContext(ContentContext);

  return copy && copy[messageId] ? copy[messageId] : '';
};

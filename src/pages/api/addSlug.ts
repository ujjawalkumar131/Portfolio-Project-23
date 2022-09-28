import { NextApiRequest, NextApiResponse } from "next";
import kvpair from "@/utils/kvpair";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, url } = req.query;
  if (!slug || typeof slug !== "string" || !url || typeof url !== "string") {
    res.status(400).send("Bad Request");
    return;
  }
  if (slug == "") {
    // slug empty
    res.status(400).send("Slug Empty");
    return;
  }
  if (url == "") {
    // url empty
    res.status(400).send("Url Empty");
    return;
  }
  // Slug should only contain lowercase letters, numbers and dashes
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    // regex failed for slug
    res.status(400).send("Slug Invalid");
    return;
  }
  const urlreg =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
  if (!urlreg.test(url)) {
    // regex failed for url
    res.status(400).send("Url Invalid");
    return;
  }
  if (kvpair.has(slug)) {
    res.status(409).send("Slug Aleready exists");
    return;
  }
  kvpair.set(slug, url);
  res.status(200).send("Slug added");
  return;
};
export default handle;

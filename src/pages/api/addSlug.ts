import { NextApiRequest, NextApiResponse } from "next";
import kvpair from "@/utils/kvpair";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { slug, url } = req.query;
  if (!slug || typeof slug !== "string" || !url || typeof url !== "string") {
    res.status(400).send("Bad Request");
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

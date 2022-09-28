import { NextApiRequest, NextApiResponse } from "next";
import kvpair from "@/utils/kvpair";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  if (!slug || typeof slug !== "string") {
    res.status(400).send("Invalid query");
    return;
  }
  if (!kvpair.has(slug)) {
    res.status(404).send("Slug Not Found... this URL might have been deleted!");
    return;
  }
  const url = kvpair.get(slug);
  res.status(200).json({ url: url });
  return;
};
export default handle;

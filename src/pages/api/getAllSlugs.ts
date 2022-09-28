import { NextApiRequest, NextApiResponse } from "next";
import kvpair from "@/utils/kvpair";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const { password } = req.query;
  if (
    !password ||
    typeof password !== "string" ||
    password !== process.env.ALLSLUGPASS
  ) {
    console.log(process.env.ALLSLUGPASS);
    res.status(403).send("Forbidden");
    return;
  }
  const ans: { key: string; url: string }[] = [];
  kvpair.forEach((value, key) => {
    ans.push({
      key: key,
      url: value,
    });
  });
  res.status(200).json(ans);
};
export default handle;

import { utapi } from "@/utils/uploadthing";
import { pipeline } from "@xenova/transformers";
import { count } from "console";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  //get upload url from upload thing
  const formData = await req.formData();
  const files = formData.get("files") as File;
  const blob = await put(files.name, files, {
    access: "public",
  });
  //const response = await utapi.uploadFiles(files);
  //const responseData = response[0].data;
  const url = blob.url;

  //detect obj using onx local model
  const detector = await pipeline("object-detection", "Xenova/detr-resnet-50");
  const output = await detector(url);

  // parse the output into a list of objs and label them
  const countObj: { [key: string]: number } = {};
  output.forEach(({ score, label }: any) => {
    if (score > 0.85) {
      if (countObj[label]) {
        countObj[label]++;
      } else {
        countObj[label] = 1;
      }
    }
  });
  return new Response(
    JSON.stringify({
      url: url,
      label: JSON.stringify(countObj),
    }),
    { status: 200 }
  );
}

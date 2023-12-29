import { utapi } from "@/utils/uploadthing";
import { pipeline } from "@xenova/transformers";
import PipelineSingleton from "./pipeline.js";

export async function POST(req, res) {
  // get uploaded url from uploadthing
  const formData = await req.formData();
  const files = formData.get("files");
  const response = await utapi.uploadFiles(files);
  const responseData = response.data;
  const url = responseData?.url;

  const classifier = await PipelineSingleton.getInstance();

  const output = await classifier(url);

  //dtect objects using onnx local model
  // const detector = await pipeline("object-detection", "Xenova/detr-resnet-50");
  // const output = await detector(url);

  // parse output -> list of objects -> label (detected objects)

  const countObj = {};
  output.forEach(({ score, label }) => {
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

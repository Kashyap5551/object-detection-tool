import { UTApi } from "uploadthing/server";
import "dotenv/config";
require("dotenv").config();
export const utapi = new UTApi({ apiKey: process.env.UPLOADTHING_SECRET });

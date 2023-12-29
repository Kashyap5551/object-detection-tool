"use client";

import { ImageIcon, Loader2, ScanSearch } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

const ImageClassificationPage = (props: Props) => {
  const [url, seturl] = useState("");
  const [label, setlabel] = useState("");
  const [loading, setloading] = useState(false);
  return (
    <main className="flex flex-col items-center justify-start p-24 gap-2 ">
      <form onSubmit={uploadFiles} className="flex gap-2 items-center">
        <ImageIcon />
        <Input name="files" type="file"></Input>
        <Button disabled={loading} type="submit">
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <ScanSearch size={20} />
          )}
        </Button>
      </form>
      {url && (
        <>
          <Image src={url} alt="uploaded image" width={400} height={400} />
          <Link
            href={url}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-xs text-mute"
            )}
          ></Link>
        </>
      )}
      {label && <p className="font-bold text-l">Detected: {label}</p>}
    </main>
  );

  //handler func
  async function uploadFiles(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    setloading(true);
    const response = await axios.post("/api/detect-objects", formData);
    setloading(false);
    seturl(response.data.url);
    setlabel(response.data.label);
    //set vars for url and label
  }
};

export default ImageClassificationPage;

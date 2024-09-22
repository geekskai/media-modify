import { NextResponse } from "next/server";
import ytdl from "ytdl-core";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const url = searchParams.get("url") || "/";
  console.log(`🚀 ~ url:`, url);
  const info = await ytdl.getInfo(url);
  console.log(`🚀 ~ info:`, info);

  const videoFormats = ytdl.filterFormats(info.formats, "video");

  const format = ytdl.chooseFormat(videoFormats, {
    quality: "highest",
  });

  const fileName = `${info.videoDetails.title}.${format.container}`;

  const responseHeaders = {
    "content-Disposition": `attachment; filename="${fileName}"`,
  };

  return NextResponse.json({
    format,
    fileName,
    responseHeaders,
  });
}

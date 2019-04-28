import * as admin from "firebase-admin";
import * as path from "path";
import * as os from "os";
import * as fs from "fs";
import { JSDOM } from "jsdom";
import * as d3 from "d3";
const svg2img = require("svg2img");
const base64Img = require("base64-img");

const downloadTemplate = async (
  bucket: string,
  file: string
): Promise<string> => {
  const destination = path.join(os.tmpdir(), "tmp.svg");
  try {
    await admin
      .storage()
      .bucket(bucket)
      .file(file)
      .download({ destination });

    return destination;
  } catch (e) {
    throw e;
  }
};

const genSvg = (tmp: string, title: string, description: string): string => {
  const svg = new JSDOM(tmp).window.document;
  const body = d3.select(svg.querySelector("svg"));
  const width = Number(svg.querySelector("svg")!.getAttribute("width"));
  body
    .append("text")
    .attr("x", (width - title.length * 32) / 2)
    .attr("y", 135)
    .attr("fill", "#161925")
    .attr("font-size", 32)
    .attr("font-weight", "bold")
    .html(title);
  body
    .append("text")
    .attr("x", (width - description.length * 32) / 2)
    .attr("y", 270)
    .attr("fill", "#161925")
    .attr("font-size", 32)
    .html(description);

  return svg.body.innerHTML;
};

const svg2png = (svg: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    svg2img(svg, (err: Error, buf: Buffer) => {
      if (err) {
        reject(err);
      }
      resolve(buf);
    });
  });
};

export default async (
  bucket: string,
  title: string,
  description: string
): Promise<string> => {
  const tmpPath = await downloadTemplate(bucket, "Template.svg");
  const template = (await new Promise((res, rej) => {
    fs.readFile(tmpPath, (err, buf) => {
      if (err) rej(err);
      res(buf.toString());
    });
  }).catch(_ => fs.unlinkSync(tmpPath))) as string;
  const svg = genSvg(template, title, description);
  const png = await svg2png(svg).catch(() => fs.unlinkSync(tmpPath));
  const savePath = (await new Promise((res, rej) => {
    const tmp = path.join(os.tmpdir(), "img.png");
    fs.writeFile(tmp, png, err => {
      if (err) rej(err);
      res(tmp);
    });
  }).catch(() => fs.unlinkSync(tmpPath))) as string;
  return (await new Promise((res, rej) => {
    base64Img.base64(savePath, (err: Error, data: string) => {
      if (err) rej(err);
      res(data);
      fs.unlinkSync(tmpPath);
      fs.unlinkSync(savePath);
    });
  }).catch(_ => {
    fs.unlinkSync(tmpPath);
    fs.unlinkSync(savePath);
  })) as string;
};

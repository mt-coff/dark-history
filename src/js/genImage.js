import * as d3 from "d3";

const genSvg = (tmp, title, description) => {
  const body = d3.select(tmp);
  const width = Number(tmp.children[0].getAttribute("width"));
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

  return tmp;
};

const toBlob = base64 => {
  const bin = atob(base64.replace(/^.*,/, ""));
  const buffer = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  }
  // Blobを作成
  try {
    return new Blob([buffer.buffer], {
      type: "image/png"
    });
  } catch (e) {
    throw e;
  }
};

const svg2png = svg => {
  return new Promise((res, rej) => {
    const rect = svg.children[0];
    const width = rect.width.baseVal.value;
    const height = rect.height.baseVal.value;

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      res(canvas.toDataURL());
    };

    img.onerror = () => rej();

    const rawSvg = new XMLSerializer().serializeToString(svg);
    img.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(rawSvg);
  });
};

export default async (tmp, title, detail) => {
  const svg = genSvg(tmp, title, detail);
  return await svg2png(svg).then(toBlob);
};

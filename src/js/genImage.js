import * as d3 from "d3";

const genSvg = (tmp, title, description) => {
  const body = d3.select(tmp);

  body
    .append("foreignObject")
    .attr("x", 100)
    .attr("y", 40)
    .attr("fill", "#161925")
    .attr("font-size", 32)
    .attr("font-weight", "bold")
    .attr("width", 600)
    .attr("height", 180)
    .append("xhtml:div")
    .append("p")
    .attr("style", "text-align: center;")
    .html(title);
  body
    .append("foreignObject")
    .attr("x", 100)
    .attr("y", 100)
    .attr("fill", "#161925")
    .attr("font-size", 24)
    .attr("width", 600)
    .attr("height", 500)
    .attr("style", "word-break: break-all; white-space: pre-line;")
    .append("xhtml:div")
    .append("p")
    .attr(
      "style",
      "display:flex; justify-content: center; align-items: center; height: 300px;"
    )
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

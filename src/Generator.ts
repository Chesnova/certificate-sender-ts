import * as fs from "fs";
import * as path from "path";
import { createCanvas, loadImage, Image, registerFont } from "canvas";
import { ParticipantData } from "./types";

const OUTPUT_DIR = path.join(process.cwd(), "certificates");

export class CertificateGenerator {
  private getContext(image: Image) {
    const canvas = createCanvas(image.width, image.height);
    return {
      ctx: canvas.getContext("2d"),
      canvas: canvas,
    };
  }
  public async generate(
    data: ParticipantData,
    templatePath: string
  ): Promise<string> {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const image = await loadImage(templatePath);

    const { ctx, canvas } = this.getContext(image);

    ctx.drawImage(image, 0, 0, image.width, image.height);

    const fullName = `${data.firstName} ${data.lastName}`;

    ctx.font = "30px Arial";
    ctx.fillStyle = "#595959";
    ctx.textAlign = "left";

    const X_POSITION = 60;
    const Y_POSITION = 150;

    ctx.fillText(fullName, X_POSITION, Y_POSITION);

    const fileName = `${data.lastName}_${data.firstName}.png`;
    const outputPath = path.join(OUTPUT_DIR, fileName);

    return new Promise((resolve, reject) => {
      const out = fs.createWriteStream(outputPath);
      const stream = canvas.createPNGStream();

      stream.pipe(out);

      out.on("finish", () => resolve(outputPath));
      out.on("error", reject);
    });
  }
}

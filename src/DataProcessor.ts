import * as fs from "fs";
import parse from "csv-parser";
import { ParticipantData, ProgramConfig } from "./types";

export class DataProcessor {
  public async getParticipants(
    config: ProgramConfig
  ): Promise<ParticipantData[]> {
    const { csvFilePath } = config;
    const results: ParticipantData[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(csvFilePath)
        .pipe(parse({ headers: true }))
        .on("data", (data) => {
          if (data.firstName && data.lastName && data.email) {
            results.push(data as ParticipantData);
          } else {
            console.warn(
              `Skipping invalid participant data: ${JSON.stringify(data)}`
            );
          }
        })
        .on("end", () => {
          resolve(results);
        })
        .on("error", (error) => {
          reject(new Error(`Error reading CSV file: ${error.message}`));
        });
    });
  }
  public getEmailBody(config: ProgramConfig): string {
    try {
      return fs.readFileSync(config.emailTemplatePath, "utf-8");
    } catch (error) {
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      throw new Error(
        `Failed to read email template at ${config.emailTemplatePath}: ${errorMessage}`
      );
    }
  }
}

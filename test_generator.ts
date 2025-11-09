import { CertificateGenerator } from "./src/Generator";
import { ParticipantData } from "./src/types";

const TEST_PARTICIPANT: ParticipantData = {
  firstName: "Test",
  lastName: "Testovy",
  email: "test@example.com",
};

const TEMPLATE_PATH = "temp/certificate_template.png";

async function testGenerator() {
  console.log("--- Starting Generator Test ---");

  try {
    require("fs").accessSync(TEMPLATE_PATH);
  } catch (e) {
    console.error(
      `\nCRITICAL ERROR: Template file not found at ${TEMPLATE_PATH}.`
    );
    console.error(
      "Please ensure the template image is placed in the 'temp' folder."
    );
    return;
  }

  try {
    const generator = new CertificateGenerator();

    const outputPath = await generator.generate(
      TEST_PARTICIPANT,
      TEMPLATE_PATH
    );

    console.log("\n✅ SUCCESS!");
    console.log(
      `Certificate for ${TEST_PARTICIPANT.firstName} ${TEST_PARTICIPANT.lastName} generated successfully.`
    );
    console.log(`Saved to: ${outputPath}`);
    console.log("Please check the 'certificates' folder for the result.");
  } catch (error) {
    console.error("\n❌ FAILURE!");
    console.error(
      "An error occurred during generation:",
      (error as Error).message
    );
  }
}

testGenerator();

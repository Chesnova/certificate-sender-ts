//Describes the structure of one row from your CSV file
export interface ParticipantData {
  // First and Last Name to be inserted into the certificate
  firstName: string;
  lastName: string;
  // Email to send
  email: string;
}

//Describes the data needed to send one email
export interface EmailPayload {
  recipientEmail: string;
  subject: string;
  body: string; // The body of the email taken from your template file
  attachmentPath: string; // Path to the generated certificate file
}

//Describes the overall result of the work, which may contain a status
export interface ProcessResult {
  participant: string;
  status: "Success" | "Failure";
  errorMessage?: string; // If an error occurred
}

//Describes the input data for the entire program
export interface ProgramConfig {
  csvFilePath: string;
  templateImagePath: string; // PNG template
  emailTemplatePath: string; // File with the letter text
}

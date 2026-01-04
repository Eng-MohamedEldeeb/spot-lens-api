import { ILeadInputs } from "../../../db/interfaces";

export class EmailSchema {
  public static readonly confirmLead = ({
    clientName,
    email,
    phone,
    companyName,
    notes,
    clientType,
  }: ILeadInputs) => {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Booking Request Received</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
          }

          .email-wrapper {
            width: 100%;
            padding: 30px 0;
          }

          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 6px;
            overflow: hidden;
          }

          .header {
            background-color: #111827;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }

          .header h1 {
            margin: 0;
            font-size: 22px;
            letter-spacing: 0.5px;
          }

          .content {
            padding: 25px;
            color: #333333;
            font-size: 14px;
            line-height: 1.6;
          }

          .content p {
            margin: 0 0 15px;
          }

          .info-box {
            background-color: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            padding: 15px;
            margin-top: 20px;
          }

          .info-row {
            margin-bottom: 8px;
          }

          .info-label {
            font-weight: bold;
            color: #111827;
          }

          .footer {
            background-color: #f3f4f6;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #6b7280;
          }
        </style>
      </head>

      <body>
        <div class="email-wrapper">
          <div class="email-container">

            <!-- Header -->
            <div class="header">
              <h1>Booking Request Received</h1>
            </div>

            <!-- Content -->
            <div class="content">
              <p>Hello,</p>

              <p>
                Thank you for reaching out to us.  
                We have successfully received your booking request.
              </p>

              <p>
                Our team will review your details and contact you as soon as possible
                to confirm the session and discuss the next steps.
              </p>

              <!-- User Info -->
              <div class="info-box">
                <div class="info-row">
                  <span class="info-label">Name:</span> ${clientName}
                </div>
                ${
                  companyName &&
                  `
                 <div class="info-row">
                  <span class="info-label">Company Name:</span> ${companyName}
                </div>`
                }
                  <div class="info-row">
                  <span class="info-label">Session Type:</span> ${clientType}
                </div>
                
                <div class="info-row">
                  <span class="info-label">Phone:</span> ${phone}
                </div>
                <div class="info-row">
                  <span class="info-label">Email:</span> ${email}
                </div>
                ${
                  notes &&
                  `     <div class="info-row">
                  <span class="info-label">Notes:</span> ${notes}
                </div>`
                }
              </div>

              <p style="margin-top: 20px;">
                If you have any urgent questions, feel free to reply to this email.
              </p>

              <p>
                Best regards,<br />
                <strong>${process.env.APP_NAME} Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div class="footer">
              © 2026 ${process.env.APP_NAME}. All rights reserved.
            </div>

          </div>
        </div>
      </body>
      </html>
`;
  };
}

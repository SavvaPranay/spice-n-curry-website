const RESEND_API_KEY = "re_jBeeMLPi_FqGB7NerJm16EuuNBnxjSabM";

// UPDATE THESE VALUES
const TO_EMAIL = "owner@example.com"; // Replace with owner's email
const DEMO_URL = "https://spice-n-curry-website.vercel.app/";

const emailHtml = `
<!DOCTYPE html>
<html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <title>Spice N Curry - Your New Website</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f1f5f9;">

  <!-- Wrapper table -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f1f5f9;">
    <tr>
      <td align="center" style="padding: 40px 10px;">

        <!-- Main container -->
        <!--[if mso]>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" align="center">
        <tr>
        <td>
        <![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

          <!-- Header with gradient -->
          <tr>
            <td align="center" style="background: linear-gradient(135deg, #1e3a8a 0%, #0891b2 100%); padding: 40px 30px;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; font-family: Arial, Helvetica, sans-serif;">
                Spice N Curry
              </h1>
              <p style="margin: 10px 0 0; color: #fbbf24; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; font-family: Arial, Helvetica, sans-serif;">
                Your New Online Presence
              </p>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding: 35px 30px;">
              <p style="margin: 0 0 20px; color: #334155; font-size: 16px; line-height: 26px; font-family: Arial, Helvetica, sans-serif;">
                Hi there,
              </p>

              <p style="margin: 0 0 25px; color: #334155; font-size: 16px; line-height: 26px; font-family: Arial, Helvetica, sans-serif;">
                Your new <strong>Spice N Curry</strong> website is ready! We've built a modern, SEO-optimized site that will help customers find your Indian grocery store online.
              </p>

              <!-- CTA Button -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 25px 0;">
                <tr>
                  <td align="center">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${DEMO_URL}" style="height:50px;v-text-anchor:middle;width:220px;" arcsize="10%" strokecolor="#f59e0b" fillcolor="#f59e0b">
                    <w:anchorlock/>
                    <center style="color:#1e293b;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;">View Your Store Demo</center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="${DEMO_URL}" style="display: inline-block; padding: 14px 32px; background-color: #f59e0b; color: #1e293b; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 8px; font-family: Arial, Helvetica, sans-serif;">
                      View Your Store Demo &rarr;
                    </a>
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>

              <!-- Why This Matters section -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f0f9ff; border-radius: 8px; margin: 25px 0;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="margin: 0 0 15px; color: #1e3a8a; font-size: 18px; font-family: Arial, Helvetica, sans-serif;">
                      Why This Website Matters:
                    </h3>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                      <tr>
                        <td style="padding: 8px 0; color: #475569; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                          &#10003; <strong>SEO-Optimized</strong> &ndash; Customers searching "Indian grocery near me" will find YOU
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #475569; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                          &#10003; <strong>Reach More People</strong> &ndash; Attract customers from miles away
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #475569; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                          &#10003; <strong>Professional Look</strong> &ndash; Builds trust and credibility
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0; color: #475569; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                          &#10003; <strong>Affordable</strong> &ndash; Low cost, high return on investment
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin: 20px 0 0; color: #334155; font-size: 16px; line-height: 26px; font-family: Arial, Helvetica, sans-serif;">
                Take a look and let us know what you think!
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color: #1e293b; padding: 25px;">
              <p style="margin: 0 0 8px; color: #ffffff; font-size: 16px; font-weight: bold; font-family: Arial, Helvetica, sans-serif;">
                Kesava LLC
              </p>
              <p style="margin: 0 0 12px; color: #94a3b8; font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
                Building AI-Powered Digital Products
              </p>
              <a href="https://kesavallc.com" style="color: #fbbf24; text-decoration: none; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                www.kesavallc.com
              </a>
            </td>
          </tr>

        </table>
        <!--[if mso]>
        </td>
        </tr>
        </table>
        <![endif]-->

      </td>
    </tr>
  </table>

</body>
</html>
`;

async function sendEmail() {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": \`Bearer \${RESEND_API_KEY}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kesava LLC <onboarding@resend.dev>", // Use your verified domain
        to: [TO_EMAIL],
        subject: "Your Spice N Curry Website is Ready!",
        html: emailHtml,
        // Enable tracking
        tracking: {
          opens: true,
          clicks: true,
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Email sent successfully!");
      console.log("Email ID:", data.id);
      console.log("\\nTo check if the email was opened/clicked:");
      console.log(\`   Visit: https://resend.com/emails/\${data.id}\`);
    } else {
      console.error("Failed to send email:", data);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export async function POST() {
  void nodemailer;
  return Response.json({ status: "disabled" }, { status: 503 });
}

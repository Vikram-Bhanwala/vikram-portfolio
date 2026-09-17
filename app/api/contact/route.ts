import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/data";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    project?: string;
    message?: string;
    company_website?: string;
  };

  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const project = body.project?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please fill name, email, and message." }, { status: 400 });
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    return NextResponse.json(
      { ok: false, error: `Could not send automatically. Email me at ${site.email}` },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: Number(process.env.SMTP_PORT ?? 465) === 465,
    auth: { user, pass },
  });

  const subject = project
    ? `Portfolio brief: ${project} — ${name}`
    : `Portfolio brief from ${name}`;

  try {
    await transporter.sendMail({
      from: `"${site.name} Portfolio" <${user}>`,
      to: process.env.SMTP_TO ?? site.email,
      replyTo: `${name} <${email}>`,
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        project ? `Project: ${project}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${project ? `<p><strong>Project:</strong> ${escapeHtml(project)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });
  } catch (error) {
    console.error("SMTP send failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json(
      { ok: false, error: `Could not send automatically. Email me at ${site.email}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

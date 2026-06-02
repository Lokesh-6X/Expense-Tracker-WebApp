export function createWelcomeEmailTemplate(name, clientURL) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome to Expense Tracker</title>
</head>
<body style="margin:0;padding:0;background:#f4f7fc;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7fc;padding:30px 0;">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">

        <tr>
          <td align="center" style="background:linear-gradient(135deg,#4CAF50,#2E7D32);padding:40px;">
            <h1 style="color:white;margin:0;font-size:32px;">
              💰 Expense Tracker
            </h1>
            <p style="color:#E8F5E9;font-size:16px;margin-top:10px;">
              Take Control of Your Finances
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:40px;">

            <h2 style="color:#333;">
              Welcome, ${name}! 🎉
            </h2>

            <p style="font-size:16px;color:#555;line-height:1.8;">
              Thank you for joining Expense Tracker. You're now ready to
              manage your income, track expenses, and build better financial habits.
            </p>

            <div style="background:#f8f9fa;border-left:5px solid #4CAF50;padding:20px;margin:25px 0;border-radius:8px;">
              <h3 style="margin-top:0;color:#2E7D32;">
                🚀 What you can do:
              </h3>

              <ul style="color:#555;line-height:2;">
                <li>📊 Monitor daily expenses</li>
                <li>🏷️ Create expense categories</li>
                <li>📅 View monthly spending reports</li>
                <li>📈 Analyze financial trends</li>
                <li>💡 Improve your budgeting habits</li>
              </ul>
            </div>

            <div style="text-align:center;margin:35px 0;">
              <a href="${clientURL}"
                 style="background:#4CAF50;
                        color:white;
                        text-decoration:none;
                        padding:14px 30px;
                        border-radius:30px;
                        font-size:16px;
                        font-weight:bold;
                        display:inline-block;">
                Open Expense Tracker
              </a>
            </div>

            <p style="color:#555;line-height:1.8;">
              Every expense you track today helps you make smarter financial decisions tomorrow.
            </p>

            <p style="margin-top:30px;color:#333;">
              Best Regards,<br>
              <strong>Expense Tracker Team</strong>
            </p>

          </td>
        </tr>

        <tr>
          <td style="background:#f8f9fa;padding:20px;text-align:center;color:#777;font-size:13px;">
            <p>© 2026 Expense Tracker. All Rights Reserved.</p>
            <p>
              Track • Save • Grow
            </p>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;
}
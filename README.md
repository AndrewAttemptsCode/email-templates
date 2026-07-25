# Responsive Email Templates

A collection of responsive email templates built using MJML.

## Technologies

- MJML
- Handlebars
- HTML Email
- Node.js
- Git

## Workflow

MJML templates are compiled into HTML and personalised using Handlebars before delivery.

(MJML → HTML → Handlebars Personalisation → Email Delivery)

## Features

- Responsive layouts
- Handlebars personalization
- Transactional and marketing emails
- Gmail desktop tested
- Gmail Android tested
- Dark mode optimised
- Accessible alt text

## Email Template Overview

| Email Type              | MJML | Handlebars | Tested On                  |
|-------------------------|:----:|:----------:|----------------------------|
| Promotional             |  ✅  |     ✅     | Gmail Chrome + Android App    |
| Newsletter              |  ✅  |     ✅     | Gmail Chrome + Android App    |
| Welcome / Verification  |  ✅  |     ✅     | Gmail Chrome + Android App    |
| Password Reset          |  ✅  |     ✅     | Gmail Chrome + Android App    |
| Order Confirmation      |  ✅  |     ✅     | Gmail Chrome + Android App    |
| Booking Confirmation    |  ✅  |     ✅     | Gmail Chrome + Android App    |

## Testing
> Templates were tested using real email clients (Gmail in Chrome and Gmail Android App) rather than commercial rendering services.

Each template was tested for:

- Gmail Desktop (Chrome)
- Gmail Android App
- Responsive behaviour
- Dark mode compatibility
- Accessibility considerations
- Descriptive image alt text

## Promotional Email

[![promotional email preview](./src/assets/images/screenshots/promotional_preview.png)](./src/assets/images/screenshots/promotional_desktop.png)
_Click preview to view full desktop render_

Responsive promotional email featuring a large hero product image, personalised content, and a clear call-to-action. Built with MJML and Handlebars.

<div>
<a href="./src/assets/images/screenshots/promotional_desktop.png">🖥️ Desktop full screenshot</a><br>
<a href="./src/assets/images/screenshots/promotional_mobile.png">📱 Mobile full screenshot</a><br>
<a href="https://github.com/AndrewAttemptsCode/email-templates/blob/main/src/templates/promotional.mjml">📄 MJML Source</a><br>
<a href="https://github.com/AndrewAttemptsCode/email-templates/blob/main/dist/promotional.html">🌐 HTML Output</a>
</div>

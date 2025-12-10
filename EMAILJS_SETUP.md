# EmailJS Setup Instructions

Follow these steps to enable email functionality in your Contact Form:

## 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's free!)
3. Sign up with your email or Google account

## 2. Add Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or another provider
4. Connect your **uwmadcloud@gmail.com** account
5. Note down the **Service ID** (you'll need this)

## 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   ```
4. Set the **To Email** to: `uwmadcloud@gmail.com`
5. Customize the subject line (e.g., "New Contact Form Submission from {{from_name}}")
6. Save the template and note down the **Template ID**

## 4. Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (it looks like: `user_xxxxxxxxxxxxx`)
3. Copy this key

## 5. Update Your Code

Open `src/components/ContactForm.jsx` and replace these lines (around line 20):

```javascript
const serviceID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## 6. Test It Out!

1. Run `npm run dev` to start your development server
2. Go to the Contact page
3. Fill out the form and submit
4. Check your **uwmadcloud@gmail.com** inbox!

## Example Configuration

Your final code should look something like this:

```javascript
const serviceID = 'service_abc1234'
const templateID = 'template_xyz5678'
const publicKey = 'user_abcdef123456789'
```

## Troubleshooting

- **Error: "Failed to send"** → Check that your Service ID, Template ID, and Public Key are correct
- **No email received** → Check your Gmail spam folder
- **Gmail blocking** → Make sure you've authorized EmailJS in your Gmail account settings

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Sufficient for a student project!

---

After setup, commit your changes with the API keys (it's safe - EmailJS public keys are meant to be in client-side code).

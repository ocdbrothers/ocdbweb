# OCDbrothers Cleaning Enquiry

Create a Tally form using this title. Add a short note asking customers to share their area or postal code and to leave out full addresses, access codes and payment information. Explain that a preferred date is a request and the company will confirm any appointment separately.

| Field | Type | Requirement or options |
|---|---|---|
| Full name | Short text | Required |
| Email address | Email | Required |
| Phone / WhatsApp number | Phone | Optional |
| Preferred contact method | Single choice | Email, phone, WhatsApp |
| Service required | Dropdown | Residential Cleaning, Commercial Cleaning, Deep Cleaning, Move-In / Move-Out Cleaning, Kitchen Cleaning, Bathroom Cleaning, Floor Care, Window Cleaning, Eco-Friendly Cleaning, Dent Cleaning, Steam Cleaning, Not sure |
| Property type | Single choice | House, apartment/condo, office/commercial, other |
| Area or postal code | Short text | General area only |
| Approximate property size | Short text | Optional. Let customers specify their units. |
| Bedrooms | Number | Optional |
| Bathrooms | Number | Optional |
| Cleaning frequency | Single choice | One-time, weekly, every two weeks, monthly, not sure |
| Preferred date | Date | Optional. Label as a preference. |
| Cleaning requirements / additional details | Long text | Ask for priority rooms, surfaces and access considerations. |
| Consent to be contacted about this enquiry | Checkbox | Required, initially unchecked. Use “I agree to be contacted by OCDbrothers about this enquiry.” |

Publish with this success message.

> Thank you for contacting OCDbrothers. Your enquiry has been received. We’ll contact you to discuss your cleaning requirements. This is not a confirmed booking.

The [published enquiry form](https://tally.so/r/LD9eOz) is embedded in `contact.html`. If you replace the form, update the iframe URLs and the direct form link together. Verify the mobile and desktop iframe and the “Open enquiry form” link. Keep direct contact options visible. [Tally embed instructions](https://tally.so/help/embed-your-form)

## Private Google Sheets tracker

In the published form, open **Integrations → Google Sheets → Connect**. Authorize the business Google account and create or select **OCDbrothers — Cleaning Enquiries**. Keep the sheet restricted to authorised staff. Do not publish it or include its URL or credentials in site code. [Tally Google Sheets integration instructions](https://tally.so/help/google-sheets-integration)

Use the automatically supplied submission timestamp and submission ID as the first two tracker fields. Keep the form fields in their listed order. Add **Lead status**, **Follow-up date** and **Internal notes** to the right of the mapped fields. Set new enquiries to **New** during triage. Use the statuses **New**, **Contacted**, **Quote Sent**, **Booked**, **Completed**, **Closed**.

With the account owner's approval, submit a labelled test enquiry using test contact details. Confirm the success message and that exactly one row arrived with the expected fields. Remove the test data from both systems after verification. Google Sheets delivery still needs to be verified in the business account.


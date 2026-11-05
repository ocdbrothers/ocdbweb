# OCDbrothers Cleaning Company

Open `index.html` to preview the complete static site locally. The repository root contains the finished pages and assets. No package installation or build step is needed.

## Publish with GitHub Desktop and GitHub Pages

1. Extract the ZIP. In GitHub Desktop, create a repository or clone the intended repository. Copy the extracted files into its root so `index.html` and `.nojekyll` sit beside `README.md`. Keep unrelated existing files.
2. Update the production base URL as described below if your launch address differs from the reference site.
3. Commit the changes in GitHub Desktop and push. For a new repository, use **Publish repository** with the visibility your account and Pages setup require.
4. On GitHub, open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select `main` (or your publishing branch), choose `/(root)`, and save.
5. Open the published address from Pages settings. Check the contact page, a nested service page, the brochure and the mobile menu. [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Production URL and migration

Metadata uses the supplied reference base `https://ocdbrothers-thunder-bay.easycrane26.chatgpt.site`. If the production site moves, replace that literal base throughout the 16 public HTML pages, `sitemap.xml`, `robots.txt` and `llms.txt`. Use the full production base including the repository path for GitHub project Pages, with no trailing slash in the replacement. This updates canonical URLs, social previews, structured data and the discovery files together. On project Pages, robots directives apply from the host root, so submit the full project sitemap URL in Search Console separately. Browse the deployed sitemap URLs to verify they resolve.

The home route and all nine directory routes listed in the supplied previous export keep their paths, such as `/services/residential-cleaning/`. Dent Cleaning and Steam Cleaning use the same directory convention. See [migration map](MIGRATION.md) if moving to a new base. Keep links relative within the site. No custom domain configuration is included.

## Enquiry integration

Email, phone and WhatsApp are available now. The contact page uses the selected service to prepare a message. On desktop, the standard WhatsApp link hands off to WhatsApp Web or the app. WhatsApp may require sign-in or installation.

The contact page embeds the published [Tally enquiry form](https://tally.so/r/LD9eOz) and includes a direct link to it. The private Google Sheets connection is managed in Tally. See [the enquiry setup guide](ENQUIRY-SETUP.md).

## Brochure

Download `assets/downloads/ocdbrothers-cleaning-brochure.pdf`. Edit `brochure/index.html` and keep the adjacent QR artwork and shared image paths. To regenerate the PDF, open the source in Chromium or Edge, use A4, no margins, 100% scale, background graphics on and browser headers/footers off. Confirm the output contains two pages.

Supplied photography by Tima Miroshnichenko. Photos illustrate cleaning activities.


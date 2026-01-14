---
description: Deploy the React application to Render
---

# Deploy to Render

Since you have already pushed your code to GitHub, follow these steps to deploy your site on Render:

1.  **Log in to Render**
    *   Go to [dashboard.render.com](https://dashboard.render.com/) and log in.

2.  **Create a New Static Site**
    *   Click the **"New +"** button at the top right.
    *   Select **"Static Site"**.

3.  **Connect Your Repository**
    *   You should see your repository `mukvidyavita-fe` in the list (since you connected GitHub).
    *   Click **"Connect"** next to `mukvidyavita-fe`.

4.  **Configure Settings**
    *   **Name**: Enter a name for your site (e.g., `mukvidyavita`).
    *   **Branch**: `main` (default).
    *   **Root Directory**: Leave empty (default).
    *   **Build Command**: `npm run build`
        *   (Render usually detects `npm install; npm run build` or `yarn; yarn build`. `npm run build` is sufficient if it auto-installs).
    *   **Publish Directory**: `dist`
        *   (Vite builds to `dist` by default).

5.  **Deploy**
    *   Click **"Create Static Site"**.

6.  **Fixing 404 on Refresh (SPA Support)**
    *   *Important*: Since this is a React Single Page Application (SPA), you need to tell Render to redirect all requests to `index.html`.
    *   Go to the **Redirects/Rewrites** tab in your dashboard for this service.
    *   Click **"Add Rule"**.
    *   **Source**: `/*`
    *   **Destination**: `/index.html`
    *   **Action**: `Rewrite`
    *   Click **"Save Changes"**.

Your site should now be live!

# GameVault website

A responsive static gaming homepage for GitHub Pages.

## Publish on GitHub Pages

1. Download and extract `gamevault-site.zip`.
2. Open your new GitHub repository.
3. Choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, and `script.js` (upload the files, not the ZIP).
5. Commit the changes to the `main` branch.
6. Go to **Settings → Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select branch `main` and folder `/ (root)`, then save.
9. Wait for GitHub Pages to publish the site.

## Important about the game

The website's Play button intentionally does not point to `http://localhost:8000/`, because that address only works on the computer running the local server. It also cannot run `Launch-Local.cmd` for visitors.

When a compatible game host is available, edit `script.js` and set `HOSTED_GAME_URL` to the public game URL. The game may require separate hosting for its runtime and large assets; GitHub Pages hosts the static website only.

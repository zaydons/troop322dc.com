# troop322dc.com

The website for Troop 322, Dickson City, PA. It's a static site built with
[Jekyll](https://jekyllrb.com/) and hosted free on GitHub Pages.

**You don't need to install anything to edit the site.** Everything below can
be done in a web browser on github.com.

## Editing a page

1. Open the file for the page you want to change:

   | Page on the site | File to edit |
   |---|---|
   | Home page article ("About Us") | `_home_articles/about-us.md` |
   | History | `history.md` |
   | Links | `links.md` |
   | Top menu | `_data/navigation.yml` |
   | Footer contact email / form link, site title, tagline | `_config.yml` |

2. Click the **pencil icon** (Edit this file) at the top right of the file.
3. Make your changes. The part between the two `---` lines at the top is
   settings (like `title:`). Leave the `---` lines in place.
4. Click **Commit changes…**, write a short note about what you changed, and
   click **Commit changes**.
5. About a minute later the change is live. You can watch progress on the
   repo's **Actions** tab (a green check means it's done).

### Writing text

Pages are written in [Markdown](https://www.markdownguide.org/basic-syntax/):

```markdown
A blank line starts a new paragraph.
A single line break stays a line break.

## A heading

**bold text** and *italic text*

- a bulleted list
- another item

[link text](https://example.com)
```

### Adding a picture

1. Open the `assets/images` folder, click **Add file → Upload files**, and
   upload the picture. Resize it first so it's no wider than about 1200 pixels.
2. In the page, write: `![Description of the picture](/assets/images/your-file.jpg)`

Before posting photos of scouts, follow the troop's and Scouting America's
youth-protection guidelines: get parent permission, and use first names only.

## Adding a new page

1. On the repo's main page, click **Add file → Create new file**.
2. Name it with lowercase letters and dashes, ending in `.md`. For example,
   `calendar.md` becomes `troop322dc.com/calendar/`.
3. Start the file with:

   ```markdown
   ---
   title: Calendar
   ---

   Your text here.
   ```

4. Commit it. To put it in the top menu, add it to `_data/navigation.yml`:

   ```yaml
   - title: Calendar
     url: /calendar/
   ```

### Home page articles

The home page shows the files in `_home_articles`. The one with `order: 1`
appears next to the photo, and up to three more appear in columns underneath.
To add one, create a new file in that folder with a `title:` and an `order:`
(2, 3 or 4). Each one also gets its own page, e.g. `/about-us/`.

## How deployment works

There's nothing to deploy by hand. GitHub Pages watches the `main` branch.
Every commit to `main` rebuilds the site and publishes it to
https://troop322dc.com within a minute or two.

To try out a bigger change before it goes live, create a branch, make your
edits there, and open a pull request. Only merging into `main` publishes it.

## Previewing on your own computer (optional)

This needs [Docker Desktop](https://www.docker.com/products/docker-desktop/).
From this folder, run:

```bash
docker run --rm -p 4000:4000 -v "$PWD":/site -w /site ruby:3.3 bash -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

Then open http://localhost:4000.

## Never commit

Raw WordPress backups (`wp-config.php`, `.sql` dumps, `.tgz`/`.zip` archives)
contain passwords and personal data. `.gitignore` blocks them, but don't copy
them into this folder.

## Credits

Design adapted from the "Scout Troop" WordPress theme by HandsomeWeb, LLC.
Marcellus font under the SIL Open Font License (`assets/fonts/OFL.txt`).

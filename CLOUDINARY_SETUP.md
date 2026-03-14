# Cloudinary Setup Guide — Horizon 2026

## What is Cloudinary?

Cloudinary is a cloud-based image/video management service. We use its **free tier** to host event posters and gallery images for the Horizon 2026 website.

**Free tier includes:**
- 25 GB storage
- 25 GB bandwidth/month
- On-the-fly image transformations (resize, format, quality)

---

## Step 1: Create a Cloudinary Account

1. Go to [cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
2. Sign up with email or Google
3. After signup, you'll land on the **Dashboard**
4. Note your **Cloud Name** — it looks like `dxxxxxxxx` (you'll need this)

---

## Step 2: Create Image Folders

1. Go to **Media Library** (left sidebar)
2. Click **Create Folder** → name it `horizon2026`
3. Inside `horizon2026`, create subfolders for organization:
   - `horizon2026/posters` — event poster images for cards
   - `horizon2026/gallery` — gallery photos per event

---

## Step 3: Upload Images

1. Open the folder you want to upload to (e.g., `horizon2026/posters`)
2. Click **Upload** button (top right)
3. Drag & drop your images or browse to select
4. Cloudinary will auto-generate a **Public ID** from the filename
5. **Tip:** Use descriptive filenames like `code-relay-poster.jpg`, `treasure-hunt-1.jpg`

---

## Step 4: Update Your Cloud Name in the Code

Open `js/events-data.js` and update **line 16**:

```diff
- const CMS_BASE = `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload`;
+ const CMS_BASE = `https://res.cloudinary.com/dxxxxxxxx/image/upload`;
```

Replace `dxxxxxxxx` with your actual Cloud Name from the Dashboard.

---

## Step 5: Update Image Paths

Each event in `events-data.js` has an `image` field and a `gallery` array. Update them to match your uploaded filenames:

```javascript
// Event poster
image: `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/posters/code-relay-poster.jpg`,

// Gallery images
gallery: [
  `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/code-relay-1.jpg`,
  `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/code-relay-2.jpg`,
],
```

### URL Format Breakdown

```
https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/f_auto,q_auto/v1/horizon2026/filename.jpg
│                          │                       │              │  │
│                          │                       │              │  └── Your file path
│                          │                       │              └── Version (always v1)
│                          │                       └── Transformations
│                          └── Your cloud name
└── Cloudinary base URL
```

### Useful Transformations

| Transform | What it does |
|-----------|-------------|
| `f_auto` | Auto-picks best format (WebP, AVIF, etc.) |
| `q_auto` | Auto-adjusts quality for fast loading |
| `w_800` | Resizes to 800px wide |
| `c_fill,w_400,h_300` | Crops to exactly 400×300px |
| `e_blur:200` | Adds blur effect (for placeholders) |

**Example with resize:**
```
${CMS_BASE}/f_auto,q_auto,w_800/v1/horizon2026/posters/code-relay.jpg
```

---

## Step 6: Verify

1. Run `npm run dev`
2. Open the **Events** page — check that posters load
3. Open the **Gallery** page — check that gallery images appear
4. Open any **Event info** page — check the event image loads

If images don't load, check:
- Your Cloud Name is correct
- The file path matches exactly (case-sensitive)
- The image is in the right Cloudinary folder

---

## Quick Reference

| Item | Value |
|------|-------|
| Dashboard | [cloudinary.com/console](https://cloudinary.com/console) |
| Media Library | [cloudinary.com/console/media_library](https://cloudinary.com/console/media_library) |
| File to edit | `js/events-data.js` line 16 |
| URL pattern | `https://res.cloudinary.com/CLOUD_NAME/image/upload/f_auto,q_auto/v1/horizon2026/FILE` |

# Contribution Guide for Adding Resources

## Table of Contents

- [Contribution Guide for Adding Resources](#contribution-guide-for-adding-resources)
  - [Table of Contents](#table-of-contents)
  - [Fork the Repository](#fork-the-repository)
  - [File Path Where the Resources are Stored](#file-path-where-the-resources-are-stored)
  - [Steps to Gather Resource Information](#steps-to-gather-resource-information)
    - [1. **Use Desktop/Laptop**](#1-use-desktoplaptop)
    - [2. **Gather Title**](#2-gather-title)
    - [3. **Get the URL**](#3-get-the-url)
    - [4. **Get the Description**](#4-get-the-description)
    - [5. **Find the Icon**](#5-find-the-icon)
    - [6. **Update `lastUpdated`**](#6-update-lastupdated)
  - [Notes on Icon Submission](#notes-on-icon-submission)
  - [Improving Existing Resources](#improving-existing-resources)
    - [Example Submission](#example-submission)
  - [Submitting Your Contribution](#submitting-your-contribution)
    - [1. **Locate and Edit `resources.ts`**](#1-locate-and-edit-resourcests)
    - [2. **Commit Your Changes**](#2-commit-your-changes)
    - [3. **Push to Your Fork**](#3-push-to-your-fork)
    - [4. **Create a Pull Request**](#4-create-a-pull-request)

## Fork the Repository

1. **Fork the Repository**  
   Visit the project repository and click the **Fork** button to create a personal copy of the repository. [GitHub Docs on Forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

2. **Clone Your Fork**  
   Clone your fork to your local machine:

   ```bash
   git clone https://github.com/bryan308/ca-resources.git
   ```

3. **Create a New Branch**  
   Use a descriptive branch name for your contribution:

   ```bash
   git checkout -b update/add-resource
   ```

---

## File Path Where the Resources are Stored

The resources are stored in the `resources.ts` file located at:

```txt
/src/data/sources/resources.ts
```

---

## Steps to Gather Resource Information

### 1. **Use Desktop/Laptop**

- It is recommended to use a desktop or laptop for ease of gathering information by inspecting website elements. Open the website you want to add.

### 2. **Gather Title**

- Using developer tools, inspect the website’s `<title>` element inside the `<head>` tag and copy the text to use as the resource title.

  ```typescript
    page: {
      title: "", // Title of the resource
      thumbnail: "", // Relative path to the thumbnail image
      subtitle: "", // Subtitle of the resource
      lastUpdated: "", // Last updated date of the resource
      resourcesList: [
        {
          title: "", // Title of the resources category
          links: [
            {
              title: "", // Title of the specific link
              url: "",
              description: "",
              iconPath: "",
            }
          ]
        }
      ]
    }
  ```

### 3. **Get the URL**

- Copy the main website URL, if the resource is a subpage, it's okay to use it.

### 4. **Get the Description**

- Look for the `<meta name="description">` tag in the `<head>` section. Copy the `content` attribute's value as the description.

### 5. **Find the Icon**

Avoid using the `favicon.ico`. Instead, search for high-resolution icons. If there are no icons available, use the `favicon.ico` file. If there are multiple icons available, use the one that best represents the resource. Some resources don't have an icon; you can leave it blank. Store the icon in the relevant folder inside `public/resources/`.

```txt
/public/resources/
  ├─ colors/
  ├─ icons/
  ├─ inspirations/
  ├─ learnwebdev/
  ├─ mockups/
  ├─ stock-photos/
  └─ typography/
```

### 6. **Update `lastUpdated`**

Update the `lastUpdated` field in the resource's `page` object to the current date you add the resource.

---

## Notes on Icon Submission

- **Clarity:** Ensure the icon is high-resolution and not blurry.
- **Size:** Prefer standard sizes like 64x64px or 128x128px.
- **Format:** Supported formats are `.png`, `.svg`, and `.jpg`.

## Improving Existing Resources

If you notice any outdated or incorrect information in the existing resources, or if you have suggestions for improving them, please feel free to make those updates! You can:

1. **Update Existing Entries**  
   Edit the `resources.ts` file to correct or enhance existing resources with better information or improved descriptions.

2. **Provide Feedback**  
   If you have suggestions for improving resource descriptions or other details, please include them in your pull request comments.

Your contributions help keep our resource list accurate and useful for everyone!

### Example Submission

```typescript
{
  title: "MDN Web Docs",
  url: "https://developer.mozilla.org/en-US/",
  description: "Provides information about Open Web technologies including HTML, CSS, and APIs.",
  iconPath: "/resources/learnwebdev/mdn.png"
}
```

---

## Submitting Your Contribution

### 1. **Locate and Edit `resources.ts`**

- Navigate to the `resources.ts` file, located at:

  ```txt
    /src/data/sources/resources.ts
  ```

- This file is where you'll add the information for your new resource.

### 2. **Commit Your Changes**  

Stage and commit your changes:

```bash
git add .
git commit -m "Add new resource: [Resource Name]"
```

### 3. **Push to Your Fork**  

Push the changes to your forked repository:

```bash
git push origin resource/website-name
```

### 4. **Create a Pull Request**

Create a pull request on the original repository, providing a description of the resource and its benefits. [GitHub Docs on Pull Requests](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

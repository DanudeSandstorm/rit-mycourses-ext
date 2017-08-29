# RIT myCourses Extension

An extension for RIT's myCourses website which fixes/improves various things:

#### Login Page
- Autofocus on login button
- Autologin option

#### General
- Only shows currently enrolled courses under "select a course" drop down menu

#### Home Page
- Removes unnecessary sections and content

#### Course Pages
- Squashes the banner to take up less room on each page

#### Content Page
- Option to open links in pop out window (instead of redirecting the current page)
- Content Menu's position is fixed (won't scroll with page)

#### Popout content
- Fixed popouts not resizing to window size
- Removes the header in popout content allowing for more content to be displayed on screen

#### Discussions
- Hides quoted content in posts

#### File Downloader
- https://github.com/Speenah/rit-mycourses-file-downloader

### Chrome
[Chrome Store](https://chrome.google.com/webstore/detail/mycourses-mod-pack/ngplfhblfejgjnaapcajgiccnapfhchi)

[How to side-load the extension](https://developer.chrome.com/extensions/getstarted#unpacked)
\*Use the bin/chrome directory for the unpacked extension target (see development).

### Development
Any shared resources between browsers are kept within the shared folder.
When a function in a shared script file "name" requires browser specific implementation,
that function is implemented within the file "_name":

#####Example
```
├── chrome
│	├── scripts
│	│	├── _base.js
│
└── shared
    ├── scripts
    │	├── base.js
```

####Running
After making changes, use the pack.sh script.
The first argument is the browser:
```bash
$ ./pack.sh chrome
```

The script combines and places both the shared files
and browser specific files within the corresponding bin/[browser].

# RIT myCourses Extension

An extension for RIT's myCourses website which fixes/improves various things:

#### Login Page
- Autofocus on login button
- Autologin option

#### General
- Removes 2px between banner and header
- Only shows currently enrolled courses under "select a course" drop down menu

#### Home Page
- Removes unnecessary sections and content

#### Course Pages
- Squashes the banner to take up less room on each page

#### Content Page
- Option to open links in pop out window (instead of redirecting the current page)

#### Popout content
- Fixed popouts not resizing to window size 
- Removes the header in popout content allowing for more content to be displayed on screen

#### Discussions
- Hides quoted content in posts


### Chrome
[Chrome Store](https://chrome.google.com/webstore/detail/mycourses-mod-pack/ngplfhblfejgjnaapcajgiccnapfhchi)

[How to side-load the extension](https://developer.chrome.com/extensions/getstarted#unpacked)


### Development
Any shared resources between browsers are kept within the shared folder.  
When working on shared, use the pack.sh script.  
The first argument is the browser (chrome or firefox):
```bash
$./pack.sh chrome
```

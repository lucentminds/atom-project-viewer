# Project Viewer


Based on https://github.com/jccguimaraes/atom-project-viewer v0.2.34. At about
v0.3.2 the project viewer stopped using the project-viewer.json file that I
created a project watcher/builder around so I created this project from the last
working version I'm sure was working. This is for my own private use so I do NOT
intend on updating. Thanks to jccguimaraes for creating this as it's really 
useful.


### Settings

Settings | Type | Description | Default
---------|------|-------------|--------
`startUp` | `boolean` | Defines if project viewer should be opened from the start of Atom. | false
`openBuffers` | `boolean` | Every time you open a file that's relative to any of the paths of the project, it will be buffered until you close it manually. Every time you switch projects, they will be restored (setting to **true** will **close** none project files!) | false
`foldersCollapsed` | `boolean` | Defines if folders should always be collapsed when switching/opening the project. | false
`onlyGroupColors` | `boolean` | If set to true, will only color the group and not the projects. | false

### File Configuration

A JSON file that contains an array of groups and projects (if not present, it will be created automatically).

```js
{
    "groups": [],
    "projects": []
}
```

##### Defining a group at this moment is as simple as:

```js
{
    "name": "my-group",
    "icon": "icon-octicons",
    "expanded": false,
    "color": "#fafafa"
}
```
Setting | Type | Require | Description
--------|------|---------|------------
`name` | String | true | The name of the group.
`icon` | String | optional | An icon showing next to the group name. As listed from Atom's octicons set.
`expanded` | Boolean | optional | Sets if group should be expanded from the start.
`color` | String | optional | Sets the group and it's child project color (only accepts hex strings).

##### Defining a project is a little bit more complex:

```js
{
	"name": "my-project",
    "group": "my-group",
	"paths": {
		"absolute-path-to-folder-1": "a-stringified-object-with-folder-states",
		"absolute-path-to-folder-2": "a-stringified-object-with-folder-states"
	},
	"buffers": [
		"absolute-path-file"
	]
}
```

Defining a project at this moment is a little bit more complex:

Setting | Type | Require | Description
--------|------|---------|------------
`name` | String | true | The name of the project.
`group` | String | optional | The name of the group which this project belongs to. If none, it will be grouped in the ungrouped projects.
`paths` | Object | optional | An object which keys are the project folders to show in the *tree view* and their values are the state of it's children folders (expanded or collapsed).
`buffers` | Array | optional | An array of files that were opened before closing the project/Atom or switching to another project.

### Features

This is a resume of all the features of the package

* Context menu for adding, removing and editing groups and projects.
* Icons in groups.
* Set custom color for a group and it's child projects.
* Expanding and collapsing groups.
* Group ungrouped projects. *(not yet)*.
* Keep opened files when switching between projects. *(currently buggy)*.
* Keep state of project folders.
* Drag projects from a group to another one.


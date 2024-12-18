# ISIDEPU

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development Environment Setup
This section lists the steps to set up your computer to update the website and test changes locally.

1. Install [git](https://git-scm.com/downloads). This is a version control tool. It helps save your website at checkpoints you can return to later if you break something drastically. Look up an essentials tutorial online for git. It also helps push your changes to GitHub.

2. Install [nodejs](https://nodejs.org/en). This allows your local system to execute javascript. The website is "compiled" from the forest of files you see into a handful few using a framework written in javascript, So, we need nodejs to use the framework.

You can ascertain the download succeeded by running `node -v` and `npm -v` in the terminal. Both commands should return relevant version numbers.

3. Install [angular](https://angular.dev/tools/cli/setup-local). This is the framework mentioned above. You need to run the command under the section called Install the Angular CLI.

4. Clone this repository. Launch the terminal in the folder where you want to keep this codebase and run `git clone https://github.com/epuisid/ISID-EPU`. This will create a local copy of the code.

5. Go into the cloned repository's folder in the terminal and run `npm i`. This installs the dependencies needed for the framework (angular) and the website. 

## Development server

This is how you test your changes locally.

1. Open up a terminal in the folder containing this README file.
2. Run `ng serve` or `ng s` for a dev server.
3. Open `http://localhost:4200/` in any browser to view the website.
The application will automatically reload if you change any of the source files.

## Deployment (Publishing Changes to the Server)
1. To generate files for deployment, open up a terminal in the folder containing this README file and run
`bash deploy.sh https://www.isid.ac.in/~epu`, replacing `https://www.isid.ac.in/~epu` with
the URL where the site is to be deployed, if it's different.
2. Once this command succeeds, copy the files and folders from the folder called `deploy` to the folder called
`public_html` in the server.
3. A modification to the server to redirect any URLs not found to the 404.html page for our site specifically is necessary. This is done for ISID's server. If it's not working anymore, contact server admins, or look it up, or contact Hardik Rajpal.
4. Use `rm *.js *.css` in the public_html folder to remove old scripts and styles. 
5. Use `mput deploy/*` to move files to said folder.
6. Use `put -r deploy/assets` to move leftover recursively. 

# Updates
## To Existing pages
1. Updates to existing pages such involving text and images can be accomplished by navigating to the 
relevant file in the `src/data` folder and updating the content in the JSON dictionaries.
2. Note that any new images are to be placed in the assets folder (or a subdirectory) and its path
used in the appropriate data file.
### Components
#### Paraspec
Paraspec components are meant to render paragraphs, images, lists and links. The only allowed combinations of fields being used at once are:
- text
- list
- image
- text and image
- list and image
- internalLink
The reverse field (set to true or false) handles the layout of images when they are together with a list or a text.

Ex: The following paraspec will fail to render the list because list and text together are not allowed:
```
{
    text:`Sample text`,
    list:[
        `item 1`,
        `item 2`
    ]
}
``` 
Instead, use the following code:
```
{
    text:`Sample text`
},
{
    list:[
        `item 1`,
        `item 2`
    ]
}
```
### Navigation
There are two aspects to navigation
1. Telling the framework that you want a particular URL to route to a particular page
2. Writing links in other pages that be used to route that URL.

#### Navigation Bar
The `NavBarRoutes` in `data/navigation.ts` handle 1 and 2 the moment you update them. They are used by the function `getAllRoutes` to 
setup the URL to page mapping by the framework and used by the
navbar component to render the navigation bar.

The `footerRoutes` work similar, displaying the routes in the footer.

The `personRoutes` list routes for individual faculty pages.

The `otherRoutes` are dicussed later.

These routes are lists of a an object type `routeSpec` Its fields 
are described below:

```
{
    label:`The label displayed when this route is rendered`,
    route:`The path at which this page is shown`,
    children:[
        //other routeSpec objects. When children are given,
        //the component field is not used. And the button
        //in the navbar displays a dropdown of the routes
        //corresponding to the children.
    ],
    component:TheComponentWhichRendersThePage
    //this component field is not used
    //if children are supplied.
}

```
Note that you can have routeSpecs where neither `children` nor 
`component` are specified if the `route` is an external link, 
ex:

```
{
    label:`Discussion Papers`,
    route:`https://ideas.repec.org/s/alo/isipdp.html`
}
```
The `getAllRoutes` function also uses routes called `miscRoutes`;
these are from the `miscroutes.ts` file. These are routes not mentioned
in the `NavBarRoutes`, `footerRoutes`, `otherRoutes` and `personRoutes`.
That means that only (1) has been done for these routes; they exist
in the website but are not made visible to the client anywhere.

To use these routes (or any of the other routes), we can either

1. (Recommended) Use an anchor tag in the text field of a paraSpec (or some other
component where text is allowed):
```
You can find the past phd students here:
<a href="misc/pastphdstudents">
    Past Phd Students
</a>
```
Note that `misc/pastphdstudents` is the value of the `route:` field the routeSpec
that establishes that `misc/pastphdstudents` must display the `PastPhdStudentsComponent`
in the `miscroutes.ts` file.

2. In a paraSpec, we can use the `internalLink` field:
```
{
    text:`You can find the past phd students here:`
},
{
    internalLink:miscRoutes['pastPhdStudents']
}
```
Here, we have passed the entire `routeSpec` related to the past PhD students page 
to the internalLink field. We could also duplicate information (thought this is
not preferred as the updates will have to be more carefully done):
```
{
    text:`You can find the past phd students here:`
},
{
    internalLink:{
        route:'misc/pastphdstudents',
        component:PastPhdStudentsComponent,
        label:'Past Phd Students'
    }
}
```
## New Pages
The site also allows you to create new pages
without going into the intricacies of Angular and HTML.

You simply have to add a new entry to `othersData`, located in
the `otherspage.ts` file.
Have a look at the page at `http://localhost:4200/misc/others/demo` to 
see how this will be rendered.

For example, say I want to add a new page discussing something about
COVID-19. This is what the othersData dictionary will look like:
```
export const othersData:othersSpec = {
    demo:{
        ...
        //pre existing code for demo page
    },
    //the `key` = covid19 makes sure that
    //the path misc/others/covid19 routes to
    //a page where the the data listed below is
    //displayed
    covid19:{
        title:`New Page about COVID-19`,
        groups:[
            //groups conveying info about COVID-19
            //look at the groups in the demo page
            //to understand how they are used
            //and rendered.
        ]
    }
}

```

## Git commands
### When you make changes:
1. `git add -A`
2. `git commit -m "message describing changes"`
3. `git push origin master`

### When someone else makes changes and has pushed them
If all your changes are committed and pushed, just do:
1. `git pull origin master`
Otherwise, first do the three commands given above, then this.
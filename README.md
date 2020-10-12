# **Description**

Taco Party is a resource to be used when the user is searching for taco recipe ideas. Using an API key, the user is able to either generate a random recipe, or view a list of recipes coupled with nutritional information. The user is also able to look at a selection of salsa and drink recipes. 


<strong>Screenshot of site:</strong> <img src="/assets/siteSS.png">
<strong>Link to site:</strong> https://lauracole1900.github.io/tacoParty/

# **Installation**
N/A

# **Usage**

When the user first loads the site, they will be greeted with an animation that covers the screen. To enter, simply click on the animation. The user is then able to either generate a random taco/salsa recipe using the given buttons, or the user can browse various recipes by using the navigation bar. Within the 'Taco' and 'Salsa' pages, the user is able to click on an image to receive a full recipe along with images of each ingredient. On the page labeled 'Beverages', the user is able to either scroll through a collection of alcoholic drink recipes, or they can search for a drink or ingredient. 

# **Technologies Used**

In this site: HTML, CSS, JavaScript, third-party APIs, and the Materialize framework were used.
<br>
HTML was used to design the basic layout for the page, and provided div tags with appropriate ID's and classes as holding places for content population.
<br>
CSS was used to style all of the elements contained within the site, as well as add background images.
<br>
JavaScript was used to populate all of the content on the page using two different third-party APIs. JavaScript was also used to define the functions that will randomly generate a taco or salsa recipe depending on what button is clicked. 
<br>
Materialize was used as a substitute for BootStrap, and helped us lay out the website, as well as gave code snippets for things like the navigation bar. 

# **Problems Faced**

* The original API we had decided on using was not built for the API calls we would be using.
    * After we were able to find an API that we could use, we struggled with actually defining the call correctly.

* We were working with an unfamiliar framework, and therefore had to learn new ways to code our site to fit that frammework. 

* The CocktailDB API listed its ingredients under individual keys instead of as an array, which required us to grab each ingredient line-by-line, and limited our ability to repurpose the code through loops and other functions.

* The differences between CocktailDB and Edamum’s ways of organizing information inhibited our ability to intertwine the two within the same looping systems, but this challenge also enabled us to separate alcoholic and non-alcoholic content in a way that maintains a brand design for all ages.

* We were limited with our API test key in only being able to pull a finite number of food or drink items, which capped our ability to design beyond the number nine. 

# **Credits**

Brendon Hart
Laura Cole
Andy Greenhaw
Anthony Miletello
Jean Melendez
Charlie Howard

# **License**

Business Source License Agreement (Materialize)
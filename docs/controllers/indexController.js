//Navigation Bar Code---------------------------------------------------------------
//Get all navigation bar items separately
var homeNavigationBtn = document.getElementById("navigation-home");
var projectNavigationBtn = document.getElementById("navigation-project");
var aboutNavigationBtn = document.getElementById("navigation-about");

//Get every section label
var homeSectionLabel = document.getElementById("home-section");
var homeScreenPosition = homeSectionLabel.getBoundingClientRect();

var projectSectionLabel = document.getElementById("project-section");
var projectScreenPosition = projectSectionLabel.getBoundingClientRect();

var aboutSectionLabel = document.getElementById("about-section");
var aboutScreenPosition = aboutSectionLabel.getBoundingClientRect();

/* Update navigation bar items based on scroll position
*/
function updateNavigationItems() {

    var scrollPosition = window.scrollY;

    if(scrollPosition >= aboutScreenPosition.top - 100)
    {
        homeNavigationBtn.classList.remove("active");
        projectNavigationBtn.classList.remove("active");
        aboutNavigationBtn.classList.add("active");    
    }
    else if(scrollPosition >= projectScreenPosition.top - 50)
    {
        homeNavigationBtn.classList.remove("active");
        projectNavigationBtn.classList.add("active");
        aboutNavigationBtn.classList.remove("active");    
    }
    else if(scrollPosition >= homeScreenPosition.top - 50)
    {
        homeNavigationBtn.classList.add("active");
        projectNavigationBtn.classList.remove("active");
        aboutNavigationBtn.classList.remove("active");
    } 
    
    
}

//Add window scroll event to update navigation items
window.addEventListener("scroll", function() {
    updateNavigationItems();
});



//Image Carousel Code--------------------------------------------------------------------

var currentPathfindingImageIndex = 0;

//Pathfinding Visualizer Images
var pathfindingVisualizerImages = document.getElementsByClassName("pathfinding-image");

//Pathfinding Visualizer Thumbnails
var pathfindingVisualizerThumbnails = document.getElementsByClassName("pathfinding-thumbnail");

//Pathfinding Visualizer Image Caption
var pathfindingVisualizerCaption = document.getElementById("pathfinding-image-caption");

function showPathfindingImage(num)
{
    for(i = 0; i < pathfindingVisualizerImages.length; i++)
    {
        //Hide all main images in carousel
        pathfindingVisualizerImages[i].classList.remove("show-image");
    }

    //Show main image in carousel corresponding to num
    pathfindingVisualizerImages[num].classList.add("show-image");

    for(i = 0; i < pathfindingVisualizerThumbnails.length; i++)
    {
        //Remove active class from all thumbnails
        pathfindingVisualizerThumbnails[i].classList.remove("active-thumbnail");
    }

    //Add active class for thumbnail that corresponds to num
    pathfindingVisualizerThumbnails[num].classList.add("active-thumbnail");

    //Update currentImageIndex
    currentPathfindingImageIndex = num;

    //Add caption
    pathfindingVisualizerCaption.innerHTML = pathfindingVisualizerImages[num].alt;
}

function incrementPathfindingImage(num)
{
    if(currentPathfindingImageIndex + num < 0)
    {
        currentPathfindingImageIndex = pathfindingVisualizerImages.length - 1;
    }
    else
    {
    currentPathfindingImageIndex = (currentPathfindingImageIndex + num) % (pathfindingVisualizerImages.length);
    }
    
    showPathfindingImage(currentPathfindingImageIndex);
}


var currentTetrisImageIndex = 0;

//Tetris Images
var tetrisImages = document.getElementsByClassName("tetris-image");

//Tetris Thumbnails
var tetrisThumbnails = document.getElementsByClassName("tetris-thumbnail");

//Tetris Image Caption
var tetrisImageCaption = document.getElementById("tetris-image-caption");

function showTetrisImage(num)
{
    for(i = 0; i < tetrisImages.length; i++)
    {
        //Hide all main tetris images in carousel
        tetrisImages[i].classList.remove("show-image");
    }

    //Show main tetris image in carousel
    tetrisImages[num].classList.add("show-image");


    for(i = 0; i < tetrisThumbnails.length; i++)
    {
        //Remove active class from all tetris thumbnails
        tetrisThumbnails[i].classList.remove("active-thumbnail");
    }

    //Add active class for tetris thumbnail
    tetrisThumbnails[num].classList.add("active-thumbnail");

    //Update currentTetrisImageIndex
    currentTetrisImageIndex = num;

    tetrisImageCaption.innerHTML = tetrisImages[num].alt;
}

function incrementTetrisImage(num)
{
    if(currentTetrisImageIndex + num < 0)
    {
        currentTetrisImageIndex = tetrisImages.length - 1;
    }
    else
    {
        currentTetrisImageIndex = (currentTetrisImageIndex + num) % tetrisImages.length;
    }

    showTetrisImage(currentTetrisImageIndex);
}





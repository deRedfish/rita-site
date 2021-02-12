# Rita Pequeno's Portfolio

This website is meant as a simple introductory project to using React for simple purposes.

It was built for Rita Pequeno, a portuguese artist specializing in ceramics, to serve as her active portfolio. The logo, background and images are all from her, and the website's design has been shaped to her liking in a collaborative effort. 

This project is powered by create-react-app, and uses Bootstrap for react, the react-icons library and react-router-dom for the page loading. Everything is based off of the App.js file, which loads and switchs pages using Routes and Links. Each page is specified further in its own .js and .css file contained in the components folder in /src.

## Home 

The landing page is also the portfolio's main gallery. It consists of a grid of miniaturized versions of full images of the artist's works, with some effects on hover such as an overlay with title and a transitive border-radius. 

Clicking any of the images pops up a modal with the larger version of the photo, along with the work's title and description on the right side.

## Navbar

The navbar is made simple, with a logo (designed by me and Rita Pequeno), and buttons for each other page on the app. The logo serves as the home page button as well. 

Some simple effects were added on hover to the navlinks, making a roundish purple background transition in and out on hover. 

On mobile devices (device screen width under 960px) the navlinks disappear and a menu button shows up. When clicked, a navmenu slides over the screen from the left, containing all of the navlinks for the app.

The Instagram button is just a simple link to Rita Pequeno's artist instagram account.

## About 

The about page contains two divs, side by side using the same grid display used for the modal. It displays a photo of the artist and a short biography on a semi-transparent background for readability. Line-height is at 1.6, font is the same for the entire website: Century Gothic, sans-serif.

## Shop

The shop page does not handle any sort of cart or payments voluntarily. This would increase the app's complexity way beyond necessity and would raise hosting costs and security concerns. For now, inquiries about purchases need to be negociated directly with Rita Pequeno via her contact info. 

The works currently for sale are displayed here with the same modal design as the home page, and an adjusted grid format for gallery display.

## Events

This page is currently still under development. It is meant to showcase on-going exhibits or any other events that the artist is taking part in, but its design is not yet finalized.

### Mobile

The website has been made compatible with mobile formats manually through CSS adjustments based on screen width. On resizing, these change automatically.

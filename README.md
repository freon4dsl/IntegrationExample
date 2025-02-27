# Integration Example
This repo contains an example of how to integrate a Freon editor into a custom webpage.

Note, this is not a complete web application. Many aspects still need to be implemented, but all of these depend on 
how exactly your web application should look like, and on how it should function. The aim of this repo is to 
give you some pointers on how and were to use
functionality from the Freon `core` and `core-svelte` packages. Of course, you can use the UI and CSS libraries 
of your choice.

## Mono Repo

To start with, we have combined two projects into one mono repository, a Freon language project in the package 'dsl', and a 
Flowbite (https://flowbite-svelte.com/) web application project in the package 'webapp'. To make everything working 
in a mono repo slight changes were made to the package.json files, but in essence you can start with the 'Getting Started'
projects from both sources.

## Baseline Web Application

Next we have created a Flowbite web page with some empty places were the Freon editor, and other information about the language
should be added. This web application resembles the one that comes with Freon, which was build 
using a different Svelte library called Svelte Material UI (https://sveltematerialui.com).

## Integrating Freon

For information on how to integrate Freon, see https://www.freon4dsl.dev/Examples/WebsiteIntegration/.


# Arbetsprov

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Gisys - Arbetsprov

## Introduktion

Detta dokument innehåller en arbetsuppgift som Gisys använder vid rekrytering av ny personal. När du slutfört uppgiften zippar du antingen ihop din lösning alternativt skickar 
länken till ett GitHub repo till [rekrytering@gisys.se](mailto:rekrytering@gisys.se) alternativt svarar på mejlet som du har fått. Vi återkopplar
så snart som möjligt för att bekräfta att vi mottagit din lösning. Kort därefter bokas ett uppföljningssamtal där vi går igenom din lösning och du får möjlighet att motivera designbeslut m.m.

Arbetsprovet ska vara inskickat inom en vecka från utskickat datum eller enligt överenskommelse.

## Uppgift

Du ska bygga en applikation som hämtar data från ett externt API och presentera på ett snyggt sätt. 

## Vyer

### Alla anställda
En vy på alla anställda där man ser namnet på varje anställd där man kan klicka för att komma till den anställdes vy.

**API**
- http://dummy.restapiexample.com/api/v1/employees

### Specifik anställd
En vy där man ser all information om den anställde

**API**
- http://dummy.restapiexample.com/api/v1/employee/{id}
# Test_FCamara_Front

This is a simple FCamara test


## Prerequisites

- npm;
- angular cli;

### Getting Started

- setup and run this [api](https://github.com/italojs/Test_FCamara_API) first;
- Run `npm intall` in project path
- Run `ng serve` for crate a dev server. 
- Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Login

username: italo

password: nest@123

## Testing token

Do a login with user above and wait 1 minute, after that reload the home page(f5) and if the token is expirated, you will logout and return to login page.

### Obs

- The token is been logged in cosole.
- All requests is in `..\src\app\services` path
- To change the baseApiUrl go to `...\src\environments\environment.ts `

### Pages


#### `/` 
 
Login page

#### `/home` 

Home Page(product list).

You can't access this page without did a login before





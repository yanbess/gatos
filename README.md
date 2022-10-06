# Super Cat Database
## Structure of the application:
There are three independent layers of the application:

### ```/src/components: ```
Components responsive for view of a client part in browser. 
When some component wants to get some data it refers to resource class, that is in resources directory. And component doesn't care abort where and how this resource gets data (is it api, database or file). The components only knows that resource always have methods isSuccess() and getResult().

### ```/src/resources: ```
Resources responsive for a way of getting and preparing data for component. 
It can be api, database or file. Any resource should always return resource/base/ResourceBuilder, because component knows how to work only with this object.

### ```/src/services: ```
Service is just a class, which gets data from a specific source (api, database of file). 
Resource use it just like a tool to get data it needs. Service doesn't know anything about other components of the application.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

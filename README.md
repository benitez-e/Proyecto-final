# 1. Configurando el ambiente

Para comenzar se necesitan tener las herramientas instaladas. No hay restricciones con respecto al sistema operativo (_Windows, Linux o Mac_) y al browser (_Microsoft Edge, Chrome, Safari, Firefox, etc._), aunque se instalará Chrome para asegurar tener la misma experiencia en el transcurso del sitio web sin depender del sistema operativo. 

Se requiere instalar _node.js_ y _npm_. Aparte de estas herramientas, se necesita un editor de texto (_Visual Studio Code, Sublime, Atom, Vim, etc._). 

A continuación, se explica cómo instalar alguna de ellas.


## Instalar Chrome 

1. Navegar a [https://www.google.com/chrome/](https://www.google.com/chrome/) y descargar la versión correspondiente para tu plataforma.

    ![Sitio de Chrome](./images/chrome.jpg "Sitio de Chrome")

    _Sitio de Chrome_

1. Una vez descargado, seguir los pasos de la instalación.

## IDE / Editor. Ejemplo Visual Studio Code

Para editar el código, se va a aprovechar _Visual Studio Code_, en especial porque permite trabajar en todas las plataformas y es gratuito. Igualmente, se puede usar su editor de texto o IDE preferido.

1. Navegar a [https://code.visualstudio.com](https://code.visualstudio.com) y descargar la versión correspondiente para tu plataforma.

    ![Sitio de Visual Studio Code](./images/vs-code.png "Sitio de Visual Studio Code")

    _Sitio de Visual Studio Code_

1. Una vez descargado, seguir los pasos de la instalación.


## Node.js & npm

Hoy en día existen muchas herramientas para el desarrollo web que aprovechan [node.js](https://nodejs.org) y [npm](https://www.npmjs.com). 
El primero sirve para poder correr las herramientas necesarias. El segundo se necesita dado que es la forma en la que se distribuyen los paquetes que utilizaremos.

> **Nota**: Verificar que está instalada al menos la versión _4.x.x_ de _node.js_ y la versión _3.x.x_ de _npm_ corriendo `node -v` y `npm -v` en la terminal/consola.

1. Navegar al sitio de descargas de _node.js_: [https://nodejs.org/es/download/](https://nodejs.org/es/download/).

    ![Sitio de node.js](./images/nodejs.jpg "Sitio de node.js")

    _Sitio de node.js_
    

1. Una vez descargado, seguir los pasos de la instalación.


## Conclusiones

Ahora que el entorno de desarrollo está listo, se puede comenzar. 

# 2. Entendiendo el proyecto

Es el sitio web de una marca de accesorios femeninos. 
El programa abarca tanto datos de la empresa como diseño gráfico atractivo y útil para sus clientes, actualización de productos, catálogos, etcétera. 
En este módulo, vamos a entender de qué se trata, como también que tecnologías utiliza.

## Estructura del proyecto

Lo primero que vamos a ver es la estructura del proyecto. El mismo se trata de un proyecto web con un servidor hecho en [node.js](https://nodejs.org/en/) que utiliza JavaScript y [Bootstrap](http://getbootstrap.com).

Ahora, vamos a arrancar a revisar el proyecto mirando el código.

1. Primero abrir la carpeta Json con un IDE para ver la estructura de archivos.

1. Para recorrer el proyecto, vamos a arrancar abriendo el archivo _package.json_. Éste archivo es típico de un proyecto hecho en _node.js_ y contiene las dependencias e información del mismo.

{
  "name": "sec_compras",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bootstrap": "^3.3.7",
    "jquery": "^3.2.1"
  }
}

1. En las otras carpetas podemos encontrar las siguientes cosas:
    
    - _css_: Las hojas de estilos que son usados en el cliente. Estos incluyen [Bootstrap (http://getbootstrap.com) y algunos estilos propios.
    - _img_: Algunas imágenes que son usadas por el sitio.
    - _js_: Archivos de js aplicados a algunas secciones. 
    - _html_: los archivos correspondientes a cada una de las vistas con el html de cada una. 

1. Antes de pasar a la siguiente tarea, recorrer un poco los archivos para ver que hay en cada uno a la hora de comenzar.

## Probando la solución

Ahora que ya vimos los archivos que contiene nuestro proyecto, las tecnologías utilizadas y exploramos un poco de la misma, vamos a proceder a verla en funcionamiento.

1. Primero, abrir una consola/terminal en la carpeta donde se haya copiado la solución.

1. Lo primero antes de iniciar el servidor, será asegurarnos de tener las dependencias, para esto, ejecutamos el siguiente comando.

    ```
    npm install
    ```

1. Una vez que termine de instalar las dependencias, iniciaremos el servidor con el siguiente comando.

    ```
    npm start
    ```

1. Ahora, abrir el browser y navegar a [http://localhost:3000](http://localhost:3000).


1. Volver a la terminal para ver la salida del servidor. Notar que se realizó una llamada a la API con el método _GET_.

*PROBAR LA PAGINA*

-Ir a inicio, clickear en enlaces, llenar formularios, visualizar imagenes, refrescar, etc. 


## Responsive design

Una multitud de tamaños de pantalla diferentes existen en los teléfonos, "phablets", tabletas, escritorios, consolas de juegos, televisores e incluso wearables. Los tamaños de la pantalla siempre están cambiando, por lo que es importante que su sitio pueda adaptarse a cualquiera de ellos, hoy o en el futuro.

Un diseño responsive responde a las necesidades de los usuarios y los dispositivos que están utilizando. El diseño cambia según el tamaño y las capacidades del dispositivo. Por ejemplo, en un teléfono los usuarios verían el contenido mostrado en una sola vista de columna; una tableta puede mostrar el mismo contenido en dos columnas.

### Viewport

Las páginas optimizadas para una variedad de dispositivos deben incluir una etiqueta de meta viewport en la cabecera del documento. Una etiqueta meta viewport le da al navegador instrucciones sobre cómo controlar las dimensiones de la página y la escala.

Para intentar proporcionar la mejor experiencia, los navegadores móviles procesan la página a un ancho de pantalla de escritorio (usualmente alrededor de 980px, aunque esto varía según los dispositivos) y, a continuación, intentan mejorar el aspecto aumentando los tamaños de fuente pantalla. Esto significa que los tamaños de las fuentes pueden parecer inconsistentes para los usuarios, que pueden tener que pulsar dos veces o hacer zoom con gestos para ver e interactuar con el contenido.

Podemos encontrar el siguiente meta tag en los  archivos html.

El uso del valor meta viewport `width=device-width` indica a la página que coincida con el ancho de la pantalla en píxeles independientes del dispositivo. Esto permite que la página refluya contenido para que coincida con diferentes tamaños de pantalla, ya sea renderizado en un teléfono móvil pequeño o en un monitor de escritorio grande.


### Media queries

Las media queries son simples filtros que se pueden aplicar a estilos CSS. Facilitan el cambio de estilos basándose en las características del dispositivo que procesa el contenido, incluido el tipo de pantalla, el ancho, la altura, la orientación y la resolución.

Además de utilizar el atributo `media` en el tag de stylesheet, hay otras dos formas de aplicar media queries que se pueden utilizar en un archivo CSS: `@media` y `@import`.

```css
@media print {
  /* print style sheets go here */
}

@import url(print.css) print;
```

La lógica que se aplica a las media queries no es mutuamente excluyente y se aplicará todos los bloques de css donde el criterio de la media query sea válido.

Las media queries nos permiten crear una experiencia de respuesta en la que se aplican estilos específicos a pantallas pequeñas, pantallas grandes y en cualquier otro lugar. La sintaxis de la media query permite la creación de reglas que se pueden aplicar dependiendo de las características del dispositivo.

```css
@media (query) {
  /* Reglas de CSS que van a ser utilizadas cuando la query se cumpla */
}
```

Las consultas más comunes son:

- `min-width`: Reglas aplicadas para cualquier **ancho** de navegador **mayor** que el **valor definido** en la query.
- `max-width`: Reglas aplicadas para cualquier **ancho** de navegador **menor** que el **valor definido** en la query.
- `min-height`: Reglas aplicadas para cualquier **altura** del navegador **mayor** que el **valor definido** en la query.
- `max-height`: Reglas aplicadas para cualquier **altura** del navegador **menor** que el **valor definido** en la query.
- `orientation=portrait`: Reglas aplicadas a cualquier navegador donde la **altura** sea **mayor o igual** que el **ancho**.
- `orientation=landscape`: Reglas para cualquier navegador donde el **ancho** sea **mayor** que la **altura**.

```css
div {
    background-color: red;
}

@media (min-width: 500px) and (max-width: 600px) {
    div {
        background-color: #000;
    }
}
```

### Flexbox

<!-- https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Usando_las_cajas_flexibles_CSS -->

La propiedad Flexible Box, o flexbox, de CSS3 es un modo de diseño que permite colocar los elementos de una página para que se comporten de forma predecible cuando el diseño de la página debe acomodarse a diferentes tamaños de pantalla y diferentes dispositivos. Para muchas aplicaciones, el modelo "caja flexible" produce una mejora sobre el modelo "bloque" porque no utiliza la propiedad float, ni hace que los márgenes del contenedor flexible interfieran con los márgenes de sus contenidos.

Muchos diseñadores verán que el modelo "caja flexible" es más sencillo de utilizar. Los elementos "hijos" de una "caja flexible" pueden colocarse en cualquier dirección y pueden tener dimensiones flexibles para adaptarse al espacio visible. Posicionar los elementos "hijos" es por tanto mucho más sencillo, y los diseños complejos pueden hacerse más fácilmente y con código más limpio, ya que el orden de visualización de los elementos es independiente del orden que estos tengan en el código fuente. Esta independencia afecta intencionadamente únicamente a la representación visual, dejando el orden de locución y navegación a lo que diga el código fuente.



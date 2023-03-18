Generador de JSON

Una aplicación web que genera un json de 4000 elementos y los muestra en pantalla de manera óptima, cada uno con una foto y una breve descripción aleatoria. El usuario puede buscar en la lista escribiendo un término de búsqueda, ya sea por texto o por id.

Instalación

Clona el repositorio: git clone https://github.com/tu-nombre-de-usuario/generador-json.git
Navega hasta el directorio del proyecto: cd generador-json
Instala las dependencias: npm install
Inicia el servidor de desarrollo: npm ionic serve o npr run serve
Abre tu navegador web y ve a http://localhost:8080 para ver la aplicación.

Uso

La aplicación consiste en una sola página con una barra de búsqueda y una lista de elementos. La lista se genera automáticamente cuando se carga la página, utilizando el composable useJson para generar un array de objetos aleatorios con propiedades id, photo y text.

Para buscar en la lista, escribe un término de búsqueda en la barra de búsqueda. La lista se filtrará automáticamente mientras escribes, mostrando solo los elementos que coinciden con el término de búsqueda.

Tecnologías Utilizadas

Vue.js
Ionic Framework
vue-virtual-scroller
lorem-ipsum

Créditos

Este proyecto fue creado por David González como ejercicio de práctica para aprender Vue.js e Ionic Framework.

Las fotos en la aplicación se obtuvieron de picsum.photos.

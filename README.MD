# Este repositorio está diseñado para mostrar cómo hacer una aplicación *CRUD* con un stack sencillo
## Sebastián Bustos Beni

### Comandos importantes:
```
npm init -y
npm install --save mysql2
npm install --save express
npm install --save ejs
npm install
```
---
### Se utilizará:
- Node.js
- Next.js

---

### Esta es un apunte de cómo usar .ejs:
```
<% /* Comentario en EJS */ %>

<!-- Imprimir valores -->
<%= variable %> <!-- Escapa el HTML -->
<%- variable %> <!-- No escapa el HTML -->

<!-- Estructuras de control -->
<% if (condicion) { %>
  Código HTML aquí
<% } else { %>
  Otro código HTML aquí
<% } %>

<% for (let item of items) { %>
  <%= item %>
<% } %>

<!-- Incluir una vista parcial -->
<%- include('ruta/archivo') %>

```
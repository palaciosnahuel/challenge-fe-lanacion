
# LA NACION 📰

Challenge FrontEnd para La Nacion.

_Ver Requerimientos en Challenge.pdf_

## Built With 🪛
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

## Getting Started 🛫

🌐 Disponible online en: https://challenge-fe-lanacion.vercel.app/

### Docker 🐋

Run
```bash
docker build -t lanacion-fe .
docker-compose up --build
```
Disponible en http://localhost:3000/

### Manual ✋

Clonar repositorio
```bash
git clone <url_del_repositorio>
```
Instalar dependencias
```bash
npm install
```
Ejecutar proyecto

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Disponible en [http://localhost:3000](http://localhost:3000).

## Estructura 🏗️

La estructura del proyecto de React se organiza de la siguiente manera:

**Layer App**: 

📂 Views 🖼️
- Para cada Vista, generamos una carpeta dentro de Views con el nombre de la misma, por ejemplo,      "📂recipes".
- Dentro de la carpeta generada anteriormente, una  llamada "📂components", la cual contiene los componentes que serán utilizados exclusivamente en esta vista. **_Estos componentes pueden estar organizados en subcarpetas si son complejos o necesitan una estructura más elaborada._**
- 📂 Carpeta de layout: Aquí se almacenan todos los componentes utilizados en el layout de la aplicación.

📂 Components 🔗
- Aquí guardaremos los componentes de uso general. _(Por ejemplo, botones o inputs)_

📂 Providers 🛸
- Dentro de esta carpeta, encontraremos todos los Context.


**Layer infrastructure**

Repository 🛥️
- El repositorio se encarga de la recolección y gestión de datos. Interactúa directamente con las fuentes de datos, como bases de datos, APIs o sistemas de archivos. El repositorio garantiza la integridad y disponibilidad de los datos para su uso por otras capas de la aplicación.

Usecase 🏭
- Los casos de uso se encargan de aplicar la lógica  y reglas a los datos recopilados por el repositorio. Sirven como intermediarios entre el repositorio y el frontend, procesando y transformando los datos en bruto en un formato que sea consumible y comprensible por la interfaz de usuario. 

## TODO ⚠️
- Continuar con coverage de test.


[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
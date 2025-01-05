<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

# Introducció Teòrica

En aquest projecte s'han tractat diversos conceptes relacionats amb la configuració de GitHub Actions, la creació de workflows automatitzats, i l'ús d'eines per a la gestió de proves i el desplegament d'aplicacions web.

## GitHub Actions
GitHub Actions és una eina d'integració contínua (CI) i desplegament continu (CD) que permet automatitzar fluxos de treball en repositoris de GitHub. A través de la definició de workflows, es poden executar tasques com la compilació del codi, l'execució de proves, i el desplegament de l'aplicació en entorns de producció o test. En aquest projecte, s'ha creat un workflow amb diversos jobs que executen tasques específiques com la comprovació de l'estil del codi, l'execució de proves automatitzades amb Cypress, i la publicació de resultats en el repositori.

## ESLint
ESLint és una eina que s'utilitza per a analitzar el codi font i identificar problemes relacionats amb l'estil del codi, errors de sintaxi i pràctiques poc recomanades. Aquesta eina ajuda els desenvolupadors a mantenir un codi net, llegible i lliure de defectes potencials, aplicant regles de codificació establertes. En aquest projecte, es va utilitzar ESLint per a comprovar la sintaxi de JavaScript i assegurar-se que el codi segueix les bones pràctiques abans de ser enviat a producció. El workflow creat amb GitHub Actions inclou una tasca per executar el linter i garantir que el codi compleixi els estàndards de qualitat establerts.

## Cypress
Cypress és una eina popular per a la realització de proves automatitzades en aplicacions web. S'utilitza per a realitzar proves d'integració i end-to-end (E2E), simulant la interacció d'un usuari amb l'aplicació. En aquest projecte, s'han creat proves automatitzades per garantir el bon funcionament de la interfície web, amb l'objectiu d'evitar errors en el codi i millorar la qualitat del software.

## Desplegament en Vercel
Per al desplegament del projecte en un entorn de producció, s'ha utilitzat Vercel, una plataforma per a la creació i el desplegament de projectes web. Vercel facilita el desplegament d'aplicacions de manera ràpida i senzilla, amb un flux de treball molt integrat amb GitHub, permetent desplegar el projecte automàticament en cada push a la branca principal del repositori.

A més, aquest projecte ha integrat un badge en el README del repositori, el qual proporciona informació visual sobre l'estat actual de les proves automatitzades i el workflow de desplegament.

## Nodemailer
Nodemailer és una llibreria per a Node.js que facilita l'enviament de correus electrònics des d'una aplicació. Aquesta eina permet configurar fàcilment un servidor SMTP per a l'enviament de correus, així com l'administració de missatges amb format HTML, arxius adjunts i altres característiques avançades. En aquest projecte, Nodemailer es va utilitzar per a enviar correus electrònics automàtics com a part del workflow de GitHub Actions, notificant l'estat de les proves i del desplegament del projecte. Aquesta funcionalitat és útil per mantenir els desenvolupadors informats sobre l'estat del seu codi i processos relacionats.

# Documentació de l'activitat

## Preparació de l'entorn

Instal·lació de dependències i ressolució de conflictes de versions:

<p align="center">
  <img src="./Captures/1 - Instalació de dependències i ressolució de conflictes de versions.png" alt="imatge" width="100%">
</p>

Prova d'execució:

<p align="center">
  <img src="./Captures/2 - Prova d&apos;execució.png" alt="imatge" width="100%">
</p>

Prova de funcionament del Linter:

<p align="center">
  <img src="./Captures/3 - Prova de funcionament del linter.png" alt="imatge" width="100%">
</p>

Creació de repositori a GitHub:

<p align="center">
  <img src="./Captures/4 - Creació de repositori a GitHub.png" alt="imatge" width="100%">
</p>

## Linter Job

Creació de l'arxiu del workflow i definició del "linter_job":

<p align="center">
  <img src="./Captures/5 - Creació de l&apos;arxiu del workflow i definició del linter_job.png" alt="imatge" width="100%">
</p>

Comprovació de que s'executa el workflow quan realitzem un push:

<p align="center">
  <img src="./Captures/6 - Comprovació de que s&apos;executa el workflow quan realitzem un push.png" alt="imatge" width="100%">
</p>

L'execució falla perquè el Linter detecta errors al codi del projecte:

<p align="center">
  <img src="./Captures/7 - L&apos;execució falla perque el linter detecta errors al codi del projecte.png" alt="imatge" width="100%">
</p>

Es corregixen els errors que detecta el Linter al codi del projecte i es pugen els canvis al repositori remot:

<p align="center">
  <img src="./Captures/8 - Es corregixen els errors que detecta el linter al codi del projecte i es pugen els canvis al repositori remot..png" alt="imatge" width="100%">
</p>

Ara el workflow s'executa sense problemes:

<p align="center">
  <img src="./Captures/9 - Ara el workflow s&apos;executa sense problemes.png" alt="imatge" width="100%">
</p>

## Cypress Job

Definició del "cypress_job":

<p align="center">
  <img src="./Captures/10 - Definició del cypress_job.png" alt="imatge" width="100%">
</p>

El workflow s'executa correctament:

<p align="center">
  <img src="./Captures/11 - El workflow s&apos;executa correctament.png" alt="imatge" width="100%">
</p>

Artefacte generat:

<p align="center">
  <img src="./Captures/12 - Artefacte generat.png" alt="imatge" width="100%">
</p>

## Add Badge Job

Definició del "add_badge_job":

<p align="center">
  <img src="./Captures/13 - Definició del add_badge_job.png" alt="imatge" width="100%">
</p>

Creació de la custom action per a definir el badge corresponent i afegir-lo al README.md:

<p align="center">
  <img src="./Captures/14 - Creació de la custom action per a definir el badge corresponent i afegirlo al readme.png" alt="imatge" width="100%">
</p>

La lògica de l'action es definix en un script:

<p align="center">
  <img src="./Captures/15 - La lògica de l&apos;action es definix en un script.png" alt="imatge" width="100%">
</p>

Assegurem que l'arxiu tinga permissos d'execució:

<p align="center">
  <img src="./Captures/16 - Assegurem que l&apos;arxiu tinga permissos d&apos;execució.png" alt="imatge" width="100%">
</p>

Després de corregir alguns errors, el workflow s'executa sense problemes:

<p align="center">
  <img src="./Captures/17 - Després de corregir alguns errors el workflow s&apos;executa sense problemes.png" alt="imatge" width="100%">
</p>

Comprovació de que el badge s'afegix correctament al README.md:

<p align="center">
  <img src="./Captures/18 - Comprovació de que el badge s&apos;afegix correctament al README.png" alt="imatge" width="100%">
</p>

## Deploy Job

Seguint amb el job següent, revisem la documentació de l'action i, en primer lloc, assegurem que, en l'arxiu "vercel.json", "GitHub" estiga desactivat:

<p align="center">
  <img src="./Captures/19 - Seguint amb el job seguent revisem la documentació de l&apos;action i en primer lloc assegurem que en l&apos;arxiu vercelJson github enabled siga false.png" alt="imatge" width="100%">
</p>

Establim "builds" utilitzant "@vercel/static":

<p align="center">
  <img src="./Captures/20 - Establim builds a vercel static per a evitar el build de verceli que siga l&apos;action la que el gestione.png" alt="imatge" width="100%">
</p>

Creem un nou projecte de Vercel a partir del repositori de GitHub:

<p align="center">
  <img src="./Captures/21 - Creem un nou projecte de Vercel a partir del repositori de github.png" alt="imatge" width="100%">
</p>

Projecte creat correctament:

<p align="center">
  <img src="./Captures/22 - Projecte creat correctament.png" alt="imatge" width="100%">
</p>

Generem un token de Vercel:

<p align="center">
  <img src="./Captures/24 - Generem un token de vercel.png" alt="imatge" width="100%">
</p>

Identifiquem l'ID d'usuari de Vercel:

<p align="center">
  <img src="./Captures/25 - Identifiquem l&apos;ID d&apos;usuari de Vercel.png" alt="imatge" width="100%">
</p>

Identifiquem l'ID del projecte:

<p align="center">
  <img src="./Captures/26 - Identifiquem l&apos;ID del projecte.png" alt="imatge" width="100%">
</p>

Afegim les tres variables als Secrets del nostre repositori en GitHub:

<p align="center">
  <img src="./Captures/27 - Afegim les tres variables als secrets del nostre repositori de github.png" alt="imatge" width="100%">
</p>

Definició del "deploy_job" afegint els Secrets de Vercel:

<p align="center">
  <img src="./Captures/28 - Definició del deploy_job afegint els secrets de vercel.png" alt="imatge" width="100%">
</p>

El workflow s'executa correctament:

<p align="center">
  <img src="./Captures/29 - El workflow s&apos;executa correctament.png" alt="imatge" width="100%">
</p>

## Notification Job

Per a definir el "notification_job", creem dos nous Secrets de GitHub amb el nostre email i la seua contrassenya:

<p align="center">
  <img src="./Captures/30 - Per a definir el notification_job creem dos nous secrets de github amb el nostre email i la seua contrassenya.png" alt="imatge" width="100%">
</p>

Definim el "notification_job" passant-hi totes les variables d'entorn necessàries:

<p align="center">
  <img src="./Captures/31 - Definim el notification_job passant totes les variables d&apos;entorn necessàries.png" alt="imatge" width="100%">
</p>

Desenvolupem el script que enviarà el correu basant-nos en la llibreria "nodemailer":

<p align="center">
  <img src="./Captures/32 - Desenvolupem el script que enviarà el correu basant-nos en la llibreria de nodemailer.png" alt="imatge" width="100%">
</p>

El workflow s'executa correctament:

<p align="center">
  <img src="./Captures/33 - El workflow s&apos;executa correctament.png" alt="imatge" width="100%">
</p>

El correu s'envia correctament informant sobre el resultat de cada job:

<p align="center">
  <img src="./Captures/34 - El correu s&apos;envia correctament informant sobre el resultat de cada job.png" alt="imatge" width="100%">
</p>

# Extra: Mostrar mètriques d'ús al repositori personal

Creem el repositori personal amb el README.md:

<p align="center">
  <img src="./Captures/35 - Creem el repositori personal amb el readme.png" alt="imatge" width="100%">
</p>

Generem un token per a poder utilitzar l'action de Metrics Embed:

<p align="center">
  <img src="./Captures/36 - Generem un token per a utilitzar l&apos;action de Metrics Embed.png" alt="imatge" width="100%">
</p>

Afegim el token generat a la llista de Secrets del repositori personal:

<p align="center">
  <img src="./Captures/37 - Afegim el token generat a la llista de secrets del repositori personal.png" alt="imatge" width="100%">
</p>

Configurem el workflow per a que s'afegisquen o s'actualitzen les mètriques donades unes condicions:

<p align="center">
  <img src="./Captures/38 - Configurem un workflow per a que s&apos;afegisquen o s&apos;actualitzen les mètriques donades unes condicions.png" alt="imatge" width="100%">
</p>

Configurem el README.md amb la info bàsica i afegim la imatge que generarà l'action:

<p align="center">
  <img src="./Captures/39 - Configurem el README amb la info bàsica i afegim la imatge que generarà l&apos;action.png" alt="imatge" width="100%">
</p>

Les mètriques es mostren correctament:

<p align="center">
  <img src="./Captures/40 - Les mètriques es mostren correctament.png" alt="imatge" width="100%">
</p>

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

1 - Instalació de dependències i ressolució de conflictes de versions:

<p align="center">
  <img src="./Captures/1 - Instalació de dependències i ressolució de conflictes de versions.png" alt="imatge" width="100%">
</p>
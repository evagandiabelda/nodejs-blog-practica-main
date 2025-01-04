#!/bin/bash

# Rep el resultat dels tests (success o failure):
outcome="$1"

# Afegix el badge corresponent al resultat dels tests:
if [[ "$outcome" == "success" ]]; then
  badge="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg"
else
  badge="https://img.shields.io/badge/test-failure-red"
fi

# Modifica el README.md per a afegir el badge:
sed -i "/RESULTAT DELS ÚLTIMS TESTS/a ![Test Status](${badge})" README.md

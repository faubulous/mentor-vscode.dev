#! /bin/bash

echo "Downloading codicon.css.."
wget https://unpkg.com/@vscode/codicons@latest/dist/codicon.css
mv codicon.css src/assets/styles/

echo "Downloading codicon.ttf.."
wget https://unpkg.com/@vscode/codicons@latest/dist/codicon.ttf
mv codicon.ttf src/assets/styles/
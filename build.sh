#!/bin/sh
cd src

VERSION=$(cat manifest.json | grep '"version":' | cut -d '"' -f 4)
echo "Building version $VERSION"

# rm dist folder
rm -rf ../dist

# create dist folder
mkdir -p ../dist/v${VERSION}

# build chrome
zip -r ../dist/v${VERSION}/chrome-chatgpt-v${VERSION}.zip .

# unzip
unzip ../dist/v${VERSION}/chrome-chatgpt-v${VERSION}.zip -d ../dist/v${VERSION}/chrome-chatgpt-v${VERSION}

cd ..